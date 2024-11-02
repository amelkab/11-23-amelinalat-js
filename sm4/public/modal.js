const modal = document.getElementById('myModal'); 
const openModalButton = document.getElementById('openModal'); 
const closeModalButton = modal.querySelector('.close'); 
 
// открытие модального окна 
function openModal() { 
  modal.classList.add('open'); 
} 
 
// закрытие модального окна 
function closeModal() { 
  modal.classList.remove('open'); 
} 
 
 
openModalButton.addEventListener('click', openModal); 
 
 
closeModalButton.addEventListener('click', closeModal); 
 
 
window.addEventListener('click', (event) => { 
  if (event.target === modal) { 
    closeModal(); 
  } 
});