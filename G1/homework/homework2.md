# Homework 2

### Deadline: 15.03.2024

## Part 1:
- Create server using HTTP module;
- When the default url is hit return HTML content to the user, the content of your choice.
- When the url `/student` is hit, return HTML with the information:
  - Student name: "your name";
  - Student lastname: "your lastname";
  - Academy: "the academy you are at";
  - Subject: "the current subject we are learning";

## Part 2:
- Create server using HTTP module (or use the one from the previous part);
- When the default url is hit return HTML content to the user, the content of your choice;
- When the url `/add_student` is hit, return a form with one input (ex. name) and a button;
- When we submit the button we will navigate to a new route `/all_students`;
- In this new url `/all_students` get the value that is sent from the form and console.log it human-readable format (ex. "The student name is: name");

## BONUS:
- Instead of console.log the value from the form, use the FS module to write in a file named: students.txt
