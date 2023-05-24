var itemHtml = document.getElementById("itens");

const itens = []
function adicionarItem(){
    var item = prompt("Qual objeto você deseja incluir na lista?", "Adicione um novo objeto");
    if (item == null || item == "") {
        alert("O uso do prompt foi cancelado!");
    } else {
        itens.push(item);
        preencher()
    }
}
function deletarItem(){
    let item = prompt("Qual item deseja deletar?");
    console.log(item);
    let indexExcluir = itens.findIndex((valor) => valor === item);
    if (indexExcluir === -1) {
        return alert('Não existe isso!')
    }
    itens.splice(indexExcluir, 1);
    preencher();
}

function preencher() {
    itemHtml.innerHTML = ''
    itens.forEach(element => {
        var option = document.createElement("option");
        option.text = element
        itemHtml.add(option, element)
    });
}


