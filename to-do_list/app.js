const form=document.querySelector('form');
const taskList=document.querySelector('#task-list'); 

let tasks =[];

form.addEventListener('submit', function(event){
    event.preventDefault();

    const input =document.querySelector('#task-input');
    const taskText = input.value.trim();

    if(taskText !==''){
        tasks.push({text: taskText, complete: false});
        input.value='';
        displayTasks();
    }
 });

 function displayTasks(){

    taskList.innerHTML='';

    tasks.forEach(  function(task, index){

        const li =document.createElement('li');
        li.textContent=task.text;

        if(task.complete){
            li.classList.add('complete');
        }
        li.addEventListener('click',function(){
            tasks[index].complete = !tasks[index].complete;
            displayTasks();
        });
        taskList.appendChild(li);
    });
 }

 displayTasks();