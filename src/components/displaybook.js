/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';

export default function Book({ book }) {
  const dispatch = useDispatch();
  return (
    <>
      <h1>{ book.title }</h1>
      <p>{ book.category }</p>
      <p>
        <strong>Auther: </strong>
        { book.author }
      </p>
      <button type="button" onClick={dispatch(addBook)}>Delete</button>
      <button type="button" onClick={dispatch(removeBook)}>Add</button>
    </>
  );
}
