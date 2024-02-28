import fs from 'fs'

// Function to read existing users from users.json
const readUsersFromFile = () => {
    const existingUsers = fs.readFileSync('users.json', 'utf8');
    return JSON.parse(existingUsers);
};

// Function to add user in the file
// get users from users.json => as array
// push the new user to the array
// sthringify the data to json format
// write the data back to users.json
const addUser = (user) => {
    const existingUsers = readUsersFromFile();
    console.log(user);
    existingUsers.push(user);
    const updatedUsersJSON = JSON.stringify(existingUsers);
    fs.writeFileSync('users.json', updatedUsersJSON);

    console.log('Additional user added to the users.json file');
}

export {
    readUsersFromFile,
    addUser
}


