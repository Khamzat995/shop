const Brand = require("../models/Brand");
const getAllBrands = async (req, res) => {
  const getBrands = await Brand.find();
  res.json(getBrands);
};
const postBrand = async (req, res) => {
  try {
    const brand = await new Brand({
      name: req.body.name
    });
    await brand.save();
    res.json("Бренд успешно добавлен");
  } catch (e) {
    console.log(e.message);
  }
};
const patchBrand = async (req, res) => {
  try {
    const brand = await new Brand.findOneAndUpdate(req.params.id, {
      $set: req.body,
    });
    brand.save();
    res.json("Бренд успешно изменен");
  } catch (e) {
    console.log(e.message);
  }
};
const deleteBrand = async (req, res) => {
  try {
    const deletedBrand = await Brand.findById(req.params.id);
    deletedBrand.delete();
    res.json("Бренд успешно удален!");
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  getAllBrands,
  postBrand,
  patchBrand,
  deleteBrand,
};
