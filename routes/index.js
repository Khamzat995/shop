const { Router } = require("express");
const router = Router();

router.use(require("./users"));
router.use(require("./cart"));
router.use(require("./brand"));
router.use(require("./product"));
router.use(require("./review"));
router.use(require("./category"));

module.exports = router;
