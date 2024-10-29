const prompt = require("prompt-sync")()
const {criarEquipamentoseletronicos } = require("./Equipamentos _eletronicos/criarEquipamentoseletronicos")
const {atualizarEquipamentos} = require("./Equipamentos _eletronicos/atualizarEquipamentoseletronicos")
const { deletarEquipamento } = require("./Equipamentos _eletronicos/deletarEquipamentoseletronicos")
const {lerEquipamento } = require("./Equipamentos _eletronicos/lerEquipamentoseletronicos")
const {excluirTodos} = require("./Equipamentos _eletronicos/excluirtudo")


//id, novoNome , novoModelo , novoNumeroSerie , novaDataCompra , novoVencimentoGarantia , novaLocalizacao , novoStatuss , NovoAlocadoPara
// criarEquipamentoseletronicos("663B4722-8849-4680-B84C-432C814D7BE9","Modelo 2023","computador inspiron","5434634643", "05/10/2024","05/10/2029","Miranda","confirmado","Gabriel")
// lerEquipamento()
// atualizarEquipamentos("663B4722-8849-4680-B84C-432C814D7BE9","computador lenovo","Modelo 2024","5434634643", "25/10/2024","25/10/2029","Kabum","confirmado","Sergio")
// lerEquipamento()
// deletarEquipamento("663B4722-8849-4680-B84C-432C814D7BE9")

    function exibirMenu() {
        console.log("===================")
        console.log("1 - Criar equipamento")
        console.log("2 - Atualizar equipamento")
        console.log("3 - Deletar equipamento")
        console.log("4 - Ler equipamento")
        console.log("5 - Excluir tudo")
        console.log("9 - Saindo do sistema")
        console.log("====================")
}
let opcao
do {
    exibirMenu()
    opcao = parseInt(prompt("Digite uma opção:"))       
    let id;
    switch (opcao) {
        case 1:
            id = prompt("Digite o id:")
            let nome = prompt("Digite o nome:")
            let modelo = prompt("Digite o modelo:")
            let numeroserie = prompt("Digite o numero serie:")
            let dataCompra = prompt("Digite a data da compra:")
            let vencimentoGarantia = prompt("Digite o vencimento garantia:")
            let localizacao = prompt("Digite a localização:")
            let statuss = prompt("Digite o statuss:")
            let alocadoPara = prompt("Digite alocado para:")
            criarEquipamentoseletronicos(nome, modelo , numeroserie , dataCompra , vencimentoGarantia , localizacao , statuss , alocadoPara)
            lerEquipamento()
            break;
        case 2:
            id = prompt("Digite o id:")
            let novoNome = prompt("Digite o novo nome:")
            let novoModelo = prompt("Digite o novo modelo:")
            let novoNumeroSerie = prompt("Digite o novo numero serie:")
            let novaDataCompra = prompt("Digite a nova data compra")
            let novoVencimentoGarantia = prompt("Digite o novo vencimentoGarantia:")
            let novaLocalizacao = prompt("Digite a nova localização:")
            let novoStatuss = prompt("Digite o novo statuss:")
            let NovoAlocadoPara = prompt("Digite o novo alocado para:")
            atualizarEquipamentos(id, novoNome , novoModelo , novoNumeroSerie , novaDataCompra , novoVencimentoGarantia , novaLocalizacao , novoStatuss , NovoAlocadoPara)
            lerEquipamento()
            break
        case 3:
            id = prompt("Digite o id:")
            deletarEquipamento(id)
            break
        case 4:
            lerEquipamento()
            break
        case 5:
            excluirTodos()
            break
        case 9:
            console.log("Saindo do sistema")
            break

        default:
            console.log("Valores invalidos!")
            break;
    }

} while (opcao !== 9)