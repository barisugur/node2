const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/restful_api', {useUnifiedTopology:true, useNewUrlParser : true})
.then(()=>console.log("Bağlantı kuruldu"))
.catch(()=> console.log("Bağlantı hatası"));