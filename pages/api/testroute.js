// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { google } = require('googleapis');
const fs = require('fs');
const tokenfile = fs.readFileSync('token.json');

export default async function handler(req, res) {
  const classroom = google.classroom({ version: 'v1', auth: google.auth.fromJSON(JSON.parse(tokenfile))});
  const response = await classroom.courses.announcements.list({
    courseId: 200508021902
  })
  res.status(200).json(response.data);
}
/// API SCHEMA
// Route: get_class_list
// Route: get_bulk_class_posts(classes)
// Route: get_class_posts(class, types)
//// types: [Enum(Assignments, Announcements, Material)]

// Object: Post
/*
{
  title: string || '',  // can be empty
  description: string,
  post_time: int,  // unix timestamp
  due_time: int || undefined,  // can be empty
  author: {
    "name": string,
    "picture": string  (URL to pfp)
  },
  materials: [
    {
      //TODO
    }
  ],
  class: string  //
  url: string
}
 */
// 
// Assignments, Announcements --converted to--> Post