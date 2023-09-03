## SuperStream

### Overview
- A view of Google Classroom optimized for the workflow of power users
- All activity is sorted into one stream, with options to filter for classes and activity type
- Links directly to Google Classroom pages


## Get Started

### Installation
Clone the repository with `git clone`. Make sure you have a relatively recent node version, then `npm install`. You may need to change the `baseUrl` in `pages/index.js` depending on what enviroment you're in. `npm run dev` for the development server, `npm run build` to build for production and `npm run start` to run the build.

#### Authentication

Using this project requires generating the appropriate credentials associated with the Google account you want to use. Before proceeding, please read the [Google Classroom API Python Quickstart](https://developers.google.com/classroom/quickstart/python). Follow the instructions until the **Configure the sample** step. Keep in mind:
- http://localhost:3001/ needs to be a redirect URI in the Google Cloud project
- Your credentials.json should be placed in the quickstart/ folder
- Once authentication is complete, move both jsons to the root directory
-   If you get an error saying client_email is missing, add the following key-value pair to token.json: `"type": "authorized_user"`
-   You may need to change the user number in the code depending on how many google accounts you're logged into if the links to google classroom don't work.


### Additional Information

#### Tech Stack
- Backend and frontend in Next.js
- Retrieved class and user data from Google Classroom's API using the backend
- Material UI for the UI components of the frontend
#### Challenges
- Merge conflicts that we were able to resolve through Github
- Making the API interfaces consistent as a result of the Google API's various nested objects and strange schemas
- Navigating the authentication process to use Google's API
- Using Material UI for the first time
#### What we learned
- How to make use of GitHub codespaces and other features to facilitate effective collaboration
