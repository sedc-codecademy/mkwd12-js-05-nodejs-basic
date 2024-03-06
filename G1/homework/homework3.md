# Homework 3 - The Trainer Api

### Deadline: 20.03.2024

## Basic Requirement

As we built a student api on class now it will your homework to build a trainer api.

### App init

You can use the already existing example, or you can create a new project with `npm init` and install the necessary packages. Either option is fine.

1. The trainer api needs to work with a list of trainer objects that look like this:
   - `id`: string;
   - `firstName`: string;
   - `lastName`: string;
   - `email`: string;
   - `isCurrentlyTeaching`: boolean;
   - `timeEmployed`: string (ex: 6 months or 1 year 3 months);
   - `coursesFinishedCount`: number;
2. Create your trainers.json file, and you can add some starting data here if you want to.
3. Create a `trainers.routes.js` that will work the way we implemented it in class.
4. Add CRUD operations for the api:
   1. Get all trainers.
   2. Get trainer by id.
   3. Update Trainer Info.
   4. Add a trainer.
   5. Delete trainer.
   6. Delete all trainers.
5. Add a public folder in the project that will serve an `index.html` statically on route `/home`

## Bonus Requirements

The bonus is to add functionality with query params:

1. Return only trainers that are currently teaching `?currentlyActive=true`
2. Sort trainers by the number of courses they have finished `?sortBy=coursesAsc` or `?sortBy=coursesDesc`, you don't have to do both here, one is sufficient.

If the above is not enough for you, feel free to add any other functionality you think would be useful for this api. Use your imagination, don't be afraid to experiment.

## Before you send it...
* Don't forget to test your api with Postman.
* Don't forget to send the postman collection with your homework! (instructions on how to do this in the root instructions.md file)
