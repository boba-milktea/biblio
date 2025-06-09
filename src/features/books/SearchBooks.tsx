import { Form, useLocation } from 'react-router-dom';
import Button from '../../components/Button';

const SearchBooks = () => {
  const location = useLocation();

  return (
    <Form
      className="mx-2"
      key={location.key}
      action="/books"
      method="get"
      role="search"
    >
      <label className="sr-only" htmlFor="search-books">
        Search Books
      </label>
      <input
        className="form-input text-md mr-2 w-7/12  lg:w-100 lg:text-lg"
        type="text"
        id="search-books"
        name="q"
        placeholder="e.g. html"
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchBooks;
