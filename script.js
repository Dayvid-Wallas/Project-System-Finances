//Creating functionality open e close modal
const modal = document.querySelector('#container-modal');
const buttonOpenModal = document.querySelector('#add-transaction');
const buttonCloseModal = document.querySelector('#button-cancel');

function openAndCloseModal() {
    modal.classList.toggle('visibility');
}

buttonOpenModal.addEventListener('click', openAndCloseModal);
buttonCloseModal.addEventListener('click', openAndCloseModal);

//Changing the default behavior of the submit form button
const buttonAdd = document.querySelector('form');

buttonAdd.addEventListener('submit', (event) => {
    event.preventDefault();
    try {
        form.validateFields();
        form.formatValues();
        form.formatData();        
    } catch (error) {
        alert(error.message);
    }
})

const transaction = {
    all: [
        {
            description: 'Desenvolvimento de site',
            value: 500001,
            date: '19/12/2021'
        },
        {
            description: 'Hamburguer',
            value: -12000,
            date: '19/12/2021'
        },
        {
            description: 'Aluguel Apartamento',
            value: 120000,
            date: '19/12/2021'
        }
    ],

    add(object) {
        transaction.all.push(object);
        app.reload();
    },

    remove(index) {
        transaction.all.splice(index, 1);
        app.reload();
    },

    inputs() {
        let input = 0;
        transaction.all.forEach((transaction) => {
            if(transaction.value > 0) {
                input += transaction.value;
            }
        })
        return input;
    },

    outputs() {
        let output = 0;
        transaction.all.forEach((transaction) => {
            if(transaction.value < 0) {
                output += transaction.value;
            }
        })
        return output;
    },

    total() {
        return transaction.inputs() + transaction.outputs();
    }
}

const DOM = {
    transactionsContainer: document.querySelector('table tbody'),

    addTransaction(transaction, index) {
        const tagTr = document.createElement('tr');
        tagTr.innerHTML = DOM.innerHTMLTransaction(transaction);
        DOM.transactionsContainer.appendChild(tagTr);
    },

    innerHTMLTransaction(transaction) {
        const classCSS = transaction.value > 0 ? 'input' : 'output';

        const value = utils.formatCurrency(transaction.value);

        const html = `
        <td>${transaction.description}</td>
        <td class="${classCSS}">${value}</td>
        <td>${transaction.date}</td>
        <td><img src="./images/minus.svg" alt="Imagem icone subtração"></td>
        `
        return html;
    },

    updateBalance() {
        const boxInput = document.querySelector('#box-input p');
        boxInput.innerHTML = utils.formatCurrency(transaction.inputs());

        const boxOutput = document.querySelector('#box-output p');
        boxOutput.innerHTML = utils.formatCurrency(transaction.outputs());

        const boxTotal = document.querySelector('#box-total p');
        boxTotal.innerHTML = utils.formatCurrency(transaction.total());
    },

    clearTransactions() {
        DOM.transactionsContainer.innerHTML = '';
    }
}

const utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? '-' : '';
        value = String(value).replace(/\D/g, '');
        value = Number(value) / 100;
        value = value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
        return signal + value;
    },

    formatValues(stringNum) {
        stringNum = Number(stringNum) * 100;
        return stringNum;
    },

    formatDate(date) {
        let splitDate = date.split('-')
        splitDate = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
        return splitDate;
    }
}

const form = {
    description: document.querySelector('#description'),
    value: document.querySelector('#value'),
    date: document.querySelector('#date'),

    getValues() {
        return {
            description: form.description.value,
            value: form.value.value,
            date: form.date.value
        }
    },

    validateFields() {
        const {description, value, date} = form.getValues();
        if(description.trim() === '' || value.trim() === '' || date.trim() === '') {
            throw new Error('Por favor, preencha todos os campos');
        }
    },

    formatValues() {
        let {description, value, date} = form.getValues();
        value = utils.formatValues(value);
        date = utils.formatDate(date);
        console.log(date)
    },

    formatData() {
        console.log('formatar dados')
    },
}

const app = {
    init() {
        transaction.all.forEach((transaction) => {
            DOM.addTransaction(transaction)
        });
        
        DOM.updateBalance();
    },

    reload() {
        DOM.clearTransactions();
        app.init();
    }
}

app.init();
