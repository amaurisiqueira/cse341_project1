const mongodb = require("../connections/mongodb");

const getAll = async (req, res) => {
  const result = await mongodb
    .getDatabase()
    .db("project1")
    .collection("users")
    .find();

  return result;
};

const getSingle = async (userId) => {
  const result = await mongodb
    .getDatabase()
    .db("project1")
    .collection("users")
    .find({ _id: userId });
  return result;
};

const createSingle = async (user) => {
  return (result = await mongodb
    .getDatabase()
    .db("project1")
    .collection("users")
    .insertOne(user));
};

const updateSingle = async (userId, user) => {
  return (result = await mongodb
    .getDatabase()
    .db("project1")
    .collection("users")
    .replaceOne({ _id: userId }, user));
};

const deleteSingle = async (userId) => {
  return (result = await mongodb
    .getDatabase()
    .db("project1")
    .collection("users")
    .deleteOne({ _id: userId }));
};

module.exports = {
  getAll,
  getSingle,
  createSingle,
  updateSingle,
  deleteSingle,
};
