// ==== MENU DEROULANT POUR LES COURS =====

const dropdownBtns = document.querySelectorAll('.dropdown-btn');
const mainCours = document.querySelector('.coursContent');

// ==== GENERER LES IDs DEPUIS LE NOM DES IMAGES =====

function generateIdFromImage(imageUrl) {
    if (!imageUrl) return "defaultImageId";
    const imageName = imageUrl.split('/').pop().split('.')[0];
    return `${imageName.replace(/[^a-zA-Z0-9]/g, '')}Image`;
}

// ==== AFFICHER LE CONTENU =====
function afficherContenu(titre, contenu, image) {
    const imageId = generateIdFromImage(image);
    const htmlContenu = `<h2>${titre}</h2> <img src="${image}" alt="Image" id="${imageId}">  <p>${contenu}</p>`;
    mainCours.innerHTML = htmlContenu;
}

// ==== AFFICHER LE CONTENU AU CLIC =====

dropdownBtns.forEach(btn => {
    btn.addEventListener('click', function (event) {
        
        event.preventDefault();
        
        dropdownBtns.forEach(li => {
            li.classList.remove('active');
        });
        this.classList.add('active');

        const titre = btn.dataset.title;
        const contenu = btn.dataset.content;
        const image = btn.dataset.image;
        // const id = btn.dataset.id;
        
        afficherContenu(titre, contenu, image);
    });
});