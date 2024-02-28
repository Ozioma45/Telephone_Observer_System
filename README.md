# Telephone Package

This project is part of the Learnable Internship Program by GenesysTechHub (https://learnable.genesystechhub.com/), aimed at implementing and understanding design patterns, specifically the Observer Pattern.

## Overview

The Telephone Package is a JavaScript implementation of a telephone system with features like adding phone numbers, removing phone numbers, and dialing phone numbers. It also utilizes the Observer Pattern to notify observers whenever a phone number is dialed. This project serves as a practical exercise to learn and implement design patterns in real-world scenarios.

## Features

- **AddPhoneNumber**: Add a new phone number to the telephone system.
- **RemovePhoneNumber**: Remove an existing phone number from the telephone system.
- **DialPhoneNumber**: Dial a phone number from the existing list of phone numbers. Only phone numbers that have been added can be dialed.
- **Observer Pattern**: Utilizes the Observer Pattern to notify observers whenever a phone number is dialed.
  - Two types of observers are included:
    1. The first observer prints the dialed phone number.
    2. The second observer prints a special message along with the dialed phone number.

## Usage

To use this package, follow these steps:

1. Install Node.js if not already installed.
2. Clone this repository to your local machine.
3. Navigate to the project directory.
4. Run `node main.js` to execute the code.
5. Check the console output for the results of adding, dialing, and removing phone numbers.

## Code Structure

- **`Telephone` Class**: Defines the telephone system with methods to add, remove, and dial phone numbers, along with observer management.
- **`Observer` Class**: Represents a generic observer with an update method.
- **`SpecialObserver` Class**: Represents a special type of observer with a custom update method.
- **`main.js`**: Entry point of the program where instances of classes are created and methods are called.

## Getting Started

To get started with this project, simply clone the repository and explore the code. You can also experiment with adding more functionality or extending the project according to your requirements.

## Acknowledgements

This project was developed as part of the Learnable Internship Program by GenesysTechHub. Special thanks to the mentors and instructors for their guidance and support throughout the program.

## License

This project is licensed under the [MIT License](LICENSE).
