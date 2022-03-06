let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");


addToDoButton.addEventListener("click",function(){
    var paragraph = document.createElement("p")
    paragraph.classList.add ("paragraph-styling");
    paragraph.innerText =inputField.value; //creates paragraph with the text of the input value
    toDoContainer.appendChild(paragraph);
    inputField.value= ""; //removes input value after it has been passed through
    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration ="line-through"; // puts a cross through item 
    })
    paragraph.addEventListener("dblclick", function(){ 
        toDoContainer.removeChild(paragraph); // removes item off the list once double clicked
    })
})

