import * as http from "node:http";

// console.log(http);

//Creating the univeral server listener function
const server = http.createServer((request, response) => {
  //   console.log(request);

  const method = request.method;
  const url = request.url;

  console.log("METHOD: ", method);
  console.log("URL: ", url);

  //Simple response
  if (url === "/") {
    response.setHeader("Content-Type", "text/html");
    response.write("<h1>Welcome to the first HTTP server!</h1>");
    return response.end();
  }

  if (url === "/something") {
    response.setHeader("Content-Type", "text/html");
    response.write(`<h1>You are on the /something page </h1>`);
    return response.end();
  }

  if (url === "/error") {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/html");
    response.write("<h1>Page Not Found! ERROR 404</h1>");
    return response.end();
  }

  if (url === "/user") {
    response.setHeader("Content-Type", "application/json");
    const user = {
      firstName: "Ivan",
      lastName: "Apostolovski",
    };

    response.write(JSON.stringify(user));

    return response.end();
  }

  if (url === "/add-movie") {
    response.setHeader("Content-Type", "text/html");
    response.write(`
    <form action="/movies" method="POST">
      <input type="text" name="movieName" />
      <button>SUBMIT!</button>
    </form>`);
    return response.end();
  }

  if (url === "/movies" && method === "POST") {
    response.setHeader("Content-Type", "text/html");
    response.write("<h1> We are at the /movies route </h1>");

    const chunksReceived = [];

    request.on("data", chunk => {
      console.log(chunk);
      chunksReceived.push(chunk);
    });

    request.on("end", () => {
      console.log("This is from the end listener");
      console.log(chunksReceived);

      const parsedData = Buffer.concat(chunksReceived).toString();
      console.log(parsedData);

      const data = parsedData.split("=")[1];

      const movieName = data.split("+").join(" ");

      const movieNameAlt = data.replaceAll("+", " ");

      console.log(movieName);
      console.log(movieNameAlt);
    });

    return response.end();
  }

  if (url === "/full-name" && method === "POST") {
    // response.write(
    //   JSON.stringify({ msg: "you are on the full-name post endpoint" })
    // );

    const chunksReceived = [];

    request.on("data", chunk => {
      console.log(chunk);
      chunksReceived.push(chunk);
    });

    request.on("end", () => {
      const jsonData = Buffer.concat(chunksReceived).toString();

      console.log(jsonData);

      const parsedData = JSON.parse(jsonData);

      const newUser = {
        id: String(Math.random()).slice(2),
        ...parsedData,
      };

      response.setHeader("Content-Type", "application/json");
      response.write(JSON.stringify(newUser));
      return response.end();
    });

    return;
  }

  return response.end();
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
