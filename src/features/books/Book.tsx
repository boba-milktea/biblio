import type { BookType } from '../../types/bookType';

function Book({ book }: { book: BookType }) {
  const { title, subtitle, image, price } = book;
  return (
    <li>
      <img src={image} alt={`image of ${title}`} />
      <div className="px-2 md:px-8">
        <h2 className="font-bold text-xl">{title}</h2>
        <p className="my-2">{subtitle}</p>
        <span>{price}</span>
      </div>
    </li>
  );
}

export default Book;
