const express = require("express");
const router = express.Router();
const varaosControlles = require("../controller/varao");

/* GET home page. */
router.get("/", async function(req, res, next) {
  const categorias = await varaosControlles.getCategorias();
  categorias.sort();

  const locations = await varaosControlles.getLocation();
  locations.sort();

  res.render("index", { title: "Vara'os", categorias, locations });
});

router.get("/varao/:id", async function(req, res, next) {
  const { id } = req.params;

  if (!id)
    return res.render("noResults", { title: "Vara'os - Sin Resultados" });

  const varao = await varaosControlles.getVarao(id);

  if (!varao)
    return res.render("noResults", { title: "Vara'os - Sin Resultados" });

  res.render("profile", { title: `Varao - ${varao.name}`, varao });
});

router.post("/varaos", async function(req, res, next) {
  const { location, category, keyword } = req.body;

  const varaos = await varaosControlles.getVaraos(location, category, keyword);

  if (!varaos.length)
    return res.render("noResults", { title: "Vara'os - Sin Resultados" });

  res.render("listVaraos", { title: "Vara'os - Buscando", varaos });
});

module.exports = router;
