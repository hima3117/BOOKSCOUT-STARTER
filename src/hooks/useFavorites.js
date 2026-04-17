import { useEffect, useState } from "react";

const STORAGE_KEY = "bookscout_favorites";

export default function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = (id) => favorites.some((item) => item.id === id);

  const toggleFavorite = (book) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === book.id);
      if (exists) {
        return prev.filter((item) => item.id !== book.id);
      }
      return [...prev, book];
    });
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
}