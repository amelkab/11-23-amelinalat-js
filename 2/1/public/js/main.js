function burger(event) {
    let burger = document.querySelector(".burger");
    burger.classList.toggle("toggle");

    const image = event.currentTarget.querySelector('img');
    
    if (burger.classList.contains('toggle')) {
        image.src = "./public/image/57ce60e2999b4f76b2ca049f0bcfadbd.png";
      } else {
        image.src = "./public/image/Hamburger_icon.svg.png";
      }

    document.querySelector(".nav").classList.toggle("open");
}


function openModal() {
    document.querySelector(".modal-window").classList.add("open");
}

function closeModal() {
    document.querySelector(".modal-window").classList.remove("open");
}

function removeFREDUROV() {
    document.querySelector(".profile").classList.add("close");
    document.querySelector(".modal-window").classList.remove("open");
}