// Seleção de DOM -> Pegando os elementos HTML

const textTask = document.getElementById('texto-tarefa'); // input

const createTask = document.getElementById('criar-tarefa'); // button

const toDoList = document.getElementById('lista-tarefas'); // lista

// Eventos de escuta;
createTask.addEventListener('click', addTask);
toDoList.addEventListener('click', selectItem)
toDoList.addEventListener('dblclick', doubleClick)


// Funções
function addTask(event) {
  const newText = document.createElement('li');
  newText.innerText = textTask.value;
  toDoList.appendChild(newText);  
  textTask.value = '';
}

function selectItem(event) {
  let selectedItem = document.querySelector('.selecionado');
  if (selectedItem !== null) {
    selectedItem.classList.remove('selecionado');
  }
  event.target.classList.add('selecionado');
}
function doubleClick(event){
  event.target.classList.toggle('completed');
}