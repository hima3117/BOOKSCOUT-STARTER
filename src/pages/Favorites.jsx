import BookGrid from "../components/BookGrid";
import EmptyState from "../components/EmptyState";
import useFavorites from "../hooks/useFavorites";

export default function Favorites() {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  return (
    <main className="container-app py-8">
      <section className="rounded-[32px] bg-white p-8 shadow-soft">
        <h1 className="text-3xl font-bold text-slate-900">Saved Books</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Keep track of interesting books and revisit them anytime from your personal shortlist.
        </p>
      </section>

      <section className="mt-8">
        {favorites.length === 0 ? (
          <EmptyState
            title="No saved books yet"
            message="Save books from the Discover page and they will appear here."
          />
        ) : (
          <BookGrid
            books={favorites}
            onToggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
          />
        )}
      </section>
    </main>
  );
}