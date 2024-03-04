import http from "node:http";
// HTTP defines a format (protocol) in which the client and server will communicate

const server = http.createServer((request, response) => {
    // console.log('Hello world');
    // console.log(request);

    // request.url is everything that comes after http://localhost:3002/
    const url = request.url; // it will log only "/" which is the default route
    // console.log('URL:', url);

    const method = request.method;
    // console.log('REQUEST METHOD:', method);

    const headers = request.headers;
    // console.log('REQUEST HEADERS:', headers);

    if (request.url === "/") {
        response.setHeader("Content-type", "text/html"); // it is important for the web browser to know how to interpret the response
        response.write(`<h1>Wow, this is my first server!</h1>`);
        return response.end(); // The argument is optional. The value will be written immediately before the response ends.
    }

    if (request.url === "/home") {
        response.setHeader("Content-type", "text/html");
        response.write(`<h1>Hello from our homepage!</h1>`);
        return response.end();
    }

    if (request.url === "/notes") {
        response.setHeader("Content-type", "text/html");
        response.write(`<h1>We are one the /notes route</h1>`);

        // using .on is as same as using .addEventListener("click", (event) => {})

        /**
         * => .on is method that is BINDED to the request, and will listen to the every
         * request sent.
         *
         * "data" => is the event we TELL .on TO LISTEN TO!
         */

        /* 
        When data is sent through the internet, it is being split into chunks of data in a "buffer" format.
        This data has to be assembled and parsed on arrival.
        */

        /*
        Requests in NodeJS have an .on() method that listen to different kinds of events.
        Every time a chunk of data (buffer) arrives at it's destination, an event called "data" is fired.
        NodeJS is able to listen to this event, and fire off a callback function. 
        Works exactly like .addEventListener() on the front end.
        */

        const chunksReceived = [];

        request.on("data", (chunk) => {
            console.log(chunk);
            chunksReceived.push(chunk);
        });

        /*
        Another type of event is end.
        End is an event that is fired when all the data chunks 
        have arrived at the destination. 
        */

        request.on("end", () => {
            const parsedData = Buffer.concat(chunksReceived).toString();  // noteName=learn+coding
            console.log('PARSED DATA:', parsedData);
            const data = parsedData.split("="); // [noteName, learn+coding]
            const noteReceived = data[1]; // learn+coding
            const formattedNote = noteReceived.replace("+", " "); // since we have a string learn+coding, se want to replace the + with " " to get the text: learn coding
            console.log(formattedNote);
        });

        return response.end();
    }

    if (url === "/add_note") {
        response.setHeader("Content-type", "text/html");
        response.write(`
        <form action="/notes" method="post">
            <input type="text" name="noteName" />
            <button>Add note</button>
        </form>
        `);
        return response.end();
    }
});

// http://localhost:3002/
// server.listen(3002);
server.listen(3002, () => {
    console.log('Server is up and running!');
})