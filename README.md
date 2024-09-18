# Functions with Unit Tests using Jest

This repository contains a set of basic JavaScript functions, along with unit tests written using **Jest** to ensure these functions behave as expected.

## File Structure

### 1. `funcoes.js`

This file contains several simple functions that perform basic mathematical operations and string manipulations:

- `somar(x, y)`: Returns the sum of two numbers.
- `obterNumeros()`: Returns an array of predefined numbers.
- `validarNumeroPositivo(num)`: Checks if a number is positive, throwing an error if it's negative.
- `subtrair(x, y)`: Returns the subtraction of two numbers.
- `multiplicar(x, y)`: Returns the multiplication of two numbers.
- `divisao(x, y)`: Returns the division of two numbers, throwing an error if the divisor is zero.
- `ehPar(num)`: Checks if a number is even.
- `contarPalavras(frase)`: Returns the number of words in a string.

### 2. `funcoes.test.js`

This file contains the unit tests for the functions above, using the **Jest** framework. Each function is tested with different scenarios to ensure they return the expected results or throw errors appropriately.

## How to Run the Tests

1. Make sure you have **Node.js** installed on your machine.
2. Clone this repository.
3. Install the dependencies (Jest) by running:

```bash
npm install
```

4. To run the tests, use the command:

```bash
npm test
```

## Implemented Tests

The tests cover the following cases:

- Sum of two numbers.
- Verification of an array of numbers returned by the `obterNumeros` function.
- Checking elements within the array.
- Validation of positive numbers and error throwing.
- Comparison of `undefined`, `null`, and boolean (`truthy`, `falsy`) values.
- Numeric comparisons (`greaterThan`, `lessThan`).
- Subtraction, multiplication, and division of numbers.
- Error checking when dividing by zero.
- Checking if a number is even.
- Counting words in a sentence.

## Example Tests

```javascript
test("Should correctly add two numbers", () => {
  expect(somar(2, 3)).toBe(5);
});

test("Should throw an error when trying to divide a number by zero", () => {
  expect(() => divisao(5, 0).toThrow("Cannot divide by zero"));
});
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributions

Contributions are welcome! Feel free to fork this repository and open a pull request.
