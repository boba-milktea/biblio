import {
  useLoaderData,
  type LoaderFunction,
  type LoaderFunctionArgs
} from 'react-router-dom';
import { fetchBooks } from '../../services/fetchBooks';
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

export const bookLoader: LoaderFunction = async ({
  request
}: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const query = url.searchParams.get('q') ?? '';
  const searchText = query.trim() === '' ? 'html' : query;
  const books = await fetchBooks(searchText);
  console.log(books);
  return books;
};

export default Books;
