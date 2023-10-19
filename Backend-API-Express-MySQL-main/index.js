import moment from "moment-timezone";
// Set the time zone to Asia/Jakarta (UTC+07:00)
// process.env.TZ = 'Asia/Jakarta';
// moment().tz("Asia/Jakarta").format();

// Set the time zone to Asia/Jakarta
const jakartaTime = moment.tz('Asia/Jakarta');

import express from "express";
import cors from "cors";
import TodoRoute from "./routes/TodoRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(TodoRoute);

app.listen(5000, () => console.log("Server up and running..."));
