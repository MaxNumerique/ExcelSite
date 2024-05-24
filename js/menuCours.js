import { coursContent } from "/js/coursContent.js";

// ==== MENU DEROULANT POUR LES COURS =====

const dropdownBtns = document.querySelectorAll('.dropdown-btn');
const mainCours = document.querySelector('.coursContent');
const pageTitle = document.querySelector('h1');

// ==== GENERER LES IDs DEPUIS LE NOM DES IMAGES =====

function generateIdFromImage(imageUrl) {
    if (!imageUrl) return "defaultImageId";
    const imageName = imageUrl.split('/').pop().split('.')[0];
    return `${imageName.replace(/[^a-zA-Z0-9]/g, '')}Image`;
}

// ==== AFFICHER LE CONTENU =====
function afficherContenu(id) {
    const cours = coursContent[id];
    if (cours) {
        mainCours.innerHTML = `<h2>${cours.title}</h2> ${cours.content}`;
    }
}

// ==== AFFICHER LE CONTENU AU CLIC =====

dropdownBtns.forEach(btn => {
    btn.addEventListener('click', function (event) {
        
        event.preventDefault();
        
        dropdownBtns.forEach(li => {
            li.classList.remove('active');
        });
        this.classList.add('active');

        // const titre = btn.dataset.title;
        // const contenu = btn.dataset.content;
        // const image = btn.dataset.image;
        const id = btn.dataset.id;

        if (pageTitle) {
            pageTitle.style.display = 'none';
        }
        
        afficherContenu(id);

        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});