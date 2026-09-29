// console.log("Hello World");
// console.log("Hello World");

// import { MongoClient } from 'mongodb';

// const client = new MongoClient("mongodb+srv://isainirakhi_db_user:<Rakhii0617>@cluster0.shwwuts.mongodb.net/?appName=Cluster0");

// export async function connectToMongoDB() {
//   try {
//     await client.connect();
//     console.log("You successfully connected to MongoDB!");
//     return client;
//   } catch (err) {
//     console.dir(err);
//   }
// }

// // Call this only and only if when your application terminates
// export async function disconnectFromMongoDB() {
//   await client.close();
// }
// connectToMongoDB();


const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./router/tourRouter');
const userRouter = require('./router/userRouter');

const app = express();

const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));

// Home route
app.get('/', (req, res) => {
    console.log("This request is from this device");
    res.send("HOME PAGE");
});

// Routers
app.use('/packages', tourRouter);
app.use('/user', userRouter);

module.exports = app;