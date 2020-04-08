const User = require('../app/models/user');
const mongoose = require('mongoose');

exports.post = async(data) =>{
    const usuario = new User(data);
    await usuario.save();
} 

exports.get = async () =>{
    const res = await User.find();
    return res;
}

exports.getById = async(id) =>{
    const res = await User.findById(id);
    return res;
}



exports.put = async(id, data) =>{
    await User.findByIdAndUpdate(id, {
        $set:{
            nome: data.nome,
            email: data.email,
            senha: data.senha
        }
    });
}

exports.delete = async(id) =>{
    await User.findOneAndRemove(id);
}
