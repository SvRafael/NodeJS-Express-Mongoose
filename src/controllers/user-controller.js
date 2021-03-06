const User = require('../app/models/user');
const userRepository = require('../repositories/user-repository');
const signupRepository = require('../repositories/signup-repository');


exports.login = async (req, res) => {
    try {
        const token = await userRepository.login(req.body.email, req.body.password);
        res.status(200).send({ auth: true, token: token });
    } catch (e) {
        if (!e.status) {
            res.status(500).json({ error: { code: 'Erro Desconhecido.', message: 'Um erro desconhecido ocorreu.' } });
        } else {
            res.status(e.status).json({ error: {code: e.code, message: e.message}});
        }
    }
}

exports.post = async (req, res) => {

    try {
        await repository.post({
            email: req.body.email,
            password: req.body.password
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

//Register
exports.userRegister = async function(req, res){
    try {
        //chamar repositorio para registrar um usuario

    } catch (error) {
        
    }
}

// //Login
// exports.login = async (req, res) => {
//   try {
//     const autheticated = await userRepository.login(req.body);

//     if (autheticated) {
//       res.status(200).json({
//         message: "Login realizado com sucesso!",
//         autheticated,
//       });

//       return;
//     }

//     res.status(401).json({
//       message: "Email e/ou senha inválidos!",
//     });
//   } catch (error) {
//     console.log(error);

//     res.status(500).json({ message: "Erro ao realizar login!", error });
//   }
// };