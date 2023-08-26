import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CreateBook from './createbook';
import { getBook, deleteBookFromBooks } from '../redux/books/booksSlice';

export default function BookList() {
  const books = useSelector((state) => state.itemBooks.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);
  return (
    <>
      {
        books.map((book) => (
          <div key={book.item_id}>
            <h1>{ book.title }</h1>
            <p>{ book.category }</p>
            <p>
              <strong>Auther: </strong>
              { book.author }
            </p>
            <button type="button" onClick={() => dispatch(deleteBookFromBooks(book.item_id))}>Delete</button>
          </div>
        ))
      }
      <hr />
      <CreateBook />
    </>
  );
}
