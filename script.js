const image_slider_html = document.querySelector(".image-slider");
const images = image_slider_html.querySelectorAll("img");

const previous_btn = document.getElementById("previous");
const next_btn = document.getElementById("next");
const dot_navigation = document.querySelector(".dot-navigation");
const dots = document.querySelectorAll(".dot");

function unfade(element) {
  var op = 0.1; // initial opacity
  element.style.display = "block";
  var timer = setInterval(function () {
    if (op >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op += op * 0.1;
  }, 10);
}

function fade(element) {
  var op = 1; // initial opacity
  var timer = setInterval(function () {
    if (op <= 0.1) {
      clearInterval(timer);
      element.style.display = "none";
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op -= op * 0.1;
  }, 50);
}

next = () => {
  let active_element = document.querySelector(".active");
  let current_element = +active_element.id;
  if (current_element < 5) {
    current_element++;
  } else if (current_element === 5) {
    current_element = 1;
  }
  active_element.classList.remove("active");
  active_element = document.getElementById(String(current_element));
  console.log(active_element);
  active_element.classList.add("active");
  clearInterval(intervalID);
  intervalID = setInterval(next, 5000);
};

previous = () => {
  let active_element = document.querySelector(".active");
  let current_element = +active_element.id;
  if (current_element > 1) {
    current_element--;
  } else if (current_element === 1) {
    current_element = 5;
  }
  active_element;
  active_element.classList.remove("active");
  active_element = document.getElementById(String(current_element));
  console.log(active_element);
  active_element.classList.add("active");
  clearInterval(intervalID);
  intervalID = setInterval(next, 5000);
};
next_btn.addEventListener("click", next);
previous_btn.addEventListener("click", previous);

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    //active-dot
    document
      .querySelector(".dot-navigation")
      .querySelector(".active")
      .classList.toggle("active");
    document.querySelector(".active").classList.toggle("active");
    dot.classList.toggle("active");
    active_element = document.getElementById(String(dot.id));
    active_element.classList.toggle("active");
    clearInterval(intervalID);
    intervalID = setInterval(next, 5000);
  });
});
intervalID = setInterval(next, 5000);
