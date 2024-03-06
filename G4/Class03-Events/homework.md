# Homework Assignment: Bookstore Inventory Management System

## Overview

In this assignment, you will create a simple Inventory Management System for a bookstore using Node.js. The system will manage a collection of books, allowing you to add new books, update their details, retrieve information about them, and delete them when they are no longer available. All data will be stored in a JSON file, mimicking a real-world database in a basic form.

## Preparation

- Create a new directory for the homework.
- Initialize NPM (npm init -y) in the directory.
- Install uuid package (npm i uuid).
- Use functions we've already created in class to ease your work, e.g "DataService", "createPath", and anything else that might be useful in this scenario.
- Follow previous principles from code we've written in class, but try to understand the core logic of the code you're writing. Feel free to experiment and add new features as you see fit.

## Core Requirements

### Book Model:

- Define a Book model with properties for `id` (unique identifier - use `uuid` for this), `title`, `author`, `publicationYear`, and `quantity`.

### Data Service:

- Implement a data service capable of reading from and writing to a JSON file (`books.json`) to persist book data between application runs.

### Adding New Books:

- Create a function to add new books to the inventory. Ensure each book has a unique `id` and validate that all required fields are provided and valid.

### Listing Books:

- Implement a function to list all books currently in the inventory, including their `title`, `author`, and `quantity` available.

### Updating Book Details:

- Develop a method to update the details of a book in the inventory, such as its `title`, `author`, `publication year`, and `quantity`. This function must handle cases where the book does not exist.

### Deleting Books:

- Create a function to remove a book from the inventory based on its `id`.

### Event Logging:

- Use event emitters to log every operation performed on the inventory (e.g., adding, updating, deleting books) along with a timestamp.

## When Done:

- Upload your code to GitHub and send a link to your repository to `ivan.apostolovski@gmail.com` and `borisovski.borce@gmail.com`
