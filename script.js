const buttonOpenModal = document.querySelector('#add-transaction');
const buttonCloseModal = document.querySelector('#button-cancel');
const modal = document.querySelector('#container-modal');

function openModal() {
    modal.style.visibility = 'visible';
}


function closeModal() {
    modal.style.visibility = 'hidden';
}

buttonOpenModal.addEventListener('click', openModal);
buttonCloseModal.addEventListener('click', closeModal);