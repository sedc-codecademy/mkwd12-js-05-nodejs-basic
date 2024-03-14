# MVC Pattern in Node.js

## What is MVC?

MVC stands for Model-View-Controller. It's a software architectural pattern commonly used in web development. The main idea behind MVC is to separate the concerns of an application into three interconnected components:

- **Model**: Represents the data and business logic of the application.
- **View**: Presents the data to the user in a suitable format.
- **Controller**: Handles user input, manipulates the model, and updates the view accordingly.

## Why is it Helpful?

1. **Separation of Concerns**: MVC promotes a clean separation between data (model), presentation (view), and application logic (controller), making the codebase more organized and maintainable.
2. **Modularity**: Each component (model, view, controller) can be developed and tested independently, allowing for easier code management and updates.
3. **Code Reusability**: Components can be reused across different parts of the application or even in other projects, reducing redundancy and improving productivity.

## Code Examples

### Model (models/todo.model.js)

```javascript
export class TodoModel {
  todos = [
    {
      id: 1,
      title: "Walk the dog",
      isDone: false,
    },
    {
      id: 2,
      title: "Study Nodejs",
      isDone: false,
    },
  ];

  async getTodos() {
    /*
     This can be call to the database, 
     and even the model is responsible for the logic, that why we call it the heavy lifter in the app =)
     For this examples we are just returning the hardcoded todos
    */
    return this.todos;
  }
}
```

### Controller (controllers/TodoController.js)

```javascript
import { TodoModel } from "../models/todo.model.js";

export class TodoController {
  constructor() {
    // New instance of the TodoModel
    this.todoModel = new TodoModel();
  }
  // Example function to fetch todos data from database through the mmodel
  // The controller will access the req and res objects
  async listTodos(req, res) {
    // Simulated database query
    const todos = await this.todoModel.getTodos();

    // returning the todos within the response.
    res.send(todos);
  }
}
```

### Usage (app.js)

```javascript
import express from "express";
import TodoController from "./controllers/TodoController.js";

const server = express();

const todoController = new TodoController(); // New instance of the controller
server.get("/todos", (req, res) => {
  todoController.listTodos(req, res);
});

server.listen(3000, "localhost", () => {
  console.log("Server is up and running");
});
```

In this example:

- The `TodoModel` class represents the model, encapsulating data, doing logic etc..
- The `TodoController` class contains the controller logic, it acts as conductor. It accesses the request, and it provides it to the coresponding model.
- In the `app.js` file, we demonstrate how the controller is called, and we see once the route `/todos` is called it calls the coresponding method of the controller.
