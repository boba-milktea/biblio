import coffeMonster from '../../assets/coffee-monster.png';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import SearchOrder from '../order/SearchOrder';

const EmptyCart = () => {
  const navigate = useNavigate();
  const handleGoToBooks = () => {
    navigate('/books');
  };

  return (
    <div className="message-card">
      <Button type="btn-link" onClick={handleGoToBooks}>
        &larr; Go To Books
      </Button>
      <SearchOrder />
      <h2>It's an empty cart</h2>
      <img className="w-48 mt-4" src={coffeMonster} alt="a coffee monster" />
    </div>
  );
};

export default EmptyCart;
