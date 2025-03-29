// Handle the 'Place Bet' button click for Live Betting
const placeBetButton = document.querySelector('.live-betting button');
placeBetButton.addEventListener('click', function() {
    const betAmount = document.querySelector('.live-bting input').value;
    if (betAmount > 0) {
        alert(`You have placed a bet of $${betAmount}!`);
    } else {
        alert("Please enter a valid bet amount.");
    }
});

// Handle the 'Deposit' and 'Withdraw' buttons for Payment System
const depositButton = document.querySelector('.payment button:nth-child(1)');
const withdrawButton = document.querySelector('.payment button:nth-child(2)');

depositButton.addEventListener('click', function() {
    alert("Deposit functionality will be implemented.");
});

withdrawButton.addEventListener('click', function() {
    alert("Withdraw functionality will be implemented.");
});
