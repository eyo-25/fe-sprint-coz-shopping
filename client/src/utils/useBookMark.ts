export function getBookmarks(): number[] {
  const bookmarksJSON = localStorage.getItem("bookmarks");
  if (bookmarksJSON) {
    return JSON.parse(bookmarksJSON);
  }
  return [];
}

export function setBookmarks(bookmarks: number[]) {
  const bookmarksJSON = JSON.stringify(bookmarks);
  localStorage.setItem("bookmarks", bookmarksJSON);
}

export function addBookmark(id: number) {
  const bookmarks = getBookmarks();

  if (!bookmarks.includes(id)) {
    bookmarks.push(id);
    setBookmarks(bookmarks);
  }
}

export function removeBookmark(id: number) {
  let bookmarks: number[] = getBookmarks();
  bookmarks = bookmarks.filter((bookmark) => bookmark !== id);
  setBookmarks(bookmarks);
}
