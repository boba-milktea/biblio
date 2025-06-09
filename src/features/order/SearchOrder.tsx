import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

const SearchOrder = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  };

  return (
    <form className="mx-2" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="form-input text-md mr-2 w-5/12 md:w-7/12 lg:text-lg"
        type="text"
        placeholder="e.g. Hs379KXZsx937"
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
      />
      <Button type="submit">Search Order</Button>
    </form>
  );
};

export default SearchOrder;
