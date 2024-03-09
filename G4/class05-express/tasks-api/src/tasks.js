import { DataService } from "./data.service.js";
import { createPath } from "../utils.js";
import { Task } from "./task.model.js";

const TASKS_PATH = createPath(["data", "tasks.json"]);

const saveTasks = async tasks => {
  await DataService.saveJSONFile(TASKS_PATH, tasks);
};

//1. Get all tasks
export const getAllTasks = async () => {
  const tasks = await DataService.readJSONFile(TASKS_PATH);

  return tasks;
};
//2. Create a task
export const createTask = async (text, author) => {
  const tasks = await getAllTasks();

  const newTask = new Task(text, author);

  const updatedTasks = [...tasks, newTask];

  await saveTasks(updatedTasks);

  return newTask;
};
//3. Get task by id
export const getTaskById = async taskId => {
  const tasks = await getAllTasks();

  const foundTask = tasks.find(task => task.id === taskId);

  if (!foundTask) throw new Error("Task not found!");

  return foundTask;
};
//4. Update task
export const updateTask = async (taskId, updateData) => {
  const tasks = await getAllTasks();

  if (!tasks.some(task => task.id === taskId))
    throw new Error("Can't update task! Task not found!");

  const updatedTasks = tasks.map(task => {
    if (task.id === taskId) {
      return { ...task, ...updateData };
    } else {
      return task;
    }
  });

  await saveTasks(updatedTasks);
};
//5. Delete task
export const deleteTask = async taskId => {
  const tasks = await getAllTasks();

  const updatedTasks = tasks.filter(task => task.id !== taskId);

  if (updatedTasks.length === tasks.length)
    throw new Error("Can't delete task! Task not found!");

  await saveTasks(updatedTasks);
};
//6. Delete all tasks
export const deleteAllTasks = async () => {
  await saveTasks([]);
};
