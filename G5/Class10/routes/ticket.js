import { Router } from "express";

const ticketRouter = Router();

// /tickets
ticketRouter.get("/", async (req, res) => {});

// /tickets
ticketRouter.post("/", async (req, res) => {});

// /tickets/:id
ticketRouter.delete("/:id", async (req, res) => {});

// /tickets/:id
ticketRouter.put("/:id", async (req, res) => {});

export default ticketRouter;
