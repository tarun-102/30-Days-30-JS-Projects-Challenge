const openbtn = document.getElementById('openBtn');

openbtn.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%'
    overlay.style.height = '100%'
    overlay.style.background = "rgba(0, 0, 0, 0.6)";
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center'
    overlay.style.justifyContent = 'center';
    overlay.id = 'modaloverlay'
     
    const modal = document.createElement('div');
    modal.style.background = '#fff'
    modal.style.padding = "20px";
    modal.style.borderRadius = '8px';
    modal.style.boxShadow = '0 0 10px #000'
    modal.innerHTML = '<p>This is a js generated modal</p> <button id="closebtn"> Close</button> '
    overlay.appendChild(modal);
    document.body.appendChild(overlay);


    document.getElementById('closebtn').addEventListener('click', () => {
        overlay.remove();
    })

    overlay.addEventListener('click', (e) => {
        if(e.target ===overlay){
            overlay.remove();
        }
    })

        document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") overlay.remove();
    }, { once: true });
  

})