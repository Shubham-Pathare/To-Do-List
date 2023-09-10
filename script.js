const inputBox = document.getElementById('input');
const listContainer = document.getElementById('list-container');

function addTask(){
  if(inputBox.value === ''){
alert ('Yoy have to write something');
  }
  else{
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
    inputBox.value = '';
  }
  saveData();
}

listContainer.addEventListener('click', (e) => {
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked');
    saveData();
  }
  else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    saveData();
  }
})

inputBox.addEventListener('keyup', (event) => {
  if(event.which === 13){
    addTask();
  }
})

function saveData(){
  localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem('data');
}

showTask();