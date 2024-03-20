export class Ticket {
  constructor(id, title, description, status, assigneeId) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.assigneeId = assigneeId;
  }
}
