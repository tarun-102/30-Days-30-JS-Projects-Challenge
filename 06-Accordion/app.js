const headers = document.querySelectorAll(".acordion-header")

headers.forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        content.classList.toggle('show');


        document.querySelectorAll('.acordion-content').forEach(othercontent => {
            if(othercontent !== content) {
                othercontent.classList.remove('show');
            }
        })

    })

})