const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");


function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}


createBtn.addEventListener("click", () =>{
   // let datenew = new Date();
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    let dte = document.createElement("header");
    inputBox.className = "input-box";
    inputBox.id = "dt";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./images/delete.jpeg";
    notesContainer.appendChild(inputBox).appendChild(img);
    //document.write(datenew.toLocaleString(),'<br>');
      var today = new Date();
      var dateString = today.toLocaleDateString();
      var timeString = today.toLocaleTimeString();
      var dateTimeString = dateString + " " + timeString;
      inputBox.setAttribute("contenteditable", "true");
      notesContainer.appendChild(inputBox).appendChild(dateTimeString);
      //document.getElementById("dt").innerHTML = dateTimeString;

} )
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
    
})
document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})