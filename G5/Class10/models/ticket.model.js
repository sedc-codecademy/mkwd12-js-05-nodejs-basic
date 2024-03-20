import { v4 as uuidv4 } from "uuid";
import { Ticket } from "../entities/ticket.entity.js";
import { addTicket, readTickets } from "../services/fs.service.js";

export class TicketModel {
  async create(title, description, status, assigneeId) {
    const ticketId = uuidv4();

    const ticket = new Ticket(ticketId, title, description, status, assigneeId);

    try {
      await addTicket(ticket);
      return ticketId;
    } catch (error) {
      throw new Error("Error creating ticket");
    }
  }

  async read() {
    try {
      const tickets = await readTickets();
      return tickets;
    } catch (error) {
      throw new Error("Error reading tickets");
    }
  }
}
