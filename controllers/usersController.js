const ObjectId = require("mongodb").ObjectId;
const usersData = require("../models/usersModel");
const validateUser = require('../validation/validateUser');
const { validationResult } = require('express-validator');

const getAll = async (req, res) => {
  const result = await usersData.getAll();

  try {
    result.toArray().then((users) => {
      res.setHeader("Content-type", "application/json");
      res.status(200).json(users);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getSimgle = async (req, res) => {
  console.log(req.params.id);

  try {
    const userId = new ObjectId(req.params.id);
    const result = await usersData.getSingle(userId);

    result.toArray().then((users) => {
      res.setHeader("Content-type", "application/json");
      res.status(200).json(users);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

/*const createUser = async (req, res) => {
  // console.log(req.params.id);
  //console.log(req);
  //console.log(req.body);
  try {
    const user = {
      username: req.body.username,
      email: req.body.email,
      ipaddress: req.body.ipaddress,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday,
    };

    const result = await usersData.createSingle(user);

    if (result.acknowledged) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Bad request, invalid input" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
*/


const createUser = async (req, res) => {
  try {
    



    /*

 try {
    await Promise.all(validateUser.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Código para crear el usuario...
  } catch (error) {
    // Manejo de errores...
  }

    
    */
    await Promise.all(validateUser.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = {
      username: req.body.username,
      email: req.body.email,
      ipaddress: req.body.ipaddress,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday,
    };

    const result = await usersData.createSingle(user);

    if (result.acknowledged) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Bad request, invalid input" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
		
// usersRouter.put("/:id", userController.updateUser);
const updateUser = async (req, res) => {
  try {
    const user = {
      username: req.body.username,
      email: req.body.email,
      ipaddress: req.body.ipaddress,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday,
    };
    const userId = new ObjectId(req.params.id);
    const result = await usersData.updateSingle(userId, user);

    if (result.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// usersRouter.delete("/:id", userController.deleteUser)
const deleteUser = async (req, res) => {
  try {
    console.log(req.params.id);

    const userId = new ObjectId(req.params.id);

    const result = await usersData.deleteSingle(userId);

    if (result.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getAll, getSimgle, createUser, updateUser, deleteUser };
