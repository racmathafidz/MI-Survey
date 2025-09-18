# 📝 MI Survey

A step-by-step survey application built with **React, Vite, TypeScript, Redux Toolkit, and Bootstrap**.  
The app provides a 10-question survey flow with persistence, countdown timer, and summary review.

---

## 🚀 Demo
Check out the live demo: [MI Survey](https://mi-survey.vercel.app/)

---

## ✨ Features
- 10 questions, each with 3 answer options
- Stepper navigation (1 question per page)
- **No back navigation** (forward-only survey flow)
- **Persisted answers** using Redux Toolkit + redux-persist (survives refresh)
- **Countdown timer** (auto-submit when time runs out)
- **Summary page** showing all selected answers
- Restart option (resets answers + timer)
- Bootstrap styling with **Atomic Design structure** (atoms → molecules → organisms)
- **Bootstrap alerts** for success, error, and timeout notifications
- End-to-end tested with **Cypress**

---

## 📦 Dependencies
### Core
- [@reduxjs/toolkit](https://redux-toolkit.js.org/) — `^2.9.0`  
- [bootstrap](https://getbootstrap.com/) — `^5.3.8`  
- [react](https://react.dev/) — `^19.1.1`  
- [react-redux](https://react-redux.js.org/) — `^9.2.0`  
- [react-router-dom](https://reactrouter.com/) — `^7.9.1`  
- [redux-persist](https://github.com/rt2zz/redux-persist) — `^6.0.0`  
- [sass](https://sass-lang.com/) — `^1.92.1`  

### Dev & Tooling
- [cypress](https://www.cypress.io/) — `^15.2.0`  
- [eslint](https://eslint.org/) — `^9.33.0`  
- [typescript](https://www.typescriptlang.org/) — `~5.8.3`  
- [vite](https://vitejs.dev/) — `^7.1.2`  

---

## Prerequisites
- **Node.js**: Version 18 or later.
- **npm**: Version 9 or later.

---

## Getting Started

### Clone the Repository
```bash
git clone https://github.com/racmathafidz/MI-Survey.git
cd mi-survey
```

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
The app will be available at http://localhost:5173.

## Testing with Cypress
To run the tests using Cypress, follow these steps:

### Install Cypress Dependencies
If you haven't installed Cypress yet, do so by running:
```bash
npm install cypress --save-dev
```

### Run Cypress Tests
To open Cypress and run the tests, use the following command:
```bash
npm run cy:open
```
This will launch Cypress in interactive mode, allowing you to run the tests in your preferred browser.

## Support
If you encounter any issues or have questions, feel free to create an issue on GitHub or reach out to the maintainer.
