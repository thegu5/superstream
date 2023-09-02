// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { google } = require('googleapis');
const fs = require('fs');
const tokenfile = fs.readFileSync('token.json');

export default async function handler(req, res) {
  const classroom = google.classroom({ version: 'v1', auth: google.auth.fromJSON(JSON.parse(tokenfile))});
  const response = await classroom.courses.list({
    pageSize: 10,
  });
  let out = [];
  console.log(response, response.data.courses);
  for (let i in response.data.courses) {
    console.log("entered loop???????")
    const course = response.data.courses[i];
    console.log(JSON.stringify(course));
    if (course.courseState !== "ACTIVE") continue;
    out.push({
      name: course.name,
      id: course.id,
      url: course.alternateLink//.replace('/c/', '/u/{USERNUM}/c/')
    })
  }
  res.status(200).json(out);
}