import { coursContent } from './coursContent.js';

document.addEventListener('DOMContentLoaded', function () {
    // Fonction pour rediriger vers cours.html avec un cours aléatoire
    function redirectToRandomCourse(event, specificCourses, expandAll = false) {
        event.preventDefault();

        // Liste des IDs des cours
        const courses = specificCourses ? specificCourses : Object.keys(coursContent);

        // Sélectionner un cours aléatoire
        const randomCourse = courses[Math.floor(Math.random() * courses.length)];

        // Stocker le cours aléatoire dans le localStorage
        localStorage.setItem('randomCourse', randomCourse);

        // Indicateur pour dérouler tout le menu
        localStorage.setItem('expandAll', expandAll);

        // Rediriger vers cours.html
        window.location.href = 'cours.html';
    }

    // Écouteur d'événement pour le bouton formules dans index.html
    const formulesButton = document.getElementById('formules');
    if (formulesButton) {
        formulesButton.addEventListener('click', function (event) {
            const specificCourses = [
                "additionner", "manipuler-nombre", "calculer_moyenne", "compter_cellules", 
                "trouver_valeurs_extremes", "traiter_dates", "utiliser-operateurs-logiques", 
                "utiliser-logique-position", "recherche-valeur"
            ];
            redirectToRandomCourse(event, specificCourses);
        });
    }

    // Écouteurs d'événements pour les liens Cours dans le header et le footer
    const coursLinks = document.querySelectorAll('a[href="cours.html"]');
    coursLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            redirectToRandomCourse(event, null, true);
        });
    });

    // Écouteur d'événement pour le bouton dans index.html
    const buttonCoursHTML = document.getElementById('buttonCoursHTML');
    if (buttonCoursHTML) {
        buttonCoursHTML.addEventListener('click', function (event) {
            redirectToRandomCourse(event, null, true);
        });
    }

    // Vérification si on est sur cours.html pour afficher le contenu du cours
    if (window.location.pathname.includes('cours.html')) {
        const mainCours = document.querySelector('.coursContent');

        const randomCourse = localStorage.getItem('randomCourse');
        const expandAll = localStorage.getItem('expandAll') === 'true';

        if (randomCourse && coursContent[randomCourse]) {
            const cours = coursContent[randomCourse];

            mainCours.innerHTML = `<h2>${cours.title}</h2> ${cours.content}`;
            
            localStorage.removeItem('randomCourse');

            // Mettre en avant le lien correspondant
            const activeLink = document.querySelector(`.dropdown-btn[data-id="${randomCourse}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }

            // Déployer l'intégralité du menu si nécessaire
            if (expandAll) {
                const toggleIcons = document.querySelectorAll('.toggle-icon');
                toggleIcons.forEach(icon => {
                    const content = document.querySelector(`.${icon.getAttribute('data-target')}-content`);
                    if (content && content.style.display === 'none') {
                        icon.click(); // Simule le clic sur le toggle pour ouvrir le menu
                    }
                });
                localStorage.removeItem('expandAll');
            } else {
                // Déployer le menu des formules si nécessaire
                const formulesToggleIcon = document.querySelector('.dropdown.formulesPour .toggle-icon');
                if (formulesToggleIcon) {
                    formulesToggleIcon.click(); // Simule le clic sur le toggle pour ouvrir le menu
                }
            }
        }
    }
});
