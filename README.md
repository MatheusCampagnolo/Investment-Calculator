# Investment Calculator

## Description

This is a simple web application that allows users to calculate both simple and compound interest on their investments. Users can input their initial investment amount, monthly contributions (for compound interest), interest rate, and investment period. The application provides the total investment amount and the final amount with interest.

## Functionality

The application works as follows:

### Simple Interest Calculator

1. The user inputs the initial investment amount in the "Initial Value" field.
2. The user inputs the interest rate in the "Interest Rate" field and selects whether it is annual or monthly from the dropdown menu.
3. The user inputs the investment period in the "Time" field and selects whether it is in years or months from the dropdown menu.
4. When the user clicks the "Calculate" button, the JavaScript function `calculateSimpleInterest()` is triggered. This function:
   - Retrieves the input values.
   - Converts the rate and time if necessary (e.g., from months to years).
   - Calculates the simple interest using the formula: `simpleInterest = initialValue * rate * time`.
   - Displays the total amount with simple interest in the "Result" section.

### Compound Interest Calculator

1. The user inputs the initial investment amount in the "Initial Value" field.
2. The user inputs the monthly contribution amount in the "Monthly Value" field.
3. The user inputs the interest rate in the "Interest Rate" field and selects whether it is annual or monthly from the dropdown menu.
4. The user inputs the investment period in the "Time" field and selects whether it is in years or months from the dropdown menu.
5. When the user clicks the "Calculate" button, the JavaScript function `calculateCompoundInterest()` is triggered. This function:
   - Retrieves the input values.
   - Converts the rate and time if necessary (e.g., from months to years).
   - Calculates the total invested amount.
   - Calculates the compound interest using a loop to apply the monthly contributions and interest rate.
   - Displays the total invested amount and the final amount with compound interest in the "Result" section.

## Contribution

Contributions to the Investment Calculator project are welcome! Here are some ways you can contribute:

- **Add More Calculation Options:** Include additional options for different compounding frequencies or more complex investment scenarios.
- **Error Handling:** Improve error handling to provide better feedback to users in case of invalid inputs.
- **UI Enhancements:** Enhance the user interface with additional features or improved design elements, such as adding animations or refining the layout.
- **Optimizations:** Optimize the JavaScript code for better performance and maintainability, such as reducing redundancy or improving algorithms.

## Testing

If you want to test, here is the url for it: https://matheuscampagnolo.github.io/Investment-Calculator/

## License

This project is licensed under the [MIT License](LICENSE), which means you can use, modify, and distribute the code freely as long as you include the original license and acknowledge the project contributors.
