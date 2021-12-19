const buttonOpenModal = document.querySelector('#add-transaction');
const buttonCloseModal = document.querySelector('#button-cancel');

function openAndCloseModal() {
    let modal = document.querySelector('#container-modal');
    modal.classList.toggle('visible');
}

buttonOpenModal.addEventListener('click', openAndCloseModal);
buttonCloseModal.addEventListener('click', openAndCloseModal);

const description = document.querySelector('#description');
const value = document.querySelector('#value');
const date = document.querySelector('#date');
const inputsOfUser = [];

//Cleaning the number before calculate
function convertToNumber(num) {
    return num.replace('-', '');
}

const numClean = convertToNumber(value.value);
console.log(numClean);

// Converting string to array to change format date
function formatDate(date) {
    let arrayDate = date.split('-');
    return `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`;
}
const dateFormated = formatDate(date.value);

// Function to create HTML with inputs of user. 
function displayDatainHTML() {
    let tagTable = document.querySelector('table tbody');
    let tagTr = document.createElement('tr');

    // Creating object with inputs user
    const object = {
        description: description.value,
        value: Number(value.value),
        date: formatDate(date.value)
    }
    //Adding object in array
    inputsOfUser.push(object);

    //Calculating inputs of user and adding result to HTML
    function calculate() {
        let valueTotal = 0;
        if (Number(value.value) > 0) {
            inputsOfUser.forEach((object) => {
            valueTotal = valueTotal += object.value;
            })
            return valueTotal;
        } else if (Number(value.value) < 0) {
            inputsOfUser.forEach((object) => {
            valueTotal = valueTotal -= object.value;
            })
            return valueTotal;
        }
    }

    const boxTotal = document.querySelector('#box-total p');

    //Separating positive values and adding result to HTML

    //Mounting HTML structure
    tagTr.innerHTML = `
        <td>${description.value}</td>
        <td class="input">R$ ${value.value}</td>
        <td>${formatDate(date.value)}</td>
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

console.log(inputsOfUser); 
