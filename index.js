import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import ProductRoute from "./routes/product.route.js";
dotenv.config();

const app = express();

const connectionString = process.env.MONGO_DB_URL;


app.use(express.json());

app.use("/api/products", ProductRoute);

mongoose.connect(connectionString)
    .then(() => {
        console.log('Successfully connected');
        app.listen(3000, () => {
            console.log('server running on 3000')
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDb', error);
    })



app.get('/', (req, res) => {
    console.log(req.method);
    res.send('Hello I amm GOutham Welcome to the Fucking World')
})

