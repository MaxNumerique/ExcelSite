// ==== SCROLL EFFECT HEADER ====

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const logoHeader = this.document.querySelector('.logo-header img');
    const logoHeaderNoir = document.querySelector('.logo-headerNoir');
    const logoHeaderBlanc = document.querySelector('.logo-headerBlanc');

    const links = document.querySelectorAll('.links');
    
    links.forEach(link => {
        link.style.color = window.scrollY > 250 ? 'white' : 'black';
    });

    if (window.scrollY + 10 >= 250) {
        header.classList.add('scrolled');
        logoHeader.style.transition = 'all 0.3s ease-in-out';
        logoHeader.style.width = '90px';
        logoHeader.style.height = 'auto';
        logoHeaderBlanc.style.display = 'block';
        logoHeaderNoir.style.display = 'none';
        header.style.height = '8vh';
    } else {
        header.classList.remove('scrolled');
        logoHeader.style.transition = 'all 0.2s ease-in-out';
        logoHeader.style.width = '120px';
        logoHeader.style.height = 'auto';
        logoHeaderNoir.style.display = 'block';
        logoHeaderBlanc.style.display = 'none';
        header.style.height = '10vh';
    }
});


// ==== NAVIGATION PAGES INNER.HTML ====

window.addEventListener("DOMContentLoaded", function() {
    const navigation = document.getElementById('navigationPages');
    const currentPage = document.title;

    const previousPage = document.referrer.split('/').pop().split('.')[0];
    
    let navigationChemin = '';
    if (previousPage) {
        navigationChemin += ` <a href="${previousPage}.html">${previousPage}</a> > `;
    }
    navigationChemin += `${currentPage}`;

    navigation.innerHTML = navigationChemin;

    const previousPageLink = navigation.querySelector('a');
    if(previousPage) {
        previousPageLink.addEventListener('click', function(event) {
            event.preventDefault();
            window.history.back();
        });
    }
});

// ==== BUTTON DELAY =====

const delayedLinks = document.querySelectorAll('a[href$=".html"]');

delayedLinks.forEach((link) => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const url = link.getAttribute('href');

    setTimeout(() => {
      window.location.href = url;
    }, 500);
  });
});

