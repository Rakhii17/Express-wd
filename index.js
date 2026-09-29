// require('dotenv').config();
// const mongoose = require('mongoose');

// // importing the express
// const express = require('express');

// // called the function by factory method
// const app = express();

// // importing morgan for logging requests
// const morgan = require("morgan");

// // importing the routers
// const tourRouter = require('./router/tourRouter');
// const userRouter = require('./router/userRouter');

// // port number
// const port = 3000;


// // MIDDLEWARE

// // Middleware to parse JSON request bodies
// app.use(express.json());

// // Middleware to parse URL-encoded request bodies
// app.use(express.urlencoded({ extended: true }));

// // Morgan middleware to log HTTP requests
// app.use(morgan("combined"));




// // home route
// app.get('/', (req, res) => {
//     console.log("this request is from this device");
//     res.send("HOME PAGE");
// });


// // Routers

// // importing the tourRouter from router folder
// app.use('/packages', tourRouter);

// // importing the userRouter from router folder
// app.use('/user', userRouter);

// // here packages is the home route and tourRouter is the router which we have created in the router folder


// // To start the server 

// // runs server on  the PORT 3000
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => {
//         console.log("MongoDB connected successfully");

//         app.listen(port, () => {
//             console.log(`Server is running on port ${port}`);
//         });
//     })
//     .catch((error) => {
//         console.log("MongoDB connection failed");
//         console.log(error);
//     });




const { connectDB } = require("./config/db");
const app = require("./app");

const port = 3000;

const startServer = async () => {
    try {
        await connectDB();

        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
    }
};

startServer();

