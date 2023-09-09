# Tech Blog

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description

The application is a tech blog that will allow users to publish blog posts to share with the community.

The application was created using the following criteria:

- When users enter the site they can see exising blog post and can login or signup
- If not logged in re-routed to login page on attempt to access dashboard
- When signing up name, username, and password required; password is confirmed; username must be unique
- On submission of sign up the credientials are stored with hashed password for sercurity
- After signing up or logining into the site the nav bar will show logout button
- When viewing the homepage user sees existing post with name of blogger and date created
- When user clicks on the dashboard they see their existing posts
- When click on add post button user prompted for post name and text and add to their dashboard and homedashboard
- When user clicks on existing blog name in their dashboard able to update or delete a post

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)

## Installation

In order to use the application node.js will need to be installed. <br />
Node.js Installation: https://nodejs.org/en/download

Node packages:

- bycrypt
- connect-session-sequelize
- dotenv
- express
- express-session
- handlebars
- mysql2
- sequelize
- express-handlebars

## Usage

The program is deployed in heroku link below. Click on the get started button on the landing page. This will direct you to the notes page. Add notes by typing in title and text then clicking the save button. Clicking on saved notes in the left-hand column it will populate in the main section. Clicking on the trash can button will delete that particular note. Clicking on the plus button will allow you to write a new note. <br>
To run program from IDE type node server.js into the terminal. Click into the website link in the terminal to view note taker.

<img src="./images/notes-page.png" width='400' height='auto'><br>
<img src="./images/write-note.png" width='400' height='auto'><br>
<img src="./images/note-saved.png" width='400' height='auto'><br>

## License

MIT License

## Contributing

N/A

## Heroku Deployment

[Heroku Link](https://fast-temple-76500-f5720780989c.herokuapp.com/)
