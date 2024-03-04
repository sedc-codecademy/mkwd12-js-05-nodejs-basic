import http from "http";

// req, res
// REQUEST => OBJECT CONTAINING ALL INFORMATION IN THE REQUEST ITSELF

// RESPONSE => IS OBJECT CONTAING OR WILL CONTAIN ALL NECCESRRY INFORMATION NEEDED TO RETURN BACK TO  THE USER/CLIENT
const server = http.createServer((request, response) => {
  // console.log(request);
  const url = request.url;
  const method = request.method;

  console.log("ENDPOINT: ", url);
  console.log("METHOD: ", method); // POST, PUT, GET, DELETE

  // localhost:3000
  if (url === "/" && method === "GET") {
    response.setHeader("Content-Type", "text/html");
    response.write("<h1>HTML generated content from the server.</h1>");
    return response.end();
  }

  // localhost:3000/contact
  if (url === "/contact" && method === "GET") {
    response.setHeader("Content-Type", "text/html");
    response.write("<h1>This is contact page</h1>");
    return response.end();
  }
  // localhost:3000/todos
  if (url === "/todos" && method === "GET") {
    // lets imagine todos is the value from the database
    const todos = [
      {
        id: "1",
        description: "Walk the dog",
        isDone: false,
      },
      { id: "2", description: "Watch fav. anime", isDone: false },
    ];
    
    response.setHeader('Content-Type', 'application/json')
    response.write(JSON.stringify(todos));
    return response.end();
    
  }

  // if no match was found we gonna return 404 (not found error) to the client.
  response.setHeader("Content-Type", "text/html");
  response.statusCode = 404;
  response.write("<h1>This page does not exist</h1>");
  response.end();
});

/**
 * 3000 IS A PORT
 * 'localhost' host
 */
server.listen(3000, "localhost", () => {
  console.log("Server is up and running");
});
