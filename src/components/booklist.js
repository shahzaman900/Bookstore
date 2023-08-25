import { useSelector } from 'react-redux';
import CreateBook from './createbook';
import Book from './displaybook';

export default function BookList() {
  const books = useSelector((state) => state.books);
  console.log(books);
  return (
    <>
      {
        books.map((book) => (
          <div key={book.item_id}>
            <Book book={book} />
          </div>
        ))
      }
      <hr />
      <CreateBook />
    </>
  );
}
