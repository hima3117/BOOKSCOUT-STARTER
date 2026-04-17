# BookScout

BookScout is a responsive book discovery web application built using the Open Library API. It is designed for students, self-learners, and curious readers who want a simple and polished way to search books by topic, title, or author, explore useful results, and save books for later.

## Live Demo
Add your deployed link here:  
`book-scout-e2i69wnba-hima3117s-projects.vercel.app`

## GitHub Repository
Add your repository link here:  
`https://github.com/hima3117/BOOKSCOUT-STARTER.git`

---

## Who is this for?

BookScout is built for:
- students looking for books on specific learning topics
- self-learners exploring subjects like JavaScript, React, CSS, or design
- readers who want a clean and fast way to discover books without a cluttered interface

---

## Problem

Many simple book search apps only focus on the happy path. They may fetch data and display results, but they often ignore the real product experience. Users also face issues like:
- unclear loading states
- empty search results
- broken or missing cover images
- no way to save interesting books
- poor mobile experience

This project solves that by turning raw Open Library data into a more thoughtful product experience.

---

## What I built

I built **BookScout**, a responsive interactive data explorer for books.  
The application allows users to:

- search books by title, author, or topic
- explore books using subject chips
- browse clean, responsive book cards
- open a detailed view for a selected book
- save books to favorites using local storage
- navigate through large result sets using pagination
- experience clear loading, empty, and error states

---

## Core Features

### 1. Search Experience
Users can search books using keywords related to:
- title
- author
- topic or subject

### 2. Subject-based Discovery
The home page includes subject chips such as:
- JavaScript
- React
- CSS
- Web Development
- Python
- Fiction
- History
- Design

This helps users discover books even if they do not want to type a full search query.

### 3. Book Cards
Each book card shows:
- cover image
- title
- author
- first publish year
- edition count

### 4. Favorites
Users can save books they find interesting and view them later on the Favorites page.

### 5. Book Details Page
Each book can be opened in a dedicated details page to show:
- larger cover
- title
- author
- description
- subjects
- link to Open Library

---

## Design and UX Decisions

This assignment asked for a real product feel instead of a tutorial-style demo, so I focused on:

- a clean and modern layout
- clear visual hierarchy
- polished card-based design
- responsive behavior across screen sizes
- thoughtful edge case handling
- simple navigation between discovery and saved books

I chose a student-focused use case because it makes the product direction clearer and gives purpose to the book discovery flow.

---

## Edge Cases Handled

A major focus of the project was handling non-happy-path states.

### Loading State
When data is being fetched, loading skeletons are shown instead of a blank screen.

### Empty State
If no books match a search, the app shows a helpful empty state message.

### Error State
If the API request fails, the app shows an error message with a retry action.

### Missing Covers
If a book has no cover image, a fallback placeholder is shown.

### Large Datasets
Pagination is used to handle large sets of results in a clean and manageable way.

---

## Tech Stack

- **React**
- **Vite**
- **Tailwind CSS**
- **React Router**
- **JavaScript (ES6+)**
- **Open Library API**
- **Local Storage**
- **Git + GitHub**
- **Vercel** for deployment

---

## Project Structure

```txt
src/
  components/
    Navbar.jsx
    SearchBar.jsx
    SubjectChips.jsx
    FilterBar.jsx
    BookCard.jsx
    BookGrid.jsx
    LoadingSkeleton.jsx
    EmptyState.jsx
    ErrorState.jsx
    Pagination.jsx
  pages/
    Home.jsx
    Favorites.jsx
    BookDetails.jsx
  services/
    openLibraryApi.js
  hooks/
    useBooks.js
    useFavorites.js
  utils/
    formatBook.js
  styles/
    index.css
  App.jsx
  main.jsx
