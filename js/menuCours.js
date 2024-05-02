// ==== MENU DEROULANT POUR LES COURS =====

const dropdownBtns = document.querySelectorAll('.dropdown-btn');
const mainCours = document.querySelector('.coursContent');

function afficherContenu(titre, contenu, image) {

    const htmlContenu = `<h2>${titre}</h2> <p>${contenu}</p> <img src="${image}" alt="Image">`;
    mainCours.innerHTML = htmlContenu;
}

dropdownBtns.forEach(btn => {
    btn.addEventListener('click', function (event) {
        
        event.preventDefault();
        
        dropdownBtns.forEach(li => {
            li.classList.remove('active');
        });
        this.classList.add('active');

        const titre = btn.dataset.title;
        const contenu = btn.dataset.content;
        const image = btn.dataset.image;
        
        afficherContenu(titre, contenu, image);
    });
});