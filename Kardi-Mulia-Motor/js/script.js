document.addEventListener('DOMContentLoaded', function() {
    // Memilih elemen toggle hamburger menu
    const hamburgerMenu = document.querySelector('#hamburger-menu');
  
    // Memilih elemen navbar-nav
    const navbarNav = document.querySelector('.navbar-nav');
  
    // Ketika hamburger menu diklik
    hamburgerMenu.onclick = () => {
      // Toggle class active pada navbar-nav
      navbarNav.classList.toggle('active');
  
      // Cek apakah navbar-nav memiliki class active setelah toggle
      const isNavActive = navbarNav.classList.contains('active');
  
      // Jika navbar-nav aktif, set right menjadi 0
      // Jika navbar-nav tidak aktif, set right menjadi -100%
      navbarNav.style.right = isNavActive ? '0' : '-100%';
    };
  
    // Klik di luar sidebar
    document.addEventListener('click', function(e) {
      if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
        navbarNav.style.right = '-100%';
      }
    });
  });
  