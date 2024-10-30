# WDIO + Cucumber Authorization Test Suite

This project is a WebdriverIO (WDIO) test suite using Cucumber for behavior-driven testing (BDD). It focuses on testing the authorization functionality with both positive and negative test cases. All tests run in Google Chrome in headless mode to ensure a faster, more consistent testing experience.

## Project Structure

### Test Files

- **Positive Test**  
  - Steps: `authPositiveSteps.js`
  - Feature: `authPositive.feature`

- **Negative Tests**  
  - Steps: `authNegativeSteps.js`
  - Feature: `authNegative.feature`

### Configuration

All tests are configured to run exclusively in **Google Chrome (headless mode)**, as defined in the `wdio.conf.js` file. 

## Setup

1. Clone this repository.
2. Run `npm install` to install all dependencies.

## Running Tests

### Positive Authorization Test

To run the positive authorization test only:

```bash
npx wdio wdio.conf.js --suite authPositive
```

### Negative Authorization Tests

To run the negative authorization tests only:

```bash
npx wdio wdio.conf.js --suite authNegative
```

## Notes

- Make sure Google Chrome is installed, as all tests are configured to run in headless Chrome.
- Modify `wdio.conf.js` if additional configuration is required.