const buttonOpenModal = document.querySelector('#add-transaction');
const buttonCloseModal = document.querySelector('#button-cancel');

function openAndCloseModal() {
    let modal = document.querySelector('#container-modal');
    modal.classList.toggle('visible');
}

buttonOpenModal.addEventListener('click', openAndCloseModal);
buttonCloseModal.addEventListener('click', openAndCloseModal);

//pegar entradas do usuario
//exibir dados na tela
// atualixar caixas com as informações de entrada
//calcular dados pegos

const description = document.querySelector('#description');
const value = document.querySelector('#value');
const date = document.querySelector('#date');

// Converting string to number
function convertToNumber(string) {
    return Number(string);
}

// Converting string to array to change format date
function convertDate(date) {
    let arrayDate = date.split('-');
    return `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`;
}

// Function to create HTML with inputs of user. 
function displayDatainHTML() {
    let tagTable = document.querySelector('table tbody');
    let tagTr = document.createElement('tr');

    //Mounting HTML structure
    tagTr.innerHTML = `
    <td>${description.value}</td>
    <td class="input">R$ ${value.value}</td>
    <td>${convertDate(date.value)}</td>
    <td><img src="./images/plus.svg" alt="Imagem icone adição"></td>`;
    tagTable.appendChild(tagTr);

    // Clear fields
    description.value = '';
    value.value = '';
    date.value = '';
}

// changing submit button behavior (to no reload page and add HTML)
const buttonAdd = document.querySelector('#button-add');
buttonAdd.addEventListener('click', (event) => {
    event.preventDefault();
});

buttonAdd.addEventListener('click', displayDatainHTML);
buttonAdd.addEventListener('click', openAndCloseModal);

// Proximo passo fazer calculo
const array = [];
