// JavaScript pour afficher le contenu des exemples

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("exemple1").addEventListener("click", function () {
        showContent("exemple1Content");
    });
    document.getElementById("exemple2").addEventListener("click", function () {
        showContent("exemple2Content");
    });
    document.getElementById("exemple3").addEventListener("click", function () {
        showContent("exemple3Content");
    });

    function showContent(contentId) {
        // Masquer tous les contenus
        const exampleContents = document.querySelectorAll(".example-content");
        exampleContents.forEach(content => content.style.display = "none");

        // Afficher le contenu sélectionné
        document.getElementById(contentId).style.display = "block";
    }
});