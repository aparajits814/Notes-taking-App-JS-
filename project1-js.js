console.log("TESTING");
// If user adds a note.
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addText = document.getElementById('addText');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addText.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addText.value = "";
    console.log(notesObj);
    showNotes();
})
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="my-2 mx-2 noteCard card" style="width:18rem;" >
            <div class="card-body text-success bg-primary">
                <h5 class="card-title">Note ${index + 1}</h5>
                <div class="card-text">${element}</div>
                <button type="button" onclick="deleteNote(this.id)" class="btn btn-primary" id="${index}">Delete</button>
            </div>
        </div>`;
    });
    let notesElm = document.getElementById("notes")
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = "Nothing to ADD";
    }
}
function deleteNote(index){
    console.log('deleting');
    let notes=localStorage.getItem('notes');
    if(notes==null){
        NotesObj=[];
    }else{
        NotesObj=JSON.parse(notes);
    }
    NotesObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(NotesObj));
    showNotes();
}
// let search=document.getElementById('searchTxt');
// search.addEventListener('input',function(){
//     let inputval=search.value;
// })