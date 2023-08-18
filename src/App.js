import './App.css';
import './components/categories.css';
import { Route, Routes } from 'react-router-dom';
import BookList from './components/booklist';
import Categories from './components/categories';
import Navigation from './components/navigation';

function App() {
  return (
    <>
      <section className="bookstoresection">
        <Navigation />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
