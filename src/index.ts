import express from "express";
import config from "./config/config";

const app = express();
app.use(express.json());

const PORT = config.port;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
