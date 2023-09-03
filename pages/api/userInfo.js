const { google } = require('googleapis');
const fs = require('fs');
const tokenfile = fs.readFileSync('token.json');

export default async function handler(req, res) {
    const classroom = google.classroom({ version: 'v1', auth: google.auth.fromJSON(JSON.parse(tokenfile))});
    const response = await classroom.userProfiles.get({
        userId: 'me'
    })
    let data = response.data;
    data.emailAddress = undefined;
    res.status(200).json(data);
}
