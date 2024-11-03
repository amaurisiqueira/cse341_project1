const express = require('express');
const app = express();
const mainRouter = require('./routers/main');
const usersRouter = require('./routers/userRouter');
const cors = require('cors');
const env = require('dotenv');
 
env.config(); 

const mongodb =  require('./connections/mongodb');


app.use(cors({
  origin: ['http://localhost', 'http://127.0.0.1:5500']
}));

app.use("/",mainRouter);

app.use("/user",usersRouter);


mongodb.initDb( (err) => { 
  if(err){

      console.log(err);

  }else{

      console.log('')



  
    // Iniciar el servidor
    const port = process.env.PORT  ||  8080;
    app.listen(port, () => {
      console.log(`Servidor escuchando en el puerto ${port}`);
    });

 

  }



})

 