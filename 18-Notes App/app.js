const themeToggle = document.getElementById("modebtn");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "Light-mode"
    : "Dark-Mode";
});

const addBtn = document.getElementById("addNote");
addBtn.addEventListener("click", () => {
  const title = document.getElementById("title").value.trim();
  const text = document.getElementById("notesText").value.trim();
  if (!title || !text) {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0, 0, 0, 0.6)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.id = "modaloverlay";

    const modal = document.createElement("div");
    modal.style.background = "#fff";
    modal.style.padding = "20px";
    modal.style.borderRadius = "8px";
    modal.style.boxShadow = "0 0 10px #000";
    modal.innerHTML =
      '<p>Enter a both Title and notes</p> <button id="closebtn"> Close</button> ';
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    document.getElementById("closebtn").addEventListener("click", () => {
      overlay.remove();
    });

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.remove();
      }
    });

    document.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Escape") overlay.remove();
      },
      { once: true }
    );
    return;
  }
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push({title, text});
    localStorage.setItem("notes",JSON.stringify(notes));
    document.getElementById('title').value = '';
    document.getElementById('notesText').value = '';
    showNotes();
});


const showNotes = () => {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const notesEl =  document.getElementById('notes');
  notesEl.innerHTML = '';
  notes.forEach((note,index) => {
    notesEl.innerHTML += `
      <div class = "noteCard">
        <h3>${note.title}</h3>
        <p>${note.text}</p>
        <button onClick ="deleteNotes(${index})">Delete</button>
      </div>
    `;
  });
}

showNotes();


//delete notes function 

function deleteNotes(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.splice(index,1);
  localStorage.setItem('notes',JSON.stringify(notes));
  showNotes();
}

document.getElementById('search').addEventListener('input', (e) =>{
  let searchVal = e.target.value.toLowerCase();
  let noteCards = document.getElementsByClassName('noteCard');

  Array.from(noteCards).forEach((card) => {
    let content = card.innerText.toLowerCase();
    card.style.display = content.includes(searchVal) ? "block" : "none"
  })
})