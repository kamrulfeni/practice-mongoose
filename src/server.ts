
import mongoose from "mongoose";
import app from "./app";


const port:Number = 5000;


// database connection

async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log(`Database connection successful`);

        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (err) {
        console.log(`Failed to connect database`, err);
    }
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


bootstrap()
