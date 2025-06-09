import Button from '../../components/Button';
import DeleteItem from '../../components/DeleteItem';
import ItemQty from '../../components/ItemQty';
import { useAppDispatch, useAppSelector } from '../../hooks';
import type { BookType } from '../../types/bookType';
import { addItem, getItemQty } from '../cart/cartSilce';

function Book({ book }: { book: BookType }) {
  const { isbn13, title, subtitle, image, price } = book;
  const dispatch = useAppDispatch();
  const qty = useAppSelector(getItemQty(isbn13));

  const handleAdd = () => {
    const newItem = {
      bookId: isbn13,
      name: title,
      quantity: 1,
      unitPrice: Number(price.slice(1)),
      totalPrice: Number(price.slice(1)) * 1
    };
    dispatch(addItem(newItem));
  };

  return (
    <li className="md:w-11/12 lg:w-8/12 flex flex-col items-center">
      <img src={image} alt={`image of ${title}`} />
      <div className="px-2 md:px-8">
        <h2 className="font-bold text-xl">{title}</h2>
        <p className="my-2">{subtitle}</p>
        <div className="flex mt-2 items-center justify-center">
          <span className="mr-2 font-bold md:text-lg lg:text-xl">{price}</span>
          {qty ? (
            <DeleteItem bookId={isbn13}></DeleteItem>
          ) : (
            <Button onClick={handleAdd}>Add to Cart</Button>
          )}
        </div>
        {qty && (
          <div className="mt-4 flex gap-2 items-center justify-center">
            <ItemQty bookId={isbn13} qty={qty} />
          </div>
        )}
      </div>
    </li>
  );
}

export default Book;
