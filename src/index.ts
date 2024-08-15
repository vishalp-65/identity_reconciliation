import express from "express";
import config from "./config/config";
import { errorHandler } from "./middlewares";
import apiRoutes from "./routes/index";

const app = express();
app.use(express.json());

app.use("/api", apiRoutes);
app.use(errorHandler);

const PORT = config.port;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
