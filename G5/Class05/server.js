import express from "express"
import {clothingProducts} from "./products.db.js";

const server = express();
// This option will allow our BE to understand and parse JSON
server.use(express.json())

// SIMPLE MIDLEWARE
// IT WILL INTERCEPT ALL REQUESTS MADE TO THE SERVER/ROUTES
server.use((request, response, next) => {
    // console.log(request)

    const url = request.url;
    const timeOfRequest = new Date()

    console.log(`Server was requested at: ${timeOfRequest} on route: ${url}`)
    // WILL LET THE REQUEST TO PASS
    // (AS SAME AS THE POLICEMAN WILL LET US PASS THE BORDER AFTER PASSPORT CONTROL)
    next()
});

/**
 * if(method === "GET" && url === "/")
 * 
 * This means that the route will be accessed 
 * only with GET HTTP METHOD.
 */

server.get('/', (request, response) => {
    // console.log(request);
    // request => CONTAINS ALL THE INFORMATION ABOUT THE REQUESTER (CLIENT) OF THIS ROUTE
    // response => WE RETURN INFORMATION BACK TO THE REQUESTER (CLIENT)
    /**
     * We can set headers explicitly but if we do not
     * the method response.send(...) will recognize the response type and set it for us.
     */
    // response.setHeader("Content-Type", "text/html")
    response.send("<p>Server is live.</p>")
})

/**
 * if(method === "GET" && url === "products")
 */
// localhost:3000/products and method GET
server.get('/products', (request, response) => {
    // Even if we do not set header, response.send will recognize the response type and set the header for us.

    // response.setHeader('Content-Type', 'application/json')
    response.send(clothingProducts)
})

/**
 * if(method === "POST" && url === "products")
 */
// localhost:3000/products and method POST
server.post('/products', (request, response) => {
    // request.body will access and read the body(data) that the user sent with the request itself (within the request body)
    const dataFromUser = request.body;
    console.log(dataFromUser)

    const newProduct = {
        id: Date.now(),
        name: dataFromUser.name,
        color: dataFromUser.color,
        size: dataFromUser.size,
        material: dataFromUser.material,
        price: dataFromUser.price
    }

    // WE CAN SAVE THE NEWPRODUCT IN THE DATABASE
    console.log('New product created:', newProduct)

    // WITH .status(201) we change the status code (201 => Created)
    response.status(201).send({message: "Product created", newProduct: newProduct})
})

// PATH PARAMS
// The path param is the key in request.params containing the value 
server.get('/products/:id', (request, response) => {
    // request.params will read the path params sent within the URL
    const params = request.params;
    console.log(params)
    console.log(params.id);

   
    const productFound = clothingProducts.find((product) => product.id === Number(params.id))

    if(!productFound){
        response.status(404).send({message: `Product with id: ${params.id} was not found`})
    }else {
        response.send({message: 'Single product', product: productFound})
    }
})

server.delete('/products', (request, response) => {
    response.send("<p>THIS IS products route with DELETE request</p>")
})

server.listen(3000, 'localhost', () => {
    console.info('Server is up and running.')
})
