import http from "http";

// req, res
// REQUEST => OBJECT CONTAINING ALL INFORMATION IN THE REQUEST ITSELF

// RESPONSE => IS OBJECT CONTAING OR WILL CONTAIN ALL NECCESRRY INFORMATION NEEDED TO RETURN BACK TO  THE USER/CLIENT
const server = http.createServer((request, response) => {
  // console.log(request);
  const url = request.url;
  console.log(url);

  if (url === "/") {
    response.setHeader("Content-Type", "text/html");
    response.write("<h1>HTML generated content from the server.</h1>");
    response.end();
  }

  if(url === '/contact'){
    response.setHeader("Content-Type", "text/html");
    response.write("<h1>This is contact page</h1>")
    response.end();
  }
});

/**
 * 3000 IS A PORT
 * 'localhost' host
 */
server.listen(3000, "localhost", () => {
  console.log("Server is up and running");
});
