/* eslint-disable import/no-extraneous-dependencies */
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';

export default function CreateBook() {
  const categories = ['Tech', 'Science', 'Develotment', 'HR'];
  const [book, setbook] = useState({
    item_id: uuidv4(),
    title: '',
    author: '',
    category: categories[0],
  });
  const dispatch = useDispatch();
  const handlechange = (e) => {
    setbook({ ...book, [e.target.name]: e.target.value });
  };

  const addbook = () => {
    setbook({ ...book, item_id: uuidv4() });
    dispatch(addBook(book));
  };

  return (
    <>
      <h1>Create Book </h1>
      <div>
        <input type="text" placeholder="Enter book name" name="title" value={book.title} onChange={handlechange} />
        <select name="author" onChange={handlechange}>
          {categories.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button type="submit" onClick={() => addbook()}>Add Book</button>
      </div>
    </>
  );
}
