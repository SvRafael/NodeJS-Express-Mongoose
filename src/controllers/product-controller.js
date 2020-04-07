const Produto = require('../app/models/product');

exports.post = function(req,res){
        var produto = new Produto();
        produto.nome = req.body.nome;
        produto.preco = req.body.preco;
        produto.descricao = req.body.descricao;

        produto.save(function(error){
            if(error)
                res.send("Erro ao salvar produto" + error);

            res.status(201).json({message:'Produto inserido com sucesso'});
        });

    }

exports.get = function(req, res){
    Produto.find(function(err, prods){
        if(err)
            res.send(err);
        
        res.status(200).json({
            message: 'Produtos retornados',
            produtos: prods
        });
    });
}

exports.getById = function(req, res){
    const id = req.params.productId

    Produto.findById(id, function(err, produto){
        if (err) {
            res.send(err);
        } else if (produto === null) {
            res.status(400).json({
                message: 'Produto não encontrado',
            });    
        } else {
            res.status(200).json({
                message: 'Produtos retornados',
                produto: produto
            });
        }
    });
}

exports.put = function(req, res){
    const id = req.params.productId

    Produto.findById(id, function(err, produto){
        if (err) {
            res.send(err);
        } else if (produto === null) {
            res.status(400).json({
                message: 'Produto não encontrado',
            });    
        } else {
            produto.nome = req.body.nome;
            produto.preco = req.body.preco;
            produto.descricao = req.body.descricao;

            produto.save(function(error){
                if(error)
                    res.send("Erro ao tentar atualizar um produto" + error);

                res.status(201).json({message:'Produto atualizado com sucesso'});
            });
        }
    });
}

exports.delete = function(req, res){
    const id = req.params.productId

    Produto.findByIdAndRemove(id, function(err){
        if(err) return res.status(500).send("Erro ao tentar atualizar um produto" + error);
        res.status(201).json({message:'Produto removido com sucesso'});
    });
}