// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       //is intersecting with viewport
//       entry.target.classList.add("show");
//     } else {
//       entry.target.classList.remove("show");
//     }
//   });
// });

// const hiddenElements = document.querySelectorAll(".hidden");
// hiddenElements.forEach((el) => {
//   observer.observe(el);
// });

window.addEventListener("scroll", reveal);
function reveal() {
  let reveals = document.querySelectorAll(".card");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("activee");
    } else {
      reveals[i].classList.remove("activee");
    }
  }
}
window.addEventListener("scroll", reveal1);
function reveal1() {
  let reveals = document.querySelectorAll(".a");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("activee");
    } else {
      reveals[i].classList.remove("activee");
    }
  }
}
window.addEventListener("scroll", reveal);
function reveal() {
  let reveals = document.querySelectorAll(".card");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("activee");
    } else {
      reveals[i].classList.remove("activee");
    }
  }
}
window.addEventListener("scroll", reveal2);
function reveal2() {
  let reveals = document.querySelectorAll(".b");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("activee");
    } else {
      reveals[i].classList.remove("activee");
    }
  }
}
