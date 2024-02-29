import { v4 as uuid } from "uuid";
import { DataService } from "./data.service.js";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { get } from "node:http";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const TASKS_PATH = path.join(__dirname, "tasks.json");

//1. Get all tasks
const getAllTasks = async () => {
  try {
    const tasks = await DataService.readJSONFile(TASKS_PATH);

    return tasks;
  } catch (error) {
    console.log("Something went wrong");
    console.log(error);
  }
};

//2. Save tasks
const saveTasks = async tasks => {
  await DataService.saveJSONFile(TASKS_PATH, tasks);
};

//3. Create a task
const createTask = async text => {
  try {
    //Read all tasks
    const tasks = await getAllTasks();

    //Create a new task
    const newTask = {
      id: uuid(),
      text,
      isFinished: false,
    };

    //Adding task to tasks array
    tasks.push(newTask);

    // const updatedTasks = [...tasks, newTask];

    //Saving tasks array in json file
    await saveTasks(tasks);
  } catch (error) {
    console.error(error);
  }
};

//4. Update a task
const updateTask = async taskId => {
  try {
    //Read all tasks
    const tasks = await getAllTasks();

    const foundTask = tasks.find(task => task.id === taskId);

    if (!foundTask) throw new Error("Task not found");

    //Update task object
    // foundTask.isFinished = true;

    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isFinished: true };
      } else {
        return task;
      }
    });

    //Saving tasks in json file
    await saveTasks(updatedTasks);
  } catch (error) {
    console.error(error);
  }
};

//5. Delete a task
const deleteTask = async taskId => {
  try {
    //Read all tasks
    const tasks = await getAllTasks();

    const updatedTasks = tasks.filter(task => task.id !== taskId);

    if (tasks.length === updatedTasks.length) throw new Error("Task not found");

    //Saving tasks in json file
    await saveTasks(updatedTasks);
  } catch (error) {
    console.error(error);
  }
};

//Main app funtion
const app = async () => {
  //   await createTask("Third task");

  //   await updateTask("asdasdsd");
  await deleteTask("ad9a235e-db77-40dd-a99a-9689225ab569");

  const tasks = await getAllTasks();

  console.log(tasks);
};

app();
