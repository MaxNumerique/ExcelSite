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
    const currentPageTitle = document.title;

    // Récupérer la page actuelle sans l'extension .html
    const currentPagePath = window.location.pathname.replace(/\.html$/, '').split("/").pop();

    // Récupérer la page précédente enregistrée dans le localStorage
    const previousPage = localStorage.getItem("previousPage") || "index";

    function capitalizeWords(str) {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }

    let navigationChemin = "";

    if (currentPageTitle === "Formation Excel") {
        navigationChemin += `Accueil`;
    } else {
        if (previousPage) {
            const previousPageFormatted = previousPage === "index" ? "Accueil" : capitalizeWords(previousPage.replace(/-/g, ' '));
            const previousPageLink = previousPage === "index" ? "/" : `/${previousPage}`;
            navigationChemin += ` <a href="${previousPageLink}">${previousPageFormatted}</a> > `;
        }
        navigationChemin += `${capitalizeWords(currentPagePath.replace(/-/g, ' '))}`;
    }

    navigation.innerHTML = navigationChemin;

    const previousPageLink = navigation.querySelector("a");
    if (previousPage && currentPagePath !== "index" && previousPageLink) {
        previousPageLink.addEventListener("click", function (event) {
            event.preventDefault();
            window.history.back();
        });
    }

    // Enregistrer la page actuelle comme la page précédente pour la prochaine navigation
    localStorage.setItem("previousPage", currentPagePath);
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


