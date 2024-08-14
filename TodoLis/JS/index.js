let input = document.getElementById('input'); 
let add = document.getElementById('add'); 
let list = document.getElementById('list');
refresh(); 
function addTask(){
     const task = input.value.trim();  
     if(task){
    createTask(task);
        input.value = '';
        save()  
     }
     else {
        alert("Enter Your Task") 
     }
}
add.addEventListener('click',addTask);
function createTask (task){
const items = document.createElement('li'); 
items.textContent = task; 
list.appendChild(items); 
const done = document.createElement('button')
done.textContent = "Done"
done.className = "done";
list.appendChild(done); 
function sta(){
    items.style.textDecoration ="line-through"     
}
done.addEventListener('click',sta); 
const remove = document.createElement('button');
remove.textContent = "Delete";
remove.className = "remove"; 
list.appendChild(remove);
remove.addEventListener('click' , function(){
    list.removeChild(items);
    list.removeChild(remove);
    list.removeChild(done); 
}) 
}
function save(){
let tasks=[]; 
list.querySelectorAll('li').forEach(function(item){
tasks.push(item.textContent.trim()); 
});
localStorage.setItem('tasks' , JSON.stringify(tasks))
} 
function refresh(){
    const tasks= JSON.parse(localStorage.getItem('tasks'))||[]; 
    tasks.forEach(createTask); 
}
