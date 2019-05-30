const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {

    async index(req, res) {
        const { page = 2 } = req.query; // o query funciona para parametro get como exemplo o find junto a função ?page=1

        const product = await Product.paginate({}, { page, limit:10});
        return res.json(product);

    },

    async store(req, res){
        const product = await Product.create(req.body);
        return res.json(product);
    },

    async show(req, res){
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});   // pega o conteudo que vem dos parametros e atualiza parao  body, OBS: new é para atualizar e retornar atualizado.
        return res.json(product);
    },

    async destroy(req, res){
        const product = await Product.findByIdAndRemove(req.params.id);
        return res.send()
    },

};