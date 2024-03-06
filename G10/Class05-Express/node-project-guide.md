1. Initalize project using npm init -y
2. Change type in package.json to "type": "module"
3. Create .gitignore file and add /node_modules inside it
4. Create project .js files
5. Install dependencies (ex npm i express)
6. Install nodemon npm i -D nodemon
7. Add start and dev scripts in package.json (overwrite exisitng scripts property):
   "scripts": {
   "start": "node index.js",
   "dev": "nodemon index.js"
   },

   `"scripts":` This is a key in the package.json file where you define various commands that can be executed using npm run followed by the script name.

   `"start":` This is a script name. It's a convention to have a script named start that is used to start the application. In this case, the command node index.js is assigned to it. When you run npm start, it will execute node index.js, which presumably starts your Node.js server.

   `"dev":` This is another script name. It's often used during development. In this case, it's set to nodemon index.js. nodemon is a tool that helps in development by automatically restarting the server whenever changes are made to the files in the directory. So, when you run npm run dev, it will execute nodemon index.js, which starts your server with nodemon monitoring for changes.

   So, when you want to start your server in a production-like environment, you'd use npm start, and during development, you'd use npm run dev to utilize nodemon for automatic server restarts upon file changes.

8. Start nodemon server with npm run dev or node server with npm start
9. OPTIONAL Install cors npm i cors if you want to use a client that runs in the browser, to use import cors and then add this line to project app.use(cors())
10. When downloading a project without node modules, before using it enter npm i

### Adding code with git from terminal

1. Work on some code ,after you are finished
2. `git add .` adds all files to git
3. `git commit -m "message"` commits all files to git
4. `git push` pushes (uploads) all files to the remote repo
