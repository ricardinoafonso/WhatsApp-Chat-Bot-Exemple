import "dotenv/config";
import Express from "express";
import routes from "./src/route.routes.js";
import cors from "cors";
const app = Express();

app.use(cors());
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());

app.use("/api/v1/", routes);

app.use((req, res, next) => {
  const err = new Error("Not found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: { message: err.message } });
});

app.listen(3000, () => {
  console.log(`server running at port: 3000`);
});
