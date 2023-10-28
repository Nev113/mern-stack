import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { getUser, createUser, deleteUser } from "./config/routes.js";

const app = express();

mongoose.connect("Edit this", {
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
    console.log("Database connected");
}
);


app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log("Server started");
}
);

app.get("/", getUser);
app.post('/add', createUser);
app.get("/user", deleteUser);
app.delete("/user/:username", deleteUser)
