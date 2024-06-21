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


// ==== AFFICHER LE CONTENU DU MENU AU CLIC =====

document.addEventListener('DOMContentLoaded', function () {
    const toggleIcons = document.querySelectorAll('.toggle-icon');

    toggleIcons.forEach(icon => {
        icon.addEventListener('click', function (event) {
            event.preventDefault();

            const targetClass = this.getAttribute('data-target');
            const content = document.querySelector(`.${targetClass}-content`);
            const isIntroduction = targetClass === 'introduction';

            // Bascule l'affichage de l'élément suivant et change l'icône en conséquence
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                this.innerHTML = '<ion-icon name="caret-down-outline"></ion-icon>';
            } else {
                content.style.display = 'none';
                this.innerHTML = '<ion-icon name="caret-forward-outline"></ion-icon>';
            }

            // Si on clique sur l'introduction, bascule tout le contenu associé
            if (isIntroduction) {
                const submenus = document.querySelectorAll('.Menucontent.interface-content, .Menucontent.fichiers-content');
                const subIcons = document.querySelectorAll('.interface .toggle-icon ion-icon, .fichiers .toggle-icon ion-icon');
                
                submenus.forEach(submenu => {
                    submenu.style.display = 'none';
                });
                subIcons.forEach(subIcon => {
                    subIcon.setAttribute('name', 'caret-forward-outline');
                });
            }
        });
    });
});




