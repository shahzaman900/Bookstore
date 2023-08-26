/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

export default function Book({ bookDetail }) {
  const dispatch = useDispatch();
  return (
    <>
      <h1>{ bookDetail.title }</h1>
      <p>{ bookDetail.category }</p>
      <p>
        <strong>Auther: </strong>
        { bookDetail.author }
      </p>
      <button type="button" onClick={() => dispatch(removeBook(bookDetail.item_id))}>Delete</button>
    </>
  );
}
