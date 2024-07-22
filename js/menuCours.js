import { coursContent } from "/js/coursContent.js";

// ==== MENU DEROULANT POUR LES COURS =====

const dropdownBtns = document.querySelectorAll('.dropdown-btn');
const mainCours = document.querySelector('.coursContent');
const pageTitle = document.querySelector('h1');

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
        const id = btn.dataset.id;
        if (pageTitle) {
            pageTitle.style.display = 'none';
        }
        // Vérifiez si l'élément cliqué possède la classe "saisie-subtheme"
        if (this.classList.contains('saisie-subtheme')) {
            console.log("test");
            afficherContenu('saisie-simple'); // Affichez le contenu du thème "De la saisie"
        } else {
            afficherContenu(id); // Affichez le contenu de la sous-thématique correspondante
        }
        // Défilement vers l'ancre correspondante
        const targetElement = document.getElementById(id);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0 , behavior: 'smooth' });
        }
    });
});

// ==== COMPORTEMENT DE L'AFFICHAGE DU MENU =====

document.addEventListener('DOMContentLoaded', function () {
    const toggleIcons = document.querySelectorAll('.toggle-icon');

    toggleIcons.forEach(icon => {
        icon.addEventListener('click', function (event) {
            event.preventDefault();

            const targetClass = this.getAttribute('data-target');
            const content = document.querySelector(`.${targetClass}-content`);
            const isIntroduction = targetClass === 'introduction';
            const isWantToDo = targetClass === 'WantToDo';

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
            if (isWantToDo) {
                const submenus = document.querySelectorAll('.Menucontent.saisieDonnees-content, .Menucontent.formulesPour-content, .Menucontent.analyseDonnees-content, .Menucontent.organisationDonnees-content');
                const subIcons = document.querySelectorAll('.saisieDonnees .toggle-icon ion-icon, .formulesPour .toggle-icon ion-icon, .analyseDonnees .toggle-icon ion-icon, .organisationDonnees .toggle-icon ion-icon');

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


