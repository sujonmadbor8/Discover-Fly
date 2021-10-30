document.getElementById("economy-increase").addEventListener('click', function() {
    handleTicketChange('economy', true);
})
document.getElementById("economy-decrease").addEventListener('click', function() {
    handleTicketChange('economy', false);
})
document.getElementById("first-increase").addEventListener('click', function() {
    handleTicketChange('first', true);
})
document.getElementById("first-decrease").addEventListener('click', function() {
    handleTicketChange('first', false);
})

function handleTicketChange(id, ticket) {
    const ticketCount = getInputValue(id)
    let newTicketCount = ticketCount;
    if (ticket == true) {
        newTicketCount = ticketCount + 1;
    } else if (ticket == false && ticketCount > 0) {
        newTicketCount = ticketCount - 1;
    }
    document.getElementById(id + "-count").value = newTicketCount;
    calculateTotalPrice();
}

function calculateTotalPrice() {
    const firstCount = getInputValue('first');
    const economyCount = getInputValue('economy');

    const totalPrice = firstCount * 150 + economyCount * 100;
    document.getElementById('sub-total').innerText = totalPrice;

    const taxAmount = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = taxAmount;

    const grandTotalPrice = totalPrice + taxAmount;
    document.getElementById('grand-total').innerText = grandTotalPrice;
    document.getElementById('first-counts').innerText = firstCount;
    document.getElementById('economy-counts').innerText = economyCount;
    document.getElementById('grand-totals').innerText = grandTotalPrice;
}

function getInputValue(id) {
    const ticketInput = document.getElementById(id + "-count");
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;

}

// popup message
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function() {
    myInput.focus()
})