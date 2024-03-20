import { Router } from "express";
import { TicketController } from "../controllers/ticket.controller.js";

const ticketRouter = Router();

const ticketController = new TicketController();
// /tickets
ticketRouter.get("/", async (req, res) => {
  await ticketController.readController(req, res);
});

// /tickets
ticketRouter.post("/", async (req, res) => {
  await ticketController.createController(req, res);
});

// /tickets/:id
ticketRouter.delete("/:id", async (req, res) => {});

// /tickets/:id
ticketRouter.put("/:id", async (req, res) => {});

export default ticketRouter;
