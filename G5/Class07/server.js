import express from "express"
import productsRouter from "./routes/product.routes.js";

const server = express()

server.use(express.json())
server.use(productsRouter)

server.get("/", (req, res) => {
    res.send('Server is live.')
})

server.listen(3000, 'localhost', () => {
    console.log('Server is up and running.')
})