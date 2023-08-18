import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <header className="menu">
        <div className="menu-items">
          <h1>logo</h1>
          <ul className="ul">
            <li>
              <Link to="/">Books</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </div>
        <div>
          {/* <img src="" alt="" /> */}
          <p>shah</p>
        </div>
      </header>
    </>
  );
}
