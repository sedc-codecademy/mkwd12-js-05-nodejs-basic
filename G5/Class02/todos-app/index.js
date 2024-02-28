import { getTodos, createTodo } from "./todos.service.js" // NAMED IMPORT

console.log( await getTodos())

await createTodo("Wash the Dishes")
await createTodo("Study Nodejs")
