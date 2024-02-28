class Telephone {
  constructor() {
    this.phoneNumbers = [];
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObserver(number) {
    this.observers.forEach((observer) => observer.update(number));
  }

  addPhoneNumber(number) {
    this.phoneNumbers.push(number);
  }

  removePhoneNumber(number) {
    const index = this.phoneNumbers.indexOf(number);
    if (index !== -1) {
      this.phoneNumbers.splice(index, 1);
    }
  }

  dialPhoneNumber(number) {
    if (this.phoneNumbers.includes(number)) {
      this.notifyObservers(number);
    } else {
      console.log("Phone number not found.");
    }
  }
}

class Observer {
  update(number) {
    console.log(`Phone number dialed: ${number}`);
  }
}

class SpecialObserver {
  update(number) {
    console.log(`Now Dialling ${number}`);
  }
}

const telephone = new Telephone();
const observer1 = new Observer();
const observer2 = new SpecialObserver();

telephone.addObserver(observer1);
telephone.addObserver(observer2);
