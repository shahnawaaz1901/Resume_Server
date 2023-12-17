import express from "express";
import mailRouter from "./src/features/contact/sendmail.router.js";
import cors from "cors";
const server = express();

server.use(
  cors({
    origin: "https://shahnawaaz1901.github.io/",
    methods: ["POST"],
  })
);

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use("/api/contact", mailRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Internal Server Error");
});
export default server;
