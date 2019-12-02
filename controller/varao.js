const varaoModel = require("../model/varao");

const getVaraos = (location, category, keyword) =>
  varaoModel.find({
    category,
    location,
    title: { $regex: new RegExp(keyword, "gi") } //global ignore
  });

const saveVarao = data => varaoModel(data).save();

const getCategorias = () => varaoModel.distinct("category");
const getLocation = () => varaoModel.distinct("location");

const getVarao = id => varaoModel.findById(id);

module.exports = {
  getVaraos,
  saveVarao,
  getCategorias,
  getLocation,
  getVarao
};
