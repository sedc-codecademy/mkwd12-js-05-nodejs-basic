# Filesystem Homework

## Basic Requirements

1. Initialize a new npm project and create an `index.js` file.
2. Using the fs module create a new file called homework.txt
3. Create a path to the file using the `path` module
4. Inside the file write the following "Homework 02 in Basic Node"
5. Append to the file the following " FINISHED!"
6. Read the file contents and print them out in the console.

- Don't forget to add a .gitignore file in your project as always.

## Bonus (OPTIONAL)

**Use the usersService.js file from class**
1. Create a function called `editUser`. This function will accept two parameters: a number (the id of the user) and user object (name, username and password properties) that will allow you to edit the user you have selected by id. 
2. Create a function called `deleteUser`. This function will accept one parameter: a number (the id of the user) and will delete the the user you have selected by id. 
3. Create a `deleteAll` function in the usersService that will delete all the users currently in `users.json`
4. Refactor the `addUser` function so that the user object you are sending to the function won't contain the id, but just the name, username and password properties and think of a way how you can generate a new id for the added user. The new id should be the id of the last user incremented by one (if the last users id is 10, then the next user's id should be 11)
4. Import all those functions into your `index.js` file and call them with the relevant data.
5. Explore all the ways you can use the import syntax and use `import` instead of require.

*Remember everyone that these homeworks are not meant for you to pass Basic Node or anything like that, this is for you to practice and get comfortable with the conceps as we go along, go into the code from yesterday, edit it, change stuff around, test out the file system and all the different functions.*

*This homework is due in 7 days*

**As always if you have any issues, you can reach us on our email or you can do it at class, tune in earlier than 5:30 and we'll help you before the class starts**
