document.getElementById('burger').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show'); // Переключение класса для отображения меню
});

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    const slideWidth = slides[currentSlide].clientWidth;
    const slidesContainer = document.querySelector('.slides');

    slidesContainer.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}



function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Автоматическое переключение слайдов каждые 5 секунд
setInterval(() => changeSlide(1), 5000);

// Показать первый слайд при загрузке
showSlide(currentSlide);


document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(question => {
        question.addEventListener("click", function() {
            const answer = this.nextElementSibling;

            // Закрываем все остальные ответы
            document.querySelectorAll(".faq-answer").forEach(item => {
                if (item !== answer) {
                    item.style.display = "none";
                }
            });

            // Переключаем текущий ответ
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const phoneButton = document.getElementById("phoneButton");
    const phoneModal = document.getElementById("phoneModal");
    const closeButton = document.getElementById("closeButton");

    // Открытие модального окна
    phoneButton.addEventListener("click", function() {
        phoneModal.style.display = "block";
    });

    // Закрытие модального окна
    closeButton.addEventListener("click", function() {
        phoneModal.style.display = "none";
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener("click", function(event) {
        if (event.target === phoneModal) {
            phoneModal.style.display = "none";
        }
    });
});
