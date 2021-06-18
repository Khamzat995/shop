// подключение модели Product
const Product = require('../models/Product');

//пользователь может смотреть весь список товаров
const getProduct = async (req, res) => { // объявление функции
  const priceList = await Product.find(); // создание константы и применение метода
  res.json(priceList); // ответ в формате json
};

// пользователь может смотреть товары из определенной категории
const getProductCategory = async (req, res) => { // объявление функции
  const priceCategory = await Product.find({ categoryId: req.params.id}); // поиск по категории
  res.json(priceCategory); // ответ в формате json
};

// пользователь может смотреть товары определенного бренда
const getProductBrand = async (req, res) => { // объявление функции
  const priceBrand = await Product.find({ brandId: req.params.id}); // поиск по бренду
  res.json(priceBrand); // ответ в формате json
};

// администратор может добавлять новые товары
const postProduct = async (req, res)=>{
  try {
    const post = await new Product ({
      name: req.body.name,  //добавление наименования
      price: req.body.price, // добаление цены
      availability: req.body.availability, // статус наличия товара
      categoryId: req.body.categoryId, // категория товара
      brandId: req.body.brandId // бренд товара
    })
    await post.save(); // сохранить добавленное
    res.json('Товар успешно добавлен') // сообщение сервера
  } catch (e){ // перехват ошибки
    console.log(e.message) // вывод содержимого ошибки в консоль
  }
};

// администратор может изменять существующие товары
const patchProduct = async (req, res) => { // объявление функции
  try {
    const patch = await Product.findOneAndUpdate( // создание константы равной модели Category
      { _id: req.params.id }, // поиск элемента по ID
      { ...req.body } // меняет в теле только то, что пришло
    );
    await patch.save(); // сохранение изменений
    res.json("Продукт успешно изменён"); // сообщение сервера
  } catch (e) { //перехват ошибки
    console.log(e.message);  // вывод содержимого ошибки в консоль
  }
};

// администратор может удалять товары
const deleteProduct = async (req, res) => { //объявление функции
  try {
    const goods = await Product.findById(req.params.id); // создание константы
    goods.delete(); // удаление констаты
    res.json("Товар успешно удален"); // сообщение о проделанной операции
  } catch (e) { // перехват ошибки
    console.log(e.message); // вывод содержимого ошибки в консоль
  }
};

module.exports = {
  getProduct, // экспорт функции
  getProductCategory, // экспорт функции
  getProductBrand, // экспорт функции
  postProduct, // экспорт функции
  patchProduct, // экспорт функции
  deleteProduct, // экспорт функции
};