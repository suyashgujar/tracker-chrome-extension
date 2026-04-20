let myLeads = []
let myNotes = []

const inputEl = document.getElementById("input-el")
const noteEl = document.getElementById("note-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el")

const leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const noteFromLocalStorage = JSON.parse(localStorage.getItem("myNotes"))




if(leadFromLocalStorage && noteFromLocalStorage){
  myLeads = leadFromLocalStorage
  myNotes = noteFromLocalStorage
  renderLeads()
}

inputBtn.addEventListener("click" , function(){
 
    myLeads.push(inputEl.value)
    myNotes.push(noteEl.value)
    noteEl.value = ""
    inputEl.value = ""
    localStorage.setItem("myLeads" , JSON.stringify(myLeads))
    localStorage.setItem("myNotes" , JSON.stringify(myNotes))
    renderLeads()

})

deleteBtn.addEventListener("dblclick" , function(){

  localStorage.clear()
  myLeads = []
  myNotes = []
  renderLeads()
    
})

tabBtn.addEventListener("click" , function(){

  chrome.tabs.query({active: true , currentWindow: true} , function(tabs){

    myLeads.push(tabs[0].url)
    myNotes.push(noteEl.value)
    noteEl.value = ""
    localStorage.setItem("myLeads" , JSON.stringify(myLeads))
    localStorage.setItem("myNotes" , JSON.stringify(myNotes))
    renderLeads()

  })
})


function renderLeads(){
    let listItems = ""
    for(let i = 0; i < myLeads.length; i++){

    listItems += `
    <li>
     <a target="_blank" href="${myLeads[i]}">
     ${myLeads[i]}    
     </a>
        ----> ${myNotes[i]}
    </li>
    `
    }
  ulEl.innerHTML = listItems

}



