const User = require('../app/models/user');

exports.post = function(req,res){
        var user = new User();
        user.nome = req.body.nome;
        user.email = req.body.email;
        user.senha = req.body.senha;

        user.save(function(error){
            if(error)
                res.send("Erro ao salvar usuário" + error);

            res.status(201).json({message:'Usuário inserido com sucesso'});
        });
    }

exports.get = function(req, res){
    User.find(function(err, users){
        if(err)
            res.send(err);
        
        res.status(200).json({
            message: 'Usuários retornados',
            usuarios: users
        });
    });
}

// exports.getById = function(req, res){
//     const id = req.params.userId

//     Produto.findById(id, function(err, usuario){
//         if (err) {
//             res.send(err);
//         } else if (usuario === null) {
//             res.status(400).json({
//                 message: 'Usuário não encontrado',
//             });    
//         } else {
//             res.status(200).json({
//                 message: 'Usuário retornados',
//                 usuario: usuario
//             });
//         }
//     });
// }

exports.put = function(req, res){
    const id = req.params.userId

    User.findById(id, function(err, usuario){
        if (err) {
            res.send(err);
        } else if (usuario === null) {
            res.status(400).json({
                message: 'Usuário não encontrado',
            });    
        } else {
            user.nome = req.body.nome;
            user.email = req.body.email;
            user.senha = req.body.senha;

            user.save(function(error){
                if(error)
                    res.send("Erro ao tentar atualizar um usuário" + error);

                res.status(201).json({message:'Usuário atualizado com sucesso'});
            });
        }
    });
}

exports.delete =  function(req, res){
    const id = req.params.productId

    Produto.findByIdAndRemove(id, function(err){
        if(err) return res.status(500).send("Erro ao tentar atualizar um usuário" + error);
        res.status(201).json({message:'Usuário removido com sucesso'});
    });
}