import fsPromises from "fs/promises";

export const readFile = async (path) => {
  const contents = await fsPromises.readFile(path, "utf-8");

  return JSON.parse(contents);
};

const writeFile = async (path, data) => {
  await fsPromises.writeFile(path, JSON.stringify(data, null, 2));
};

// User related services.
export const readUsers = async () => {
  const users = await readFile("./db/users.json");

  return users;
};

export const addUser = async (user) => {
  const users = await readUsers();
  users.push(user);
  await writeFile("./db/users.json", users);
};

// Ticket related services
export const readTickets = async () => {
  const tickets = await readFile("./db/tickets.json");

  return tickets;
};

export const addTicket = async (ticket) => {
  const tickets = await readTickets();
  tickets.push(ticket);
  await writeFile("./db/tickets.json", tickets);
};

export const deleteTicket = async (ticketId) => {
  const tickets = await readTickets();
  const filteredTickets = tickets.filter((ticket) => ticket.id !== ticketId);

  await writeFile("./db/tickets.json", filteredTickets);
};

export const editTicket = async (
  ticketId,
  title,
  description,
  status,
  assigneeId
) => {
  const tickets = await readTickets();
  const editedTickets = tickets.map((ticket) => {
    if (ticket.id === ticketId) {
      return {
        ...ticket,
        title: title || ticket.title,
        description: description || ticket.description,
        status: status || ticket.status,
        assigneeId: assigneeId || ticket.assigneeId,
      };
    }

    return ticket;
  });

  await writeFile("./db/tickets.json", editedTickets);
};
