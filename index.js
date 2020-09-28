const express = require('express');
require('./Database/databaseConnection');
const app = express();
//Routes
const userRouter = require('./router/userRouter');

app.use(express.json());

app.get('/', (req,res)=> {
    res.json({'mesaj':'Hoşgeldiniz'});
    //Ekranda yazacak view
})

app.post('/', (req,res) =>
 {res.status(200).json(req.body); 
});

app.use('/api/users',userRouter);

app.listen(3000, ()=> {
    console.log("3000 portundan server ayaklandırıldı.");
});