import { Router } from "express";
const router = Router();

router.get("/", (req, res) =>
  res.render("index", { title: "First Web with Node" })
); //send: para enviar algo al servidor, render: renderiza o envia un archivo html que estará apartir de un archivo. No es necesario poner la extensión 'ejs' ya que viene integrado con express

router.get("/about", (req, res) => res.render("about", { title: "About me" }));

router.get("/contact", (req, res) =>
  res.render("contact", { title: "Contact me" })
);

export default router;
