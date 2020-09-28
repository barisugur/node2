const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restful_api', {useUnifiedTopology:true, useNewUrlParser : true})
.then(()=>console.log("Bağlantı kuruldu"))
.catch(()=> connsole.log("bağlantı hatası"));

