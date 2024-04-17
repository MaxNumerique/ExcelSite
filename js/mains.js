
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var logoHeader = document.querySelector('.logo-header img');
    
    if (window.scrollY > 450) {
        header.classList.add('scrolled');
        logoHeader.style.transition = 'all 0.2s ease-in-out';
        logoHeader.style.width = '90px';
        logoHeader.style.height = 'auto';
        
        header.style.height = '8vh';
    } else {
        header.classList.remove('scrolled');
        logoHeader.style.transition = 'all 0.2s ease-in-out';
        logoHeader.style.width = '120px';
        logoHeader.style.height = 'auto';
        
        header.style.height = '10vh';
    }
});


