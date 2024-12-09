document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("slider");
    const slides = document.querySelectorAll(".slider-card");
    const bottom = document.getElementById("bottom");

    let currentSlideIndex = 0;
    const paginationCircles = [];
    let sliderWidth = slider.clientWidth;

    function createPaginationCircle() {
        const div = document.createElement("div");
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
        paginationCircles.forEach((circle, index) => {
            circle.addEventListener("click", () => changeSlide(index));
        });
    }

    function addActiveClass() {
        paginationCircles[currentSlideIndex].classList.add("active");
    }

    function removeActiveClass() {
        paginationCircles[currentSlideIndex].classList.remove("active");
    }

    function showSlide() {
        slider.style.transform = `translateX(-${currentSlideIndex * sliderWidth}px)`;
    }

    function changeSlide(slideIndex) {
        removeActiveClass();
        currentSlideIndex = slideIndex;
        addActiveClass();
        showSlide();
    }

    function nextSlide() {
        let newSlideIndex = currentSlideIndex + 1;
        if(newSlideIndex > slides.length - 1) {
            newSlideIndex = 0;
        }
        changeSlide(newSlideIndex);
    }

    function previousSlide() {
        let newSlideIndex = currentSlideIndex - 1;
        if(newSlideIndex < 0) {
            newSlideIndex = slides.length - 1;
        }
        changeSlide(newSlideIndex);
    }

    addPagination();
});
