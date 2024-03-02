import { Telephone, Observer, SpecialObserver } from "./main.js";
const telephone = new Telephone();
const addObserver = document.getElementById("addObserver");

addObserver.addEventListener("click", function () {
  const observerInput = document.getElementById("observerInput");
  const observer = observerInput.value;
  if (observer !== "") {
    telephone.addObserver(observer);
    displayObservers(telephone);
    observerInput.value = "";
  } else {
    alert("Please Enter a valid name");
  }
});

function displayPhoneNumbers(telephone) {
  const phoneNumbersTable = document.getElementById("phoneNumbersTable");
  const phoneNumbers = telephone.phoneNumbers;
  phoneNumbersTable.innerHTML = "";
  phoneNumbers.forEach((number) => {
    const row = phoneNumbersTable.insertRow();
    const cell = row.insertCell();
    cell.appendChild(document.createTextNode(number));

    // Create a button element for dialing
    const dialButton = document.createElement("button");
    dialButton.textContent = "Dial";

    // Add an event listener to the dial button to dial the phone number
    dialButton.addEventListener("click", function () {
      if (number !== "") {
        dialPhoneNumber(telephone, number);
      } else {
        alert("Please enter a phone number to dial.");
      }
    });

    // Append the dial button to the cell
    cell.appendChild(dialButton);

    // Create a button element for deleting the phone number
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    // Add an event listener to the delete button to remove the phone number
    deleteButton.addEventListener("click", function () {
      removePhoneNumber(telephone, number);
      displayPhoneNumbers(telephone); // Update the displayed phone numbers after deletion
    });

    // Append the delete button to the cell
    cell.appendChild(deleteButton);
  });
}

// Function to remove a phone number
function removePhoneNumber(telephone, number) {
  telephone.removePhoneNumber(number);
}

function displayObservers(telephone) {
  const observersTable = document.getElementById("observersTable");
  const observers = telephone.observers;
  observersTable.innerHTML = "";
  observers.forEach((observer) => {
    const row = observersTable.insertRow();
    const cell = row.insertCell();
    cell.appendChild(document.createTextNode(observer));
  });
}

function dialPhoneNumber(telephone, number) {
  if (telephone.phoneNumbers.includes(number)) {
    // Instead of logging to the console, show an alert
    alert(`Dialing ${number}`);
    telephone.notifyObserver(number);
  } else {
    alert("Phone number not found.");
  }
}

const addPhoneNumber = document.getElementById("addPhoneNumber");

addPhoneNumber.addEventListener("click", function () {
  const phoneNumberInput = document.getElementById("phoneNumberInput");
  const phoneNumber = phoneNumberInput.value.trim();
  if (phoneNumber !== "") {
    telephone.addPhoneNumber(phoneNumber);
    displayPhoneNumbers(telephone);
    phoneNumberInput.value = "";
  } else {
    alert("Please enter a valid phone number.");
  }
});
