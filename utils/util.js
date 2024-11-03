const controller = require('../controllers/mainController');


const callProfessional = () =>{

  return controller.getProfesionalData();
}


module.exports = { callProfessional }
 