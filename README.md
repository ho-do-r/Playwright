# Playwright E2E Automation Framework 🚀

A robust, data-driven UI automation framework built using **Playwright** and **Node.js**. This project utilizes the **Page Object Model (POM)** design pattern for maintainability and integrates **Allure Reporter** for beautiful, comprehensive test execution reports.

## 🛠️ Tech Stack
* **Testing Tool:** [Playwright](https://playwright.dev/)
* **Language:** JavaScript (Node.js)
* **Design Pattern:** Page Object Model (POM)
* **Reporting:** Allure Reports

## 📁 Project Structure
The framework is organized into the following key directories:

* **`/tests`**: Contains all the test runner files (e.g., `loginApplication.spec.js`).
* **`/pages`**: Contains the Page Object classes mapping UI elements and methods (e.g., `loginpage.js`, `homePage.js`).
* **`testlogin.json`**: JSON files used to perform Data-Driven Testing (DDT) by feeding multiple user credentials into single test scripts.
* **`playwright.config.js`**: The central configuration file managing timeouts, browser projects (Chromium, Firefox, WebKit), and reporters.

## ⚙️ Prerequisites
Before running this project, ensure you have the following installed on your machine:
* [Node.js](https://nodejs.org/) (v14 or higher)
* Git

## 🚀 Installation & Setup

1. **Clone the repository:**
   ```bash
git clone https://github.com/ho-do-r/Playwright.git
cd Playwright-Framework

2.Install project dependencies:
npm install

3.Install Playwright browsers:
npx playwright install

🏃‍♂️ Running the Tests

Run all tests in headless mode (default):
npx playwright test

Run tests in UI mode (interactive dashboard):
npx playwright test --ui

Run tests with a visible browser (headed mode):
npx playwright test --headed

📊 Generating Allure Reports

This project is configured to generate rich HTML reports using Allure.

Run tests to generate Allure raw data:
npx playwright test --reporter=allure-playwright

Generate and open the Allure HTML report:
npx allure serve allure-results

💡 Key Features Implemented

Page Object Model: Separation of element locators and test logic.

Data-Driven Testing: Loops through JSON files to test multiple datasets efficiently.

Dynamic Wait Handling: Utilizes Playwright's auto-waiting and waitForLoadState.

Multi-Tab Handling: Seamlessly switches contexts to handle dynamically spawned browser tabs.
