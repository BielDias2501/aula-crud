const {equipamentoseletronicos} = require("./equipamentoseletronicos")
var validator = require('validator')

function criarEquipamentoseletronicos (id, nome , modelo , numeroSerie , dataCompra , vencimentoGarantia , localizacao , statuss , alocadoPara){
const novoEquipamento = {id, nome , modelo , numeroSerie , dataCompra , vencimentoGarantia , localizacao , statuss , alocadoPara}
try {
    if (
        validator.isEmpty(id) ||
        validator.isEmpty(nome) ||
        validator.isEmpty(modelo) ||
        validator.isEmpty(numeroSerie) ||
        validator.isEmpty(dataCompra) ||
        validator.isEmpty(vencimentoGarantia) ||
        validator.isEmpty(localizacao) ||
        validator.isEmpty(statuss) ||
        validator.isEmpty(alocadoPara)
    ) {
        console.error("Todos os campos devem ser preenchidos")
        return
    }
    equipamentoseletronicos.push(novoEquipamento)
}catch (error) {
    console.error ("Erro ao cadastrar novo equipamento",error.message)
}
}

module.exports = {criarEquipamentoseletronicos}