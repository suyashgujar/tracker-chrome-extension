let myLeads = []
let myNotes = []
const inputEl = document.getElementById("input-el")
const noteEl = document.getElementById("note-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click" , function(){
    myLeads.push(inputEl.value)
    myNotes.push(noteEl.value)
    noteEl.value = ""
    inputEl.value = ""
    renderLeads()
   
})


function renderLeads(){
    let listItems = ""
    for(let i = 0; i < myLeads.length; i++){

    listItems += `
    <li>
     <a target="_blank" href="${myLeads[i]}">
     ${myLeads[i]}    
     </a>
      ---- ${myNotes[i]}
    </li>
    `
    }
  ulEl.innerHTML = listItems

}



