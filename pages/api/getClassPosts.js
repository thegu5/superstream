// Call format: /api/getClassPosts?classes=<classID>[,classId,classId...]

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

async function getAuthor(classroom, userId) {
  const creator = await classroom.userProfiles.get({
    userId,
  });
  return {
    name: creator.data.name.fullName,
    picture: creator.data.photoUrl, // can be empty
  };
}

function getMaterials(materials) {
  return materials?.map((mat) => {
    const type = Object.keys(mat)[0];
    let url;
    let title;
    let thumbnailUrl;
    switch (type) {
      case "driveFile":
        title = mat[type].driveFile.title;
        thumbnailUrl = mat[type].driveFile.thumbnailUrl;
        url = mat[type].driveFile.alternateLink;
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
  });
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
      const resCourseWork = await classroom.courses.courseWork.list({
        courseId: classes[i],
      });
      let newCourseWork = [];
      if (!isEmpty(resCourseWork.data)) {
        newCourseWork = await Promise.all(
          resCourseWork.data.courseWork.map(async (cw) => {
            let dueDate = undefined;
            if (cw.dueDate) {
              dueDate = new Date();
              dueDate.setFullYear(cw.dueDate.year);
              dueDate.setMonth(cw.dueDate.month);
              dueDate.setDate(cw.dueDate.day);
              dueDate.setHours(cw.dueTime.hours);
              dueDate.setMinutes(cw.dueTime.minutes);
            }
            const author = await getAuthor(classroom, cw.creatorUserId);
            return {
              title: cw.title,
              description: cw.description,
              creationTime: cw.creationTime, // guaranteed to work with `new Date()`
              updateTime: cw.updateTime,
              dueDate, // can be empty
              author,
              materials: getMaterials(cw.materials),
              classId: classes[i],
              url: cw.alternateLink,
              type: "classwork",
            };
          }),
        );
      }

      const { data: announcementsData } =
        await classroom.courses.announcements.list({
          courseId: classes[i],
        });
      let newAnnouncements = [];
      if (!isEmpty(announcementsData)) {
        newAnnouncements = await Promise.all(
          announcementsData.announcements.map(async (announcement) => {
            const author = await getAuthor(
              classroom,
              announcement.creatorUserId,
            );
            console.log(getMaterials(announcement.materials));
            return {
              title: "", // no titles
              description: announcement.text,
              creationTime: announcement.creationTime, // guaranteed to work with `new Date()`
              updateTime: announcement.updateTime,
              author,
              materials: getMaterials(announcement.materials),
              classId: announcement.courseId,
              url: announcement.alternateLink,
              type: "announcement",
            };
          }),
        );
      }

      const { data: materialsData } =
        await classroom.courses.courseWorkMaterials.list({
          courseId: classes[i],
        });
      let newMaterials = [];
      if (!isEmpty(materialsData)) {
        newMaterials = await Promise.all(
          materialsData.courseWorkMaterial.map(async (material) => {
            const author = await getAuthor(classroom, material.creatorUserId);
            return {
              title: material.title,
              description: material.description,
              creationTime: material.creationTime,
              updateTime: material.updateTime,
              materials: getMaterials(material.materials),
              author,
              classId: material.courseId,
              url: material.alternateLink,
              type: "material",
            };
          }),
        );
      }

      posts = posts
        .concat(newCourseWork)
        .concat(newAnnouncements)
        .concat(newMaterials);
    }
    // enable caching
    res.setHeader(
      "Cache-Control",
      "private, s-maxage=10, stale-while-revalidate=20",
    );
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
}
