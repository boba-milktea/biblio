import Button from './Button';
import { useAppDispatch } from '../hooks';
import { deleteItem } from '../features/cart/cartSilce';

const DeleteItem = ({ bookId }: { bookId: string }) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(deleteItem(bookId));
  };

  return <Button onClick={handleClick}>Delete</Button>;
};

export default DeleteItem;
