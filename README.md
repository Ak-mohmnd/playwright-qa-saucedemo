## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/)


## Getting Started

### Dependencies

1. Initialize the Node.js project:
    - Run `npm init`

2. Install project dependencies:
    - Run `npm install`

3. Install Playwright and related dependencies:
    - Run `npm install playwright` or `npm init playwright@latest`


### Running Playwright Tests

1. Running All Tests
    - Run `npx playwright test`

2. Running a Specific Test File
    - Run `npx playwright test tests/[File Name].spec.ts`   
    // Replace [File Name] with the name of the test file you want to run (e.g., Login, Home, etc.)
