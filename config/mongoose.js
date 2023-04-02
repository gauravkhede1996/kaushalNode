const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://gauravkhede1:XlphGy9H21vNNgvq@cluster0.gvajllt.mongodb.net/kaushal_Practise?retryWrites=true');
const db=mongoose.connection;
db.on('error',console.error.bind(console,"Error connecting with database"));
db.once('open',function(){
    console.log("Connection with database: MOngodb is successfull");
})


module.exports=db;