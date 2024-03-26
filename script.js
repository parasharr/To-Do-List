const inputBox = document.getElementById("todoText");
const listContainer = document.getElementById("listcontainer"); 

function addTask() {
  if (inputBox.value === '') {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value; 
    listContainer.appendChild(li); 
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close"; 
    span.appendChild(txt);
    li.appendChild(span);


    span.onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }

    inputBox.value = ""; 
    saveData();
  }
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();