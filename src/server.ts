import "dotenv/config";
import express from "express";

const app = express();

app.use(express.json());

app.listen(3333, () => console.log("server running on port 3333"));
