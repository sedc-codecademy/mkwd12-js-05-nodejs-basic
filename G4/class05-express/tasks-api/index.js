import express from "express";
import {
  createTask,
  deleteAllTasks,
  deleteTask,
  getAllTasks,
  getTaskById,
  updateTask,
} from "./src/tasks.js";

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

const app = express();

app.use(express.json());

//1. Get all tasks
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await getAllTasks();

    return res.json(tasks);
  } catch (error) {
    //.status sets the status code of the response
    return res.status(500).json({ msg: error.message });
  }
});
//2. Create task
app.post("/tasks", async (req, res) => {
  try {
    const { text, author } = req.body;

    if (!text || !author) throw new Error("Invalid Data");

    const newTask = await createTask(text, author);

    //201 is status that means something new was created in the backend
    return res.status(201).json(newTask);
  } catch (error) {
    console.log(error);
    //400 is bad request
    return res.status(400).json({ msg: error.message });
  }
});
//3. Get task by id
// dynamic path parameters are marked with ":" in the url
app.get("/tasks/:id", async (req, res) => {
  try {
    //req.params contains all dynamic path parameters
    const taskId = req.params.id;

    const foundTask = await getTaskById(taskId);

    return res.json(foundTask);
  } catch (error) {
    return res.status(404).json({ msg: error.message });
  }
});
//4. Update task
app.patch("/tasks/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    const updateData = req.body;

    if (updateData.id) throw new Error("Invalid Data");

    await updateTask(taskId, updateData);

    return res.sendStatus(204);
  } catch (error) {
    //400 is bad request
    return res.status(400).json({ msg: error.message });
  }
});

//6. Delete all tasks
// Delete all is above delete task by id because we don't want that endopoint to catch the endpoint url
// /tasks/:id will always catch /tasks/all
app.delete("/tasks/all", async (req, res) => {
  try {
    await deleteAllTasks();

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

//5. Delete task
app.delete("/tasks/:id", async (req, res) => {
  try {
    const taskId = req.params.id;

    await deleteTask(taskId);

    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ msg: error.message });
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server is up at port ${PORT}`);
});
