const User = require('../app/models/user');
const repository = require('../repositories/user-repository');

exports.post = async (req, res) => {

    try {
        await repository.post({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha
        });
        res.status(201).send({
            message: "Usuário inserido com sucesso"
        })
    } catch (error) {
        res.status(500).send({
            message: "Falha ao inserir um usuário",
            erro: error
        });

    }}

exports.get = async (req, res) => {
        try {
            var data = await repository.get();
               
            res.json({
                data,
                count: "Existem " + data.length + " Usuários"
            });

        } catch (error) {
            res.status(500).send({
                message: "Falha na requisição",
                erro: error
            });
        } 
    
}

exports.getById = async (req, res) => {
    try {
        const id = req.params.userId;
        var data = await repository.getById(id);
        if(data){
        res.status(200).json({
        message: "Usuário encontrado com sucesso!",
        data,
        });

        return;
    }
        res.status(404).json({
      message: "Usuário não encontrado!",
    });
    } catch (error) {
        res.status(500).send({
            message:"Falha na requisição",
            erro: error
        });
    }
}

exports.put = async (req, res) => {
    try {
        const id = req.params.userId;    
        const data = await repository.put(id, req.body);
        res.status(200).send({
            message:"Usuário atualizado com sucesso",
            dados: data
        })
    } catch (error) {
         res.status(500).send({
            message: "Falha na requisição",
            erro: error
        });
    }
}

exports.delete = async (req, res) =>{
    try {
        const id = req.params.userId;  
        await repository.delete(id);
        res.status(200).send({
            message:"Usuário removido com sucesso",
        })
    } catch (error) {
         res.status(500).send({
            message: "Falha na requisição",
            erro: error
        });
    }
    
}