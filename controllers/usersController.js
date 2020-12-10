const UserModel = require("../models/User");

exports.get_users = async (req, res, next) => {

  try {

  const userList = await UserModel.findAll();
  console.log("userList", userList)
    res.render('users', {userList});
  } catch(error){
    res.send("An error occured");
  }
  };

  exports.add_user = (req, res) => {
    res.render("addUser")
  };