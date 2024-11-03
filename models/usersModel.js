const mongodb =  require('../connections/mongodb');

const getAll = async(req,res) =>{
 
    const result = await mongodb.getDatabase().db('project1').collection('users').find();

    return result;

}

 
const getSingle = async(userId) =>{
    const result = await mongodb.getDatabase().db('project1').collection('users').find({_id: userId});
    return result;

}

module.exports={ getAll ,getSingle }