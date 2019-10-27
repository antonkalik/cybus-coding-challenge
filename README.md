## Cybus Coding Challenge
Client-side server react application that includes jest, enzyme, lint, prettier, hot module reload, redux, router and etc. Created for Cybus codding challenge.<br>

Server: `localhost:9999`<br>
Client: `localhost:3000`

#### Getting Started
1. On root directory install packages:<br>
`npm i`
2. Then start your dev server<br>
`npm run dev`
3. To run production:<br>
`npm run start`

#### Docker
1. In root directory just create an image with:<br>
`docker build -t <your-username>/cybus-coding-challenge .`
2. And then run you container:<br>
`docker run -it -p 9000:9999 --name cybus-coding-challenge <your-username>/cybus-coding-challenge
`
