const {equipamentoseletronicos} = require("./equipamentoseletronicos")

function lerEquipamento () {
    try {
        equipamentoseletronicos.forEach ((eletronicos) =>
            console.table(equipamentoseletronicos)
        )
    }catch (error) {
        console.error ("Erro ao ler os equipamentos", error.message)
    } 
}

module.exports = {lerEquipamento}