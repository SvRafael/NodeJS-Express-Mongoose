const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

var userSchema = new Schema({
    email: {type: String, default:'', required:true},
    password: {type: String, default:'', required:true},
    isDeleted: {type: Boolean, default:false},
    signUpDate: {type: Date, defaut: Date.now()}
});

//Registro
userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
};

//login
userSchema.methods.ValidPassword = function(password){
    return bcrypt.compareSync(password, this.password)
};

module.exports = mongoose.model('User', userSchema);