// JavaScript pour afficher le contenu des exemples

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".NavCours a");
    const title = document.querySelector(".coursTittle");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            showContent(this.id + "Content");

            title.style.display = "none";

            navLinks.forEach(link => link.classList.remove("active"));

            this.classList.add("active");
        });
    });

    function showContent(contentId) {
        const exampleContents = document.querySelectorAll(".exemple");
        exampleContents.forEach(content => content.style.display = "none");

        document.getElementById(contentId).style.display = "block";
    }
});
