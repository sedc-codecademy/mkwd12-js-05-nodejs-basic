import { Router } from "express";
import {
  createTask,
  deleteAllTasks,
  deleteTask,
  getAllTasks,
  getTaskById,
  updateTask,
} from "./tasks.js";

export const tasksRouter = Router();

//1. Get all tasks
tasksRouter.get("/", async (req, res) => {
  try {
    const filters = req.query;
    const tasks = await getAllTasks(filters);

    console.log(filters);

    return res.json(tasks);
  } catch (error) {
    console.log(error);

    return res.status(500).json({ msg: error.message });
  }
});

//2. Create Task
tasksRouter.post("/", async (req, res) => {
  try {
    const { text, author } = req.body;

    if (!text || !author) throw new Error("Invalid task data!");

    const newTask = await createTask(text, author);

    return res.status(201).json(newTask);
  } catch (error) {
    console.log(error);

    return res.status(400).json({ msg: error.message });
  }
});

//3. Get task by id
tasksRouter.get("/:id", async (req, res) => {
  try {
    const taskId = req.params.id;

    const foundTask = await getTaskById(taskId);

    return res.json(foundTask);
  } catch (error) {
    return res.status(404).json({ msg: error.message });
  }
});

//4. Update task
tasksRouter.patch("/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    const updateData = req.body;

    if (updateData.id) throw new Error("Invalid update data!");

    await updateTask(taskId, updateData);

    res.sendStatus(204);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
});

//5. Delete task
tasksRouter.delete("/:id", async (req, res) => {
  try {
    const taskId = req.params.id;

    await deleteTask(taskId);

    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ msg: error.message });
  }
});

//6. Delete all tasks
tasksRouter.delete("/", async (req, res) => {
  try {
    await deleteAllTasks();

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});
