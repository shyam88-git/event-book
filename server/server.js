const express=require('express');
const app=express();

const dotEnv=require('dotenv');
const mongoose=require('mongoose');

const cors=require('cors');

//configure the cors

app.use(cors());


//configure the express to receive the form data


app.use(express.json());


//configure dotenv

dotEnv.config();



const hostname=process.env.HOST_NAME;
const port=process.env.PORT;

//connect to mongodb database

mongoose.connect(process.env.MONGO_DB_LOCAL_URL

 
).then((response)=>{
  console.log(`Connected to mongo db successfully`);
}).catch((error)=>{
  console.error(error);
  process.exit(1);
});

//basic requst

app.get('/',(request,response)=>{

  response.send(`Welcome to events Booking App `);
});


//router configuration

app.use('/api/users',require('./router/userRouter'));
app.use('/api/events',require('./router/eventRouter'));

app.listen(port,hostname,()=>{

  console.log(`Express server is started at http://${hostname}:${port}`);
});