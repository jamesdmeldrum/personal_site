window.addEventListener('scroll', function() {
  const header = document.querySelector('.fade-in-header');
  const pageHeight = window.innerHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop >= pageHeight) {
    header.classList.add('fade-in-header--visible');
  } else {
    header.classList.remove('fade-in-header--visible');
  }
});