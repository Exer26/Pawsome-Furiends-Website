    // Shows when the link current link is active
    document.addEventListener('DOMContentLoaded', function() {
        const navLinks = document.querySelectorAll('.nav__link');
    
        navLinks.forEach((link) => {
          link.addEventListener('click', (event) => {
            navLinks.forEach((link) => link.classList.remove('active'));
            event.target.classList.add('active');
          });
        });
         // To display or to not display the footer whether the drop down menu is active or not
        const inpNavToggle = document.getElementById('inpNavToggle');
     
        inpNavToggle.addEventListener('change', function() {
          const footer = document.querySelector('footer');
          if (this.checked) {
            footer.style.display = 'none';
          } else {
            footer.style.display = 'flex';
          }
        });
      });