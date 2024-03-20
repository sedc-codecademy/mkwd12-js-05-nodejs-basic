import { Router } from "express";

const ticketRouter = Router();

ticketRouter.get("/", async (req, res) => {});

ticketRouter.post("/", async (req, res) => {});

ticketRouter.delete("/:id", async (req, res) => {});

ticketRouter.put("/:id", async (req, res) => {});

export default ticketRouter;
