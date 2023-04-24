const { Router } = require("express");
const { Produto, produtoJoiSchema } = require("../models/produto");

const router = Router();


//ADICIONANDO UM PRODUTO 

router.post("/produtos", async (req, res) => {
    try {
        const { error } = produtoJoiSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const { nome, descricao, quantidade, preco, desconto, dataDesconto, categoria, imagem } = req.body;
        const produto = new Produto({ nome, descricao, quantidade, preco, desconto, dataDesconto, categoria, imagem });

        await produto.save();
        res.status(201).json(produto);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Um erro aconteceu." });
    }
});


module.exports = router;
