import express from "express";
import { see, edit, remove, upload } from "../controllers/itemController";

const itemRouter = express.Router();

itemRouter.get("/:id([0-9a-f]{24})", see);
itemRouter.get("/:id([0-9a-f]{24})/edit", edit);
itemRouter.get("/:id([0-9a-f]{24})/remove", remove);
itemRouter.get("/upload", upload);

export default itemRouter;
