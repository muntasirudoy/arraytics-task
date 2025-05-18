# Optimize React application that displays a list of products

I have tried to optimize this application by applying SOLID principles and React design patterns.

## Features

- Add products with name and price
- Clean component architecture with reusable structure
- Performance optimized with `React.memo` to prevent unnecessary re-renders
- Performance optimized with `useCallback` to prevent unnecessary re-renders

## Project Structure

app

 App.jsx # Root component, holds product list state

 components

    - AddProductForm.jsx # Form input and submission logic

    - ProductList.jsx # Displays list of products

    - ProductItem.jsx # Renders individual product

hooks

    - useProducts.js # Keeps product state and update logic

## Applied SOLID Principles

- Single Responsibility : Each component does one job only. Like AddProductForm,ProductItem and ProductList do only one thing.
- Open/Closed
- Liskov Substitution : Components like ProductItem can be reused or replaced without breaking the list
- Interface Segregation : Each component receives only the props which its need.

## Optimization

- Used `React.memo` on ProductItem to avoid unnecessary re-renders
- Used `useCallback` for addProduct function to avoid unnecessary re-renders
