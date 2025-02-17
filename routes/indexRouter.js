import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Home page"));
indexRouter.get("/about", (req, res) => res.send("About page"));
indexRouter.get("/contact", (req, res) => res.send("Contact page - GET"));
indexRouter.post("/contact", (req, res) => res.send("Contact page - POST"));

export { indexRouter };
