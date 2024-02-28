import fsPromises from "fs/promises";

// NAMED EXPORT
export const getTodos = async () => {
    // When we read JSON, it is strigified =)
    const todos = await fsPromises.readFile("./db/todos.json", {encoding: 'utf-8'});
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
        isDone: false
    }

    console.log('TODOS', todos)
    todos.push(todo);

    const strigifiedTodos = JSON.stringify(todos)
    console.log(typeof strigifiedTodos)
    await fsPromises.writeFile("./db/todos.json", strigifiedTodos)

};