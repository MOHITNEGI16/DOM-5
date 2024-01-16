
let noteText = document.getElementById("note");
let button = document.getElementById("noteButton");
let color = document.getElementById("colorCode");
const noteContainer = document.getElementById("notesContainer");
button.addEventListener('click',()=>{
    
    if(noteText.value===""){
        alert("Enter some text");
    }
    else{
         
    hereIsNote(noteText.value,color.value);
    noteText.value = "";

    deleteNotes();

    }
    
});



function deleteNotes(){
    let delButton = document.querySelectorAll(".delete");
     
   let delContain = document.querySelector('#notesContainer')
   console.log(delContain.children[1].children[1].innerText);
   delContain.addEventListener('click',(e)=>{
    if(e.target.
        innerText == "Del")e.target.parentElement.remove();
    console.log(e.target.className=="Delete");
    console.log(e)
   })
    // delButton.forEach(element=>{
    //     element.addEventListener('click',(e)=>{
    //         e.target.parentElement.remove();
    //     })
    // })


    // let do it with event propogation 

}


function hereIsNote(text,color){

    let contain = document.createElement("div");
    contain.style.backgroundColor = color;
    contain.className = "contain";
    
    let container = `

    <div class="text"><h4>${text}</h4></div>
    <div class="delete">Del</div>

    `;

    contain.innerHTML = container;

    noteContainer.appendChild(contain)


}


