import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';

export default function CreateBook() {
  const [id, setId] = useState(0);
  const [book, setbook] = useState({
    item_id: id,
    title: '',
    author: '',
    category: 'shah',
  });
  const dispatch = useDispatch();
  const handlechange = (e) => {
    setbook({ ...book, [e.target.name]: e.target.value });
  };

  const addbook = () => {
    setId(id + 1);
    console.log(book);
    dispatch(addBook(addBook(book)));
  };

  return (
    <>
      <h1>Create Book </h1>
      <div>
        <input type="text" placeholder="Enter book name" name="title" onChange={handlechange} />
        <select name="author" onChange={handlechange}>
          <option value="volvo">select auther</option>
          <option value="saab">Shah</option>
          <option value="mercedes">Zaman</option>
          <option value="audi">Khan</option>
        </select>
        <button type="submit" onClick={() => addbook()}>Add Book</button>
      </div>
    </>
  );
}
