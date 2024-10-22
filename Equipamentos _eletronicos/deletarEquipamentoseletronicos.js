const {equipamentoseletronicos} = require("./equipamentoseletronicos")

function deletarEquipamento(id){
    try {
        const indice = equipamentoseletronicos.findIndex(elementodoarray =>
            elementodoarray.id === id
        )
        if (indice === -1) {
            console.log("Equipamento não encontrado")
        }else {
            equipamentoseletronicos.splice(indice,1)
            console.log ("equipamento excluido com sucesso")
        }
    }catch (error){
        console.error("Erro ao excluir equipamento",error.message)
    }
}

module.exports={deletarEquipamento}