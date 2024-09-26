const userPIN = "1234";
const creditCardPIN = "1234";
const debitCardPIN = "1234";

function showUserDetails() {
  const pin = prompt("Enter 4-digit PIN to view User Details");
  if (pin === userPIN) {
    document.getElementById("details").innerHTML = `
            <h2>User Details</h2>
            <p>Name: Lickhitha</p>
            <p>Email: lily@example.com</p> 
            <p>Phone: 0987654321</p>
        `;
    document.getElementById("details").style.display = "block";
  } else {
    alert("Incorrect PIN!");
  }
}

function showCreditCardDetails() {
  const pin = prompt("Enter 4-digit PIN to view Credit Card Details");
  if (pin === creditCardPIN) {
    document.getElementById("details").innerHTML = `
            <h2>Credit Card Details</h2>
            <p>Card Number: 1234-4321-1234-4321</p>
            <p>Expiry Date: 11/25</p>
            <p>Holder Name: Lickhitha</p>
            <button onclick="checkBalance()">Check Balance</button>
            <button onclick="addPIN()">Add PIN</button>
        `;
    document.getElementById("details").style.display = "block";
  } else {
    alert("Incorrect PIN!");
  }
}

function checkBalance() {
  alert("Your balance is $5,000");
}

function addPIN() {
  const newPIN = prompt("Enter new 4-digit PIN");
  if (newPIN && newPIN.length === 4 && !isNaN(newPIN)) {
    alert("PIN updated successfully!");
  } else {
    alert("Invalid PIN. Please enter a valid 4-digit number.");
  }
}

function showDebitCardDetails() {
  const pin = prompt("Enter 4-digit PIN to view Debit Card Details");
  if (pin === debitCardPIN) {
    document.getElementById("details").innerHTML = `
            <h2>Debit Card Details</h2>
            <p>Card Number: 1234-4321-1234-4321</p>
            <p>Expiry Date: 11/27</p>
            <p>Holder Name: Lickhitha</p>
            <button onclick="checkBalance()">Check Balance</button>
            <button onclick="addPIN()">Add PIN</button>
        `;
    document.getElementById("details").style.display = "block";
  } else {
    alert("Incorrect PIN!");
  }
}
function goHome() {
  document.getElementById("details").style.display = "none";
  document.getElementById("details").innerHTML = "";
}
