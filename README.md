# 🚀 Dynamic Pricing Table UI

A fully responsive and dynamic pricing table UI built using **React**, **Redux**, and **Styled-Components**—with no UI libraries. Every element, including dropdowns and tooltips, is custom-built. The app follows SOLID principles, React best practices, and a modular architecture.

---

## Developer Note

If TypeScript had been used, the implementation could have been even faster, cleaner, and more optimized in terms of type safety and maintainability. However, I made sure to strictly follow all the project requirements as provided, focusing on accuracy and completeness within the defined constraints.

 [Live Pricing Plan](https://arraytics-task-l8rt.vercel.app/)

## 📌 Requirements Fulfilled

- ✅ Responsive UI
- ✅ Redux for state management
- ✅ No UI libraries used (custom dropdowns, tooltips, badges, tabs)
- ✅ Clean, modular, and component-based codebase
- ✅ Styled-Components used for styling
- ✅ Data-driven dynamic table rendering
- ✅ Follows SOLID principles and DRY code
- ✅ Git and GitHub version control

---

## 🏗️ Tech Stack

- **React (via Vite)**
- **Redux**
- **Styled-Components**
- **JavaScript (ES6+)**
- **Vite**

---

## 🧩 Features

- ⚙️ Dynamic dropdown rendering based on pricing data
- 🧠 UI updates automatically when plans are added or removed
- 🧼 Custom reusable components:
  - `Card`, `Tooltip`, `Tabs`, `Dropdown`, `Badge`, `Container`
- 💬 Tooltip explanations built without external libraries
- 💡 Compound components and hooks used where appropriate
- 🧩 Extensible architecture for easy addition of features

---

## 📁 Folder Structure

```bash
src/
├── assets/                  # Static assets
├── components/              # Shared UI components
│   ├── ui/                  # Cards, Dropdowns, Tabs, Tooltips, etc.
│   └── layout/              # Container layout
├── modules/pricing/         # Pricing logic, UI, data, hooks
│   └── components/          # PlanCard, FeatureList, PlanDropdown
├── pages/                   # Pricing page
├── store/                   # Redux actions, reducers, store
├── styles/                  # Global styles
├── utils/                   # Utilities and helpers
└── main.jsx                 # App entry point

