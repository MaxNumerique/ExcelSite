import { coursContent } from './coursContent.js';

document.addEventListener('DOMContentLoaded', function () {
    function redirectToRandomCourse(event, specificCourses, expandAll = false) {
        event.preventDefault();
        
        // Vérification que coursContent est bien chargé
        console.log("coursContent:", coursContent);

        const courses = specificCourses ? specificCourses : Object.keys(coursContent);
        const randomCourse = courses[Math.floor(Math.random() * courses.length)];
        
        console.log("Cours aléatoire sélectionné:", randomCourse);
        
        localStorage.setItem('randomCourse', randomCourse);
        localStorage.setItem('expandAll', expandAll);

        // Vérification que les données sont bien stockées
        console.log("randomCourse après stockage:", localStorage.getItem('randomCourse'));
        console.log("expandAll après stockage:", localStorage.getItem('expandAll'));

        // Ajout d'un délai pour s'assurer que les données sont stockées
        setTimeout(() => {
            window.location.href = 'cours.html';
        }, 100);
    }

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

    const coursLinks = document.querySelectorAll('a[href="cours.html"]');
    coursLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            redirectToRandomCourse(event, null, true);
        });
    });

    const buttonCoursHTML = document.getElementById('buttonCoursHTML');
    if (buttonCoursHTML) {
        buttonCoursHTML.addEventListener('click', function (event) {
            redirectToRandomCourse(event, null, true);
        });
    }

    if (window.location.pathname.includes('cours')) {
        console.log("Nous sommes sur la page cours.html");
        const mainCours = document.querySelector('.coursContent');

        const randomCourse = localStorage.getItem('randomCourse');
        console.log();
        console.log("Cours aléatoire récupéré:", randomCourse);
        const expandAll = localStorage.getItem('expandAll') === 'true';

        if (randomCourse && coursContent[randomCourse]) {
            const cours = coursContent[randomCourse];
            console.log("Cours trouvé:", cours);

            mainCours.innerHTML = `<h2>${cours.title}</h2> ${cours.content}`;
            localStorage.removeItem('randomCourse');

            const activeLink = document.querySelector(`.dropdown-btn[data-id="${randomCourse}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }

            if (expandAll) {
                const toggleIcons = document.querySelectorAll('.toggle-icon');
                toggleIcons.forEach(icon => {
                    const content = document.querySelector(`.${icon.getAttribute('data-target')}-content`);
                    if (content && content.style.display === 'none') {
                        icon.click();
                    }
                });
                localStorage.removeItem('expandAll');
            } else {
                const formulesToggleIcon = document.querySelector('.dropdown.formulesPour .toggle-icon');
                if (formulesToggleIcon) {
                    formulesToggleIcon.click();
                }
            }
        } else {
            console.log("Aucun cours trouvé ou coursContent indisponible.");
        }
    }
});
