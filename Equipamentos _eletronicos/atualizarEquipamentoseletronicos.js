const {equipamentoseletronicos} = require("./equipamentoseletronicos")
var validator = require('validator')

function atualizarEquipamentos(id, novoNome , novoModelo , novoNumeroSerie , novaDataCompra , novoVencimentoGarantia , novaLocalizacao , novoStatuss , NovoAlocadoPara){
    try {
        const equipamento = equipamentoseletronicos.find(elementodoarray =>
            elementodoarray.id === id
        )
        if (equipamento){
            equipamento.nome = novoNome,
            equipamento.modelo= novoModelo,
            equipamento.numeroserie = novoNumeroSerie,
            equipamento.datacompra = novaDataCompra,
            equipamento.vencimentogarantia = novoVencimentoGarantia,
            equipamento.localizacao = novaLocalizacao,
            equipamento.statuss = novoStatuss,
            equipamento.alocadopara = NovoAlocadoPara,
            console.log("equipamento eletronico editado com sucesso")
        }else {
            console.log ("equipamento não encontrado")
        }
    }catch (error){
        console.error("")
    }
}

module.exports = {atualizarEquipamentos}