const Categories = require("../models/Category");
const getAllCategories = async (req, res) => {
  const allCategories = await Categories.find();
  res.json(allCategories);
};

const postCategories = async (req, res) => {
  try {
    const postCat = await new Categories({
      name: req.body.name,
    });
    await postCat.save()
    res.json("Категория добавлена!");
  } catch (e) {
    console.log(e.message);
  }
};
const patchCategories = async(req, res) =>{
  try {
   const patchCat =  await Categories.findOneAndUpdate(
     { _id: req.params.id }, // поиск элемента по ID
     { ...req.body } // меняет в теле только то, что пришло
   );
    await patchCat.save()
    res.json('Категория изменена!')
  }catch (e) {
    console.log(e.message)
  }
};

const deleteCategories = async (req, res) =>{
  try {
    const deleteCat = await Categories.findById(req.params.id)
    deleteCat.delete()
    res.json('Категория удалена!')
  }catch (e){
    console.log(e.message)
  }
}

module.exports = {
  getAllCategories,
  postCategories,
  patchCategories,
  deleteCategories,
};

