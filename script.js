const slideItems = document.querySelectorAll('.slideshow-item');
console.log(slideItems[0]);

let count = 1;
setInterval(() => {
  count++;
  const currentItems = document.querySelector('.current');
  currentItems.classList.remove('current');

  if (count > slideItems.length) {
    slideItems[0].classList.add('current');
    count = 1;
  } else {
    currentItems.nextElementSibling.classList.add('current');
  }
}, 1100);
