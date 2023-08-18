import CreateBook from './createbook';
import Book from './displaybook';

export default function BookList() {
  const bookList = [
    {
      Id: 1,
      bookname: 'React Book',
      auther: 'shah zaman',
    },
    {
      Id: 2,
      bookname: 'Next js Book',
      auther: 'shah zaman',
    },
    {
      Id: 3,
      bookname: 'Angular Book',
      auther: 'shah zaman',
    },
  ];
  return (
    <>
      {
        bookList.map((book) => (
          <div key={book.Id}>
            <Book book={book} />
          </div>
        ))
      }
      <hr />
      <CreateBook />
    </>
  );
}
