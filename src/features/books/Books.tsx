import { useLoaderData } from 'react-router-dom';
import { getBooks } from '../../services/getBooks';
import type { BookType } from '../../types/bookType';
import Book from './Book';

function Books() {
  const books = useLoaderData();

  return (
    <ul className="p-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
      {books &&
        books.data.books.map((book: BookType) => (
          <Book book={book} key={book.isbn13} />
        ))}
    </ul>
  );
}

export const bookLoader = async () => {
  const books = await getBooks();
  console.log(books);
  return books;
};

export default Books;
