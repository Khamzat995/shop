const { Router } = require("express");
const router = Router();

const {
  getAllUser,
  postUser,
  patchUser,
  deleteUser,
} = require("../controllers/index");

router.get("/users", getAllUser);
router.post("/users", postUser);
router.patch("/users/:id", patchUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
