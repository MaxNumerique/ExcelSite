// ==== SCROLL EFFECT HEADER ====

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const logoHeader = document.querySelector(".logo-header img");
    const logoHeaderNoir = document.querySelector(".logo-headerNoir");
    const logoHeaderBlanc = document.querySelector(".logo-headerBlanc");
    const links = document.querySelectorAll(".links");
    const scrollPosition = window.scrollY;
    const headerHeight = 350;
    const logoHeight = 120 - (scrollPosition / headerHeight) * 30;
    const logoWidth = 120 - (scrollPosition / headerHeight) * 30;
    logoHeader.style.height = `${logoHeight}px`;
    logoHeader.style.width = `${logoWidth}px`;

    links.forEach((link) => {
        link.style.color = window.scrollY > 250 ? "white" : "black";
    });

    if (window.scrollY + 10 >= 250) {
        header.classList.add("scrolled");
        logoHeader.style.transition = "all 0.3s ease-in-out";
        logoHeader.style.width = "20px";
        logoHeader.style.height = "auto";
        logoHeaderNoir.style.display = "none";
        logoHeaderBlanc.style.display = "block";
        header.style.height = "8vh";
    } else {
        header.classList.remove("scrolled");
        logoHeader.style.transition = "all 0.2s ease-in-out";
        logoHeader.style.height = "auto";
        logoHeaderNoir.style.display = "block";
        logoHeaderBlanc.style.display = "none";
        header.style.height = "10vh";
    }
});

// ==== NAVIGATION PAGES INNER.HTML ====

window.addEventListener("DOMContentLoaded", function () {
    const navigation = document.getElementById("navigationPages");
    const currentPage = document.title;

    const previousPage = document.referrer.split("/").pop().split(".")[0];

    let navigationChemin = "";

    if (currentPage === "Formation Excel") {
        navigationChemin += `${currentPage}`;
    } else {
        if (previousPage) {
            navigationChemin += ` <a href="${previousPage}.html">${previousPage}</a> > `;
        }
        navigationChemin += `${currentPage}`;
    }

    navigation.innerHTML = navigationChemin;

    const previousPageLink = navigation.querySelector("a");
    if (previousPage && currentPage !== "accueil") {
        previousPageLink.addEventListener("click", function (event) {
            event.preventDefault();
            window.history.back();
        });
    }
});

// ==== BUTTON DELAY =====

const delayedLinks = document.querySelectorAll('a[href$=".html"]');

delayedLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const url = link.getAttribute("href");

        setTimeout(() => {
            window.location.href = url;
        }, 500);
    });
});

// ==== CAROUSEL ACCUEIL =====

const carouselItems = document.querySelectorAll(".carouselExo");
let currentSlide = 0;

function showSlide(index) {
    carouselItems.forEach((item, i) => {
        if (i === index) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % carouselItems.length;
    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide =
        (currentSlide - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentSlide);
}

window.addEventListener("DOMContentLoaded", () => {
    showSlide(0);
});

document.querySelector(".prev-btn").addEventListener("click", previousSlide);
document.querySelector(".next-btn").addEventListener("click", nextSlide);


// ==== MENU DEROULANT POUR LES COURS =====

// Sélection des liens de la liste déroulante
const dropdownBtns = document.querySelectorAll('.dropdown-btn');

// Sélection de la section MainCours
const mainCours = document.querySelector('.MainCours');

// Fonction pour afficher le contenu en fonction du lien sélectionné
function afficherContenu(titre, contenu, image) {
    // Génération du HTML pour le contenu
    const htmlContenu = `<h2>${titre}</h2> <p>${contenu}</p> <img src="${image}" alt="Image">`;

    // Affichage du contenu dans la section MainCours
    mainCours.innerHTML = htmlContenu;
}

// Boucle sur chaque lien de la liste déroulante pour ajouter un écouteur d'événement
dropdownBtns.forEach(btn => {
    btn.addEventListener('click', function (event) {
        // Empêcher le comportement par défaut du lien
        event.preventDefault();
 
        // Récupération des données du lien
        const titre = btn.dataset.title;
        const contenu = btn.dataset.content;
        const image = btn.dataset.image;

        // Afficher le contenu dans la section MainCours
        afficherContenu(titre, contenu, image);
    });
});
