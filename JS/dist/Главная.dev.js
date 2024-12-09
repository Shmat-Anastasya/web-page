"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var slider = document.getElementById("slider");
  var slides = document.querySelectorAll(".slider-card");
  var bottom = document.getElementById("bottom");
  var currentSlideIndex = 0;
  var paginationCircles = [];
  var sliderWidth = slider.clientWidth;

  function createPaginationCircle() {
    var div = document.createElement("div");
    div.className = "pagination-circle";
    bottom.appendChild(div);
    paginationCircles.push(div);
  }

  function addPagination() {
    // Очистка контейнера перед добавлением новых кружочков
    bottom.innerHTML = '';
    paginationCircles.length = 0;
    slides.forEach(createPaginationCircle);
    paginationCircles[0].classList.add("active");
    paginationCircles.forEach(function (circle, index) {
      circle.addEventListener("click", function () {
        return changeSlide(index);
      });
    });
  }

  function addActiveClass() {
    paginationCircles[currentSlideIndex].classList.add("active");
  }

  function removeActiveClass() {
    paginationCircles[currentSlideIndex].classList.remove("active");
  }

  function showSlide() {
    slider.style.transform = "translateX(-".concat(currentSlideIndex * sliderWidth, "px)");
  }

  function changeSlide(slideIndex) {
    removeActiveClass();
    currentSlideIndex = slideIndex;
    addActiveClass();
    showSlide();
  }

  function nextSlide() {
    var newSlideIndex = currentSlideIndex + 1;

    if (newSlideIndex > slides.length - 1) {
      newSlideIndex = 0;
    }

    changeSlide(newSlideIndex);
  }

  function previousSlide() {
    var newSlideIndex = currentSlideIndex - 1;

    if (newSlideIndex < 0) {
      newSlideIndex = slides.length - 1;
    }

    changeSlide(newSlideIndex);
  }

  addPagination();
});