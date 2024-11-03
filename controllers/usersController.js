const ObjectId  = require('mongodb').ObjectId;
const usersData = require('../models/usersModel');


const getAll = async(req ,res  )=>{
  
    const result = await usersData.getAll()

    try{ 
      result.toArray().then(  (users) => {
        res.setHeader('Content-type','application/json');
        res.status(200).json(users);
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }

}


const getSimgle = async(req ,res  )=>{


  console.log(req.params.id);
  
  const userId = new ObjectId(req.params.id);

  const result = await usersData.getSingle(userId);

  try{ 
    result.toArray().then(  (users) => {
      res.setHeader('Content-type','application/json');
      res.status(200).json(users);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }

}

module.exports = { getAll , getSimgle}