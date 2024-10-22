const {equipamentoseletronicos} = require("./equipamentoseletronicos")

function criarEquipamentoseletronicos (id, nome , modelo , numeroSerie , dataCompra , vencimentoGarantia , localizacao , statuss , alocadoPara){
const novoEquipamento = {id, nome , modelo , numeroSerie , dataCompra , vencimentoGarantia , localizacao , statuss , alocadoPara}
try {
    equipamentoseletronicos.push(novoEquipamento)
}catch (error) {
    console.error ("Erro ao cadastrar novo equipamento",error.message)
}
}

module.exports = {criarEquipamentoseletronicos}