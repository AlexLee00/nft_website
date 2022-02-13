import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import itemRouter from "./routers/itemRouter";
import userRouter from "./routers/userRouter";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);

app.use("/", globalRouter);
app.use("/items", itemRouter);
app.use("/users", userRouter);

const PORT = process.env.PORT || 7000;

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

app.use("/static", express.static("assets"));
app.use("/js", express.static("js"));
app.use("/css", express.static("css"));
app.use("/images", express.static("images"));
app.use("/fonts", express.static("fonts"));

export default app;
