# Celebrare Photo Gallery Assignment 📸

A responsive photo gallery web application built for the Celebrare Frontend Internship pre-screening assignment. 

This project fetches images from a public API, displays them in a fully responsive grid, allows real-time author search, and includes a persistent favorites system. Built with a focus on clean architecture, performance optimization, and a premium minimalist UI.

## 🚀 Live Demo & Video Explanation
* **Video Walkthrough:** [Insert your Google Drive / YouTube unlisted link here]
* **Live Site:** [Insert Vercel/Netlify link if you deployed it, otherwise delete this line]

## ✨ Key Features (Assignment Requirements)
1. **Custom Data Fetching:** Utilizes a custom `useFetchPhotos` hook to handle API calls, loading states, and error handling from the Picsum API.
2. **Responsive Grid:** Adapts seamlessly across devices (4 columns on desktop, 2 on tablet, 1 on mobile) using Tailwind CSS.
3. **Real-time Search:** Filters already-fetched data instantly by author name as the user types, without making unnecessary API calls.
4. **Persistent Favorites:** Uses `useReducer` for predictable state management of favorited images, persisting data across sessions via `localStorage`.
5. **Performance Optimized:** Implements `useCallback` to memoize event handlers and `useMemo` to cache expensive filtering computations, preventing unnecessary re-renders.

## 🛠️ Tech Stack
* **Framework:** React + Vite
* **Styling:** Tailwind CSS v4
* **State Management:** `useReducer`, `useState`
* **Icons:** Custom inline SVGs (Zero external component libraries used)

## 🧠 Technical Decisions
As requested by the strict assignment guidelines, this project avoids all external component libraries (MUI, Bootstrap, etc.) and class components. 

* **Why `useReducer`?** Used for the favorites state to cleanly separate the complex logic (toggling, loading from local storage) from the UI components.
* **Why `useMemo`?** Used on the filtered photos array to ensure the app doesn't re-calculate the search filter on every render, only when the search term or photo array changes.
* **Why `useCallback`?** Wrapped around the search handler function to prevent React from unnecessarily recreating the function reference on every render cycle.

## 💻 Local Setup
To run this project locally on your machine:

1. Clone the repository:
   ```bash
   git clone [https://github.com/Uday-04-developer/celebrare-gallery.git](https://github.com/Uday-04-developer/celebrare-gallery.git)
