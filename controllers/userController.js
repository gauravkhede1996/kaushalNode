const User=require('../models/userSchema');
module.exports.home=function(req,res){
    return res.render('home');
}