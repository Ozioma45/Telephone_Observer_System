# Telephone_Observer_System (Console Application)

This project is a console application focused on implementing the observer pattern within a telephone system. It allows users to add, remove, and dial phone numbers while notifying registered observers whenever a phone number is dialed.

## Description

The console application comprises the following classes:

- `Telephone`: Represents a telephone system with methods to manage phone numbers and observers.
- `Observer`: Represents a basic observer that prints the dialed phone number.
- `SpecialObserver`: Represents a specialized observer that prints a custom message whenever a phone number is dialed.

The `Telephone` class maintains a list of observers and notifies them whenever a phone number is dialed using the observer pattern.

## Usage

1. **Adding Phone Numbers**: Use the `addPhoneNumber` method of the `Telephone` class to add a new phone number.

2. **Removing Phone Numbers**: Use the `removePhoneNumber` method of the `Telephone` class to remove a phone number.

3. **Dialing Phone Numbers**: Use the `dialPhoneNumber` method of the `Telephone` class to dial a phone number. Only phone numbers that have been added can be dialed. Observers will be notified when a phone number is dialed.

## Example

```javascript
const telephone = new Telephone();
const observer1 = new Observer();
const observer2 = new SpecialObserver();

telephone.addObserver(observer1);
telephone.addObserver(observer2);

telephone.addPhoneNumber("1234567890");
telephone.dialPhoneNumber("1234567890");
// Output:
// Phone number dialed: 1234567890
// Now Dialling 1234567890

telephone.removePhoneNumber("1234567890");
telephone.dialPhoneNumber("1234567890");
// Output: Phone number not found.
```

## UI Integration

For a graphical user interface (GUI) aspect of the project, please refer to the [Telephone Observer System UI](https://github.com/Ozioma45/Telephone_Observer_System) repository. You can view the live preview [here](https://ozioma45.github.io/Telephone_Observer_System/).

## Contributing

Contributions to this console application are welcome! Fork the repository, make your changes, and create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
