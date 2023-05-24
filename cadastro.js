const botao = document.getElementById('botao');
const divEnd = document.getElementById('divEnd');

let itens = []
getLocalStorage();

function criarObjeto(){
    const inputnome = document.getElementById("nome");
    const inputsobrenome = document.getElementById("sobrenome");
    const inputendereco = document.getElementById("endereco");
    const inputcomplemento = document.getElementById("complemento");
  
    if(inputnome && inputsobrenome && inputendereco && inputcomplemento){
      const objeto ={
        nome: inputnome.value,
        sobrenome: inputsobrenome.value,
        endereco: inputendereco.value,
        complemento : inputcomplemento.value
      }
      return objeto;
    }
    return null;
  }

botao.addEventListener('click', (_) => {
  const objeto = criarObjeto()
  console.log(objeto);
  if (objeto) {
    itens.push(objeto)
  }
  adicionarItens()
  addLocalStorage()
});


function adicionarItens() {
  divEnd.innerHTML = '';
  itens.forEach((item, i) => {
    let row = document.createElement('div');
    row.className = 'row mt-3';
    row.innerHTML = `
      <div class="col-12">
        <div class="card">
          <div class="card-body">
          <h4>${i}</h4>
          <p>nome : ${JSON.stringify(item["nome"])}</p>
          <p>sobrenome : ${JSON.stringify(item["sobrenome"])}</p>
          <p>endereco : ${JSON.stringify(item["endereco"])}</p>
          <p>complemento: ${JSON.stringify(item["complemento"])}</p>
        </div>
    </div>
    <div>
            <button class="btn btn-success" id = "editar" onclick ="editar(${i})">
            Editar
            </button>
            </div>
        </div>
        </div>  
    `;
    divEnd.appendChild(row);
  });
}

function addLocalStorage() {
  localStorage.setItem('itens', JSON.stringify(itens))
}

function getLocalStorage () {
  try {
    itens = JSON.parse(localStorage.getItem('itens'));
    adicionarItens();
  } catch (error) {
    localStorage.setItem('itens', '[]');
  }
}

function excluir(_) {
  const idExclusao = prompt('Informe o Id:');
  itens.splice(idExclusao, 1);
  adicionarItens();
  addLocalStorage();
}

function editar(item){
    const editnome = prompt("Digite o nome:");
    const editsobrenome = prompt("digite o sobrenome:");
    const editendereco = prompt("Digite o endereco:");
    const editcomplemento = prompt("Digite o complemento:");

    itens[item].nome = editnome;
    itens[item].sobrenome = editsobrenome;
    itens[item].endereco = editendereco;
    itens[item].complemento = editcomplemento;

    adicionarItens();
    addLocalStorage();
}

function confirmacao(status){
  if(status.innerHTML === "pendente"){
    status.innerHTML = "em andamento";
    status.className = "btn btn-warning";
  }else if(status.innerHTML === "em andamento"){
  status.innerHTML = "concluido";
  status.className = "btn btn-success";
  } else{
  status.innerHTML = "pendente";
  status.className = "btn btn-danger"; 
  }

}
