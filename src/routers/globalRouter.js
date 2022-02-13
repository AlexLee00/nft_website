import express from "express";
import { join, login, wallet, register } from "../controllers/userController";
import {
  main,
  explore,
  detail,
  rankings,
  news,
  gallery,
  contact,
  help,
} from "../controllers/itemController";

const globalRouter = express.Router();

globalRouter.get("/", main);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/register", register);
globalRouter.get("/wallet", wallet);
globalRouter.get("/explore", explore);
globalRouter.get("/detail", detail);
globalRouter.get("/rankings", rankings);
globalRouter.get("/news", news);
globalRouter.get("/gallery", gallery);
globalRouter.get("/contact", contact);
globalRouter.get("/help", help);

export default globalRouter;
