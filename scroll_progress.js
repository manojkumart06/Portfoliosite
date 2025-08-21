let progressBar = document.getElementsByClassName("scroll-progress-bar")[0];
let scrolledBar = document.getElementById("scrolled");

function getDocHeight() {
  let D = document;
  return Math.max(
    D.body.scrollHeight,
    D.body.offsetHeight,
    D.documentElement.clientHeight,
    D.documentElement.scrollHeight,
    D.documentElement.offsetHeight
  );
}

let docHeight = getDocHeight();
let windowHeight = window.innerHeight;

window.onresize = function () {
  docHeight = getDocHeight();
  windowHeight = window.innerHeight;
};

function setScrolled() {
  let maxScroll = docHeight - windowHeight;
  let scrollY = window.scrollY;

  if (scrollY > maxScroll) scrollY = maxScroll;

  let scrolled = Math.round((scrollY / maxScroll) * 100);

  if (scrolled > 100) scrolled = 100;

  scrolledBar.innerText = scrolled;
  progressBar.style.width = scrolled + "%";
}

window.addEventListener("scroll", setScrolled);

// Initialize on page load
setScrolled();
