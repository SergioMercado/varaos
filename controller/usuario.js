const usuarioModel = require("../model/usuario");

const agregarUsuario = async (req, res) => {
  const {
    nombre,
    apellido,
    email,
    password,
    ciudad,
    telefono,
    puntaje,
    imagen,
    cedula
  } = req.body;

  if (!nombre || !apellido || !email)
    return res.render("noResults", { title: "Error al crear Usuario" });

  await new usuarioModel({
    nombre,
    apellido,
    email,
    password,
    ciudad,
    telefono,
    puntaje,
    imagen,
    cedula
  }).save();

  return res.render("perfil", {
    title: "Usuario" + nombre,
    nombre,
    apellido,
    email,
    password,
    ciudad,
    telefono,
    puntaje,
    imagen,
    cedula
  });
};

const obtenerUsuario = (req, res) => {
  const {} = req.body;
};

module.exports = {
  agregarUsuario
};
