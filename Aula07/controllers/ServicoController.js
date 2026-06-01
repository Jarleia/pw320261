const Servico = require("../models/Servico");

exports.findAll = async (req, res)=>{
    const all = await Servico.findAll();
    return res.send( {servico:all}, 200)
}

exports.findById = async (req,res)=>{

    const { id } = req.params

    const servico = await Servico.findByPk(id);

    if (!servico) {
        return res.status(404).send( {mg:"servico não encontrado"}, 404)
    }

    return res.send( {servico:servico}, 200)
}

exports.create  =   async (req,res)=>{
    //console.log(nome)
    try {
        const {nome, preco, descricao} = req.body;
        const servico = await Servico.create({nome:nome, preco:preco, descricao:descricao})
    res.send( {mg:"salvo com sucesso", servico:servico}, 200)
    }catch(error){
        console.log(error)
        res.send( {mg:error}, 404)
    }
   // res.send( {mg:"error",}, 200)
}

exports.delete =  async (req,res)=>{
    
    try {
        const { id } = req.params

        const servico = await Servico.findByPk(id);

        if (!servico) {
        return res.status(404).send( {mg:"servico não encontrado"}, 404)
        }
        await servico.destroy();
    
    return res.send( {mg:"servico deletado com sucesso"}, 204)}catch(error){
        return res.status(404).send( {mg:error}, 404)
    }
}

exports.update = async (req,res)=>{
    //console.log(nome);
    try {
        const { id } = req.params;
        const servico = await Servico.findByPk(id);

        if (!servico) {
            return res.status(404).send( {mg:"servico não encontrado"});
        }
        const { nome, preco, descricao} = req.body;
        const pd = await servico.update({nome:nome, preco:preco, descricao:descricao},{ where: {id:id} });
    res.send( {mg:"salvo com sucesso", servico:servico}, 200)
    }catch(error){
        console.log(error)
        res.status(404).send( {mg:error}, 404)
    }   
}