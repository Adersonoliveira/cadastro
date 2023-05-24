const botao = document.getElementById('botao');
const input = document.getElementById('todos')
const divItens = document.getElementById('divItens')

let itens = []
getLocalStorage();

botao.addEventListener('click', (_) => {
    console.log('dsadasd');
  if (input.value) {
    itens.push(input.value)
  }
  adicionarItens()
  addLocalStorage()
});


function adicionarItens() {
  divItens.innerHTML = '';
  itens.forEach((item, i) => {
    let row = document.createElement('div');
    row.className = 'row mt-3';
    row.innerHTML = `
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            ${i} - ${item}
              <div>
              <button class="btn btn-danger" id = "status" onclick =confirmacao(this)>pendente</button>
              </div>
            </div>
        </div>
      </div>
    `;
    divItens.appendChild(row);
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

function editar(_){
    const idEdita = prompt('Informe o Id de alteração:');
    const alteração = prompt('Editar');
    itens[idEdita] = alteração;
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