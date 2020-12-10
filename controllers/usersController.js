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

  //on get request

  exports.show_add_user_form = (req, res) => {
    res.render("addUser")
  };

  // on post request 

  exports.add_user = async (req, res) => { 

    req.body.firstName

    // add to do

    UserModel.create()

    try {
      const newUser = await UserModel.create({

        firstName: req.body.firstName,
        lastName: req.body.lastName,
      })
      res.redirect("/users");
    } catch(error) {
      res.send("An error occured")
    }

  };

exports.delete_user = async (req, res) => {
  try{
    await UserModel.destroy({

      where: {
        id: req.params.id,
      },
      
    });
    console.log("deger", req.params.id)

  res.redirect("/users")
  }catch (error) {
    console.log("error". error)
  }
}

