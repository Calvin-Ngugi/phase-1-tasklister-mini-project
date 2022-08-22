document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault();
    buildToDo(e.target.newTaskDescription.value)
  });
});

function buildToDo(todo){
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent = 'x';
  li.textContent = `${todo}    `;
  li.appendChild(btn);
  console.log(li);
  document.querySelector('#tasks').appendChild(li);
}

function handleDelete(e){
  e.target.parentNode.remove()
}