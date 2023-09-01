// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { google } = require('googleapis');
const fs = require('fs');
const tokenfile = fs.readFileSync('token.json');

export default async function handler(req, res) {
  const classroom = google.classroom({ version: 'v1', auth: google.auth.fromJSON(JSON.parse(tokenfile))});
  const response = await classroom.courses.list({
    pageSize: 10,
  });
  res.status(200).json(response.data);
}