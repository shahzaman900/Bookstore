/* eslint-disable react/prop-types */
export default function Book({ book }) {
  return (
    <>
      <h1>{ book.title }</h1>
      <p>{ book.category }</p>
      <p>
        <strong>Auther: </strong>
        { book.author }
      </p>
      <button type="button">Delete</button>
    </>
  );
}
