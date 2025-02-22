# Autiomation with Playwright

This project requires Node.js to run. To get started, make sure you have Node.js installed, then run:

```bash
npm init playwright@latest

project-structure/
├── node_modules/
├── tests/
│   ├── example.spec.js
│   └── ... (other test files)
├── package.json
├── playwright.config.js
└── README.md


###Folders

- pages/
  Contains Page Object Model classes. Each class encapsulates the selectors and methods for a specific page or feature.  
  - `Base.page.js` is a base class that includes common methods (like navigation) used by all other pages.  
  - `Login.page.js`, `Register.page.js`, `Item.page.js`, etc., contain page-specific locators and actions.

- tests/
  Contains all test files, which import and use the Page Objects. Each `.test.js` file typically tests a specific workflow or feature.

- test-results/  
  Stores Playwright videos for the test cases. Video capturing was enabled in `playwright.config.js`.

- playwright.config.js
  The central configuration file for Playwright

- package.json /package-lock.json
  Standard Node.js project files defining dependencies and scripts.

---

## Installation

1. Install Node.js 
   Make sure you have [Node.js](https://nodejs.org/) installed (v14 or higher is recommended).

2. Install Playwright
npm init playwright@latest

3. Clone the repository
   git clone https://github.com/your-username/PW-PROJECT.git
   cd PW-PROJECT

4. Run Playwright cmd
   npx playwright test
