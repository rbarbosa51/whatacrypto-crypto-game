// Variables
const getRules = document.querySelector('#rules');
const closeRules = document.querySelector('#close')
const modal = document.querySelector('#modal1');

// Functions

function displayRules () {
    modal.showModal();
    // alert ('Here are the rules:');
}

function closeModal () {
    modal.close();
}

// getRules.addEventListener('click', () => {
//     modal.showModal();
// })

// Event Listener

getRules.addEventListener('click', displayRules);

closeRules.addEventListener('click', closeModal);
