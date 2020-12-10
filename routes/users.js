var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', usersController.get_users);

router.get("/add", usersController.show_add_user_form)
router.post("/add", usersController.add_user)

module.exports = router;
