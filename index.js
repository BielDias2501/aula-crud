const prompt = require("prompt-sync")()
const {criarEquipamentoseletronicos } = require("./Equipamentos _eletronicos/criarEquipamentoseletronicos")
const {atualizarEquipamentos} = require("./Equipamentos _eletronicos/atualizarEquipamentoseletronicos")
const { deletarEquipamento } = require("./Equipamentos _eletronicos/deletarEquipamentoseletronicos")
const {lerEquipamento } = require("./Equipamentos _eletronicos/lerEquipamentoseletronicos")

//id, novoNome , novoModelo , novoNumeroSerie , novaDataCompra , novoVencimentoGarantia , novaLocalizacao , novoStatuss , NovoAlocadoPara

criarEquipamentoseletronicos("663B4722-8849-4680-B84C-432C814D7BE9","Modelo 2023","computador inspiron","5434634643", "05/10/2024","05/10/2029","Miranda","confirmado","Gabriel")
lerEquipamento()
atualizarEquipamentos("663B4722-8849-4680-B84C-432C814D7BE9","computador lenovo","Modelo 2024","5434634643", "25/10/2024","25/10/2029","Kabum","confirmado","Sergio")
lerEquipamento()
deletarEquipamento("663B4722-8849-4680-B84C-432C814D7BE9")