let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', addNote);
function addNote() {
    let t= document.getElementById('addText').value;
    let notes = document.getElementById('notes');
    var count = 1;
    notes.innerHTML = `
    <div class="my-2 mx-2 noteCard card" style="width:18rem;" >
            <div class="card-body text-success">
                <h5 class="card-title">Note ${count}</h5>
                <div class="card-text">${t}</div>
                <button type="button" onclick="deleteNote()" class="btn btn-primary" id="">Delete</button>
            </div>
        </div>`;
    t.value = "";
    count = count + 1;
}
function deleteNote() {
    console.log('x');
}