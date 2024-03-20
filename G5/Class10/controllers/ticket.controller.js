import { TicketModel } from "../models/ticket.model.js";

export class TicketController {
  constructor() {
    this.ticketModel = new TicketModel();
  }

  async createController(req, res) {
    const { title, description, status, assigneeId } = req.body;

    if (!title || !description || !status || !assigneeId) {
      return res.status(400).send({ message: "Missing required information." });
    }

    try {
      const ticketId = await this.ticketModel.create(
        title,
        description,
        status,
        assigneeId
      );

      // 201 => Created
      res
        .status(201)
        .send({ message: "Ticket was created successfully", id: ticketId });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async readController(req, res) {
    // key=value PAIR ?KEY=VALUE

    // console.log(req.query);
    const query = req.query;
    console.log(query);
    try {
      const tickets = await this.ticketModel.read(query.status);
      res.send(tickets);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}
