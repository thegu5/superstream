// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { google } = require('googleapis');
const fs = require('fs');
const tokenfile = fs.readFileSync('token.json');

export default async function handler(req, res) {
  const classroom = google.classroom({ version: 'v1', auth: google.auth.fromJSON(JSON.parse(tokenfile))});
  let classes = req.query['classes']?.split(',');
  if (classes === undefined) return;
  try {
    let posts = [];
  for (let i in classes) {
    const response = await classroom.courses.courseWorkMaterials.list({
        courseId: classes[i]
      });
    let newPosts = response.courseWork.map(
        cw => { 
            if (cw.dueDate) {
                let dueDate = new Date();
                dueDate.setFullYear(cw.dueDate.year);
                dueDate.setMonth(cw.dueDate.month);
                dueDate.setDay(cw.dueDate.day);
                dueDate.setHour(cw.dueTime.hour);
                dueDate.setMinute(cw.dueTime.minute);
            }
            else {
                let dueDate = undefined;
            }
            const creator = classroom.userProfiles.get(cw.creatorUserId);
            
            return {
                title: cw.title,
                description: cw.description,
                creationTime: cw.creationTime,  // guaranteed to work with `new Date()`
                updateTime: cw.updateTime,
                dueDate,  // can be empty
                author: {
                "name": creator.name.fullName,
                "picture": creator.photoUrl
                },
                materials: [
                {
                    //TODO
                }
                ],
                class: classes[i],
                url: cw.alternateLink
            }
        }
    );
    posts = posts.concatenate(newPosts);
  }
  res.status(200).json(posts)
  } catch(err) {
    res.status(400).json(err)
  }
}