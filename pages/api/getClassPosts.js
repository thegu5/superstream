// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { google } = require("googleapis");
const fs = require("fs");
const tokenfile = fs.readFileSync("token.json");

// https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
function isEmpty(obj) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }

  return true;
}

export default async function handler(req, res) {
  const classroom = google.classroom({
    version: "v1",
    auth: google.auth.fromJSON(JSON.parse(tokenfile)),
  });
  let classes = req.query["classes"]?.split(",");
  if (classes === undefined) return;
  try {
    let posts = [];
    for (let i in classes) {
      const response = await classroom.courses.courseWork.list({
        courseId: classes[i],
      });
      if (isEmpty(response.data)) continue;
      let newPosts = await Promise.all(
        response.data.courseWork.map(async (cw) => {
          let dueDate = undefined;
          if (cw.dueDate) {
            dueDate = new Date();
            dueDate.setFullYear(cw.dueDate.year);
            dueDate.setMonth(cw.dueDate.month);
            dueDate.setDate(cw.dueDate.day);
            dueDate.setHours(cw.dueTime.hour);
            dueDate.setMinutes(cw.dueTime.minute);
          }
          const creator = await classroom.userProfiles.get({
            userId: cw.creatorUserId,
          });

          return {
            title: cw.title,
            description: cw.description,
            creationTime: cw.creationTime, // guaranteed to work with `new Date()`
            updateTime: cw.updateTime,
            dueDate, // can be empty
            author: {
              name: creator.data.name.fullName,
              picture: creator.data.photoUrl, // can be empty
            },
            materials: cw.materials?.map((mat) => {
              const type = Object.keys(mat)[0];
              let url;
              let title;
              let thumbnailUrl;
              switch (type) {
                case "driveFile":
                  title = mat[type].driveFile.title;
                  thumbnailUrl = mat[type].driveFile.thumbnailUrl;
                  url = mat[type].driveFile.url;
                  break;

                case "youtubeVideo":
                  title = mat[type].title;
                  thumbnailUrl = mat[type].thumbnailUrl;
                  url = mat[type].alternateLink;
                  break;

                case "link":
                  title = mat[type].title;
                  thumbnailUrl = mat[type].thumbnailUrl;
                  url = mat[type].url;
                  break;
                case "form":
                  title = mat[type].title;
                  thumbnailUrl = mat[type].thumbnailUrl;
                  url = mat[type].formUrl;
                  break;

                default:
                  return { type };
              }
              return {
                type,
                url,
                title,
                thumbnailUrl,
              };
            }),
            classId: classes[i],
            url: cw.alternateLink,
          };
        }),
      );
      posts = posts.concat(newPosts);
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
}
