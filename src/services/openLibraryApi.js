const BASE_URL = "https://openlibrary.org";

export async function searchBooks({
  query = "",
  subject = "",
  page = 1,
  sort = "",
  limit = 20,
}) {
  const params = new URLSearchParams();

  if (query.trim()) {
    params.append("q", query.trim());
  } else if (subject.trim()) {
    params.append("subject", subject.trim());
  } else {
    params.append("q", "programming");
  }

  params.append("page", page);
  params.append("limit", limit);

  if (sort) {
    params.append("sort", sort);
  }

  // helpful fields for performance and consistency
  params.append(
    "fields",
    [
      "key",
      "title",
      "author_name",
      "cover_i",
      "first_publish_year",
      "subject",
      "edition_count",
      "ebook_access",
      "ratings_average",
      "want_to_read_count",
      "already_read_count",
      "author_key",
      "isbn",
    ].join(",")
  );

  const response = await fetch(`${BASE_URL}/search.json?${params.toString()}`);

  if (!response.ok) {
    throw new Error("Failed to fetch books.");
  }

  return response.json();
}

export async function getWorkDetails(workId) {
  const response = await fetch(`${BASE_URL}/works/${workId}.json`);

  if (!response.ok) {
    throw new Error("Failed to fetch book details.");
  }

  return response.json();
}

export function getCoverUrl(book, size = "M") {
  if (book?.cover_i) {
    return `https://covers.openlibrary.org/b/id/${book.cover_i}-${size}.jpg`;
  }

  if (book?.isbn?.[0]) {
    return `https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-${size}.jpg`;
  }

  return null;
}

export function getWorkIdFromKey(key = "") {
  return key.replace("/works/", "");
}