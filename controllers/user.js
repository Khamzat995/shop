const User = require('../models/User');

const getAllUser = async (req, res) =>{
  const getUsers = await User.find()
  res.json(getUsers)
}
const postUser = async (req, res) =>{
  try {
    const postUser = await new User({
      name: req.body.name,
      email: req.body.email,
      cart: req.body.cart
    })
    await postUser.save()
    res.json('Пользователь успешно добавлен')
  }catch (e) {
    console.log(e.message)
  }
}
const patchUser = async (req, res) =>{
  try {
  const patch = await User.findOneAndUpdate(req.params.id, {
    $set: req.body
  })
    patch.save()
    res.json('Пользователь успешно изменен')
  }
  catch (e){
    console.log(e.message)
  }
}
const deleteUser = async (req,res) =>{
  try {
    const deleteUser = await User.findById(req.params.id)
    deleteUser.delete()
    res.json('Пользователь успешно удален')
  }catch (e) {
    console.log(e.message)
  }
}

module.exports = {
  getAllUser,
  postUser,
  patchUser,
  deleteUser,
}