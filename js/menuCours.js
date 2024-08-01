import { coursContent } from "/js/coursContent.js";

// ==== MENU DEROULANT POUR LES COURS =====

const dropdownBtns = document.querySelectorAll('.dropdown-btn');
const mainCours = document.querySelector('.coursContent');
const pageTitle = document.querySelector('h1');

// ==== AFFICHER LE CONTENU =====

export function afficherContenu(id) {
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
        if (this.classList.contains('saisie-subtheme')) {
            afficherContenu('saisie-simple'); 
        }
        if (this.classList.contains('addition-subtheme')) {
            afficherContenu('additionner'); 
        }
        if (this.classList.contains('manipuler-nombres-subtheme')) {
            afficherContenu('manipuler-nombre'); 
        }
        if (this.classList.contains('moyenne-subtheme')) {
            afficherContenu('calculer_moyenne'); 
        }
        if (this.classList.contains('valeurs-extremes-subtheme')) {
            afficherContenu('trouver_valeurs_extremes'); 
        }
        if (this.classList.contains('traiter-dates-subtheme')) {
            afficherContenu('traiter_dates'); 
        }
        if (this.classList.contains('compter-subtheme')) {
            afficherContenu('compter_cellules'); 
        }
        if (this.classList.contains('positions-subtheme')) {
            afficherContenu('utiliser-logique-position'); 
        }
        if (this.classList.contains('traiter-texte-subtheme')) {
            afficherContenu('traiter-texte'); 
        }
        if (this.classList.contains('recherche-valeur-subtheme')) {
            afficherContenu('recherche-valeur'); 
        }
        if (this.classList.contains('operateurs-logiques-subtheme')) {
            afficherContenu('utiliser-operateurs-logiques'); 
        }
        if (this.classList.contains('tcd-subtheme')) {
            afficherContenu('tableau-croise-dynamique'); 
        } 
        if (this.classList.contains('graph-subtheme')) {
            afficherContenu('graphiques'); 
        } 
        if (this.classList.contains('analyse-subtheme')) {
            afficherContenu('outils-analyse'); 
        }
        if (this.classList.contains('liens-subtheme')) {
            afficherContenu('lier-feuilles'); 
        }
        if (this.classList.contains('cellules-subtheme')) {
            afficherContenu('nommer-cellules'); 
        }
        else {
            afficherContenu(id); 
        }
        const targetElement = document.getElementById(id);
        if (targetElement) {
            const headerOffset = 100;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
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

            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                this.innerHTML = '<ion-icon name="caret-down-outline"></ion-icon>';
            } else {
                content.style.display = 'none';
                this.innerHTML = '<ion-icon name="caret-forward-outline"></ion-icon>';
            }

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

// COMPORTEMENT DE LA TAILLE DU MENU EN FONCTION DU SCROLL

window.addEventListener('scroll', function() {
    const navCours = document.querySelector('.NavCours');
    const footer = document.querySelector('footer');
    const footerTop = footer.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition >= footerTop) {
        navCours.style.height = 'calc(100vh - 10vh - ' + (scrollPosition - footerTop) + 'px)';
    } else {
        navCours.style.height = 'calc(100vh - 10vh)';
    }
});


// COPIER-COLLER DU TEXTE DE LA PAGE COURS


