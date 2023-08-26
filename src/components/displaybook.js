/* eslint-disable react/prop-types */
// import { useDispatch } from 'react-redux';

export default function Book({ bookDetail }) {
  return (
    <>
      <h1>{ bookDetail.title }</h1>
      <p>{ bookDetail.category }</p>
      <p>
        <strong>Auther: </strong>
        { bookDetail.author }
      </p>
      <button type="button">Delete</button>
    </>
  );
}
