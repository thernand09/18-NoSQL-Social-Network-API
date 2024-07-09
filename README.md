# 18-NoSQL-Social-Network-API
## Table of Contents
* [Description](#description)
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Installation & Usage](#installation--usage--tests)
* [Project Demo](#project-demonstration)
* [Contact](#contact)

## Description
This week's challenge is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. I will use Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.js and Mongoose packages, I may also optionally use a JavaScript date library of my choice or the native JavaScript Date object to format timestamps.


## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation & Usage & Tests

Type `npm init` in the terminal to get `package.json`.

Type `npm install express`, `npm install moongoose`, and `npm install moment` in the terminal to install dependencies for the project.

Type `npm start` to initiate the server.

Note that there is no testing for this project!

## Project Demo
![Project Demo](./assets/18-NoSQL-Social-Network-API.gif)

## Linke

GitHub: https://github.com/thernand09/18-NoSQL-Social-Network-API

Video link: [18-NoSQL-Social-Network-API.gif](https://1drv.ms/i/c/5ca06fe9d3022510/EbXWmfnv6ZdOnH0qASO4l88B8RYLM3LAyV3zLejWEupvsg?e=cZwIRx)
