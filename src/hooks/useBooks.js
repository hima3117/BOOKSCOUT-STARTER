import { useEffect, useState } from "react";
import { searchBooks } from "../services/openLibraryApi";
import { formatBook } from "../utils/formatBook";

export default function useBooks({ query, subject, page, sort }) {
  const [books, setBooks] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function fetchBooks() {
      try {
        setLoading(true);
        setError("");

        const data = await searchBooks({ query, subject, page, sort, limit: 20 });

        if (!ignore) {
          setBooks((data.docs || []).map(formatBook));
          setTotal(data.numFound || 0);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message || "Something went wrong.");
          setBooks([]);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    fetchBooks();

    return () => {
      ignore = true;
    };
  }, [query, subject, page, sort]);

  return { books, total, loading, error };
}