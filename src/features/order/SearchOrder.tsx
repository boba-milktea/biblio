import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        className="border-accent border-2"
        type="text"
        placeholder="order number"
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchOrder;
