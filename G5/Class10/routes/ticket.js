import { Router } from "express";
import { TicketController } from "../controllers/ticket.controller.js";
import { authenticate, authorize } from "../middlewares/auth.middleware.js";

const ticketRouter = Router();

const ticketController = new TicketController();
// /tickets
ticketRouter.get("/", authenticate, async (req, res) => {
  await ticketController.readController(req, res);
});

// /tickets
ticketRouter.post("/", authenticate, authorize, async (req, res) => {
  await ticketController.createController(req, res);
});

// /tickets/:id PATH PARAMS
ticketRouter.delete("/:id", authenticate, authorize, async (req, res) => {});

// /tickets/:id
ticketRouter.put("/:id", authenticate, authorize, async (req, res) => {});

export default ticketRouter;
