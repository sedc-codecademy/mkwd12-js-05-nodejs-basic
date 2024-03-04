import fsPromises from "fs/promises";

// NAMED EXPORT
export const getTodos = async () => {
  // When we read JSON, it is strigified =)
  const todos = await fsPromises.readFile("./db/todos.json", {
    encoding: "utf-8",
  });
  const parsedTodos = JSON.parse(todos);

  return parsedTodos;
};

// NAMED EXPORT
export const createTodo = async (description) => {
  // PARSED TODOS FROM todos.json
  const todos = await getTodos();

  const todo = {
    id: Date.now(), // miliseconds of current time =)
    name: description,
    isDone: false,
  };

  console.log("TODOS", todos);
  todos.push(todo);

  const strigifiedTodos = JSON.stringify(todos, null, 2);
  console.log(typeof strigifiedTodos);
  await fsPromises.writeFile("./db/todos.json", strigifiedTodos);
};

// On top of the code of the todos-app that we wrote in the previous class, implement functionality to finish a todo by its given id.  This means setting the `isDone` property of the todo with that id to `true`.

/**
 * 1. create a function named finishTodo: => DONE
 * 2. the function should accept 1 parameter that will be the ID of the todo that we want to complete. : => DONE
 * 3. Read all todos: => DONE
 * 4. Find me the element with the given id => DONE
 * 5. If element is not existing thorw error => DONE
 * 6. If found, complete that todo => DONE
 * 7. Save the new value of the todo (save the new values to the DB) => DONE
 */

export const finishTodo = async (id) => {
  try {
    const todos = await getTodos();
    const todoFound = todos.find((todo) => todo.id === id);

    // todoFound === undefined
    if (!todoFound) {
      // if this fails, we wont continue with the rest of the code
      throw new Error(`Todo with the id: ${id} was not found.`);
    }

    todoFound.isDone = true;

    const strigifiedTodos = JSON.stringify(todos, null, 2);
    await fsPromises.writeFile("./db/todos.json", strigifiedTodos);
  } catch (error) {
    console.error(error)
    // some other error mechanism
  }
};
