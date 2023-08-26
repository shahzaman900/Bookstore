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
          <div className="Lesson-Panel" key={book.item_id}>
            <div>
              <p className="School-of">{ book.category }</p>
              <h1 className="Title">{ book.title }</h1>
              <p className="Suzanne-Collins">
                Auther:
                { book.author }
              </p>
              <div className="btn">
                <button type="button" className="Comments">Comments</button>
                <div className="vertical" />
                <button type="button" className="Comments" onClick={() => dispatch(deleteBookFromBooks(book.item_id))}>Remove</button>
                <div className="vertical" />
                <button type="button" className="Comments">Edit</button>
              </div>
            </div>
            <div className="circle">
              <div className="Oval-2" />
              <div>
                <h1 className="-Percent-Complete">64%</h1>
                <p className="Completed">Complete</p>
              </div>
            </div>
            <div className="last">
              <span className="Current-Chapter Text-Style-7">Current Chapter</span>
              <span className="Current-Lesson">Chapter 17</span>
              <div className="Rectangle-2">Update Progress</div>
            </div>
          </div>
        ))
      }
      <hr />
      <CreateBook />
    </>
  );
}
