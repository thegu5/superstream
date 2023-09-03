## SuperStream

### Overview
- A view of Google Classroom optimized for the workflow of power users
- All activity is sorted into one stream, with options to filter for classes and activity type
- Links directly to Google Classroom pages


### Instructions

#### Authentication

Using this project requires generating the appropriate credentials associated with the Google account you want to use. Before proceeding, please read the [Google Classroom API Python Quickstart](https://developers.google.com/classroom/quickstart/python). Follow the instructions until the **Configure the sample** step. Additionally, you must add  http://localhost:3001/ as a redirect URI to the Google Cloud project. 


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
