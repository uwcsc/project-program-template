import express from "express";
import eventsRouter from "./routers/events-routers.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../../client/build")));

app.use(express.json());
app.use(eventsRouter);

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
