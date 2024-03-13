# Exercise

1. Create a json file and load the users from the following link: https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json
2. Create a express server that is going to serve the students.json
3. Create a GET /students endpoint that is going to return all the students and add the following filters using query parameters

- gender=Male or Female
- sortBy=age or averageGrade

4. Create a GET /students/:id to fetch a student by id
5. Make sure to use a students.routes.js and write all the endpoints there
6. Test both endpoints in postman and follow the one endpoint at a time flow for writing this
