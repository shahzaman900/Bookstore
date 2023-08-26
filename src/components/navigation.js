/* eslint-disable import/no-extraneous-dependencies */
import { Link } from 'react-router-dom';
import { BiSolidGroup } from 'react-icons/bi';

export default function Navigation() {
  return (
    <>
      <header className="menu">
        <div className="menu-items">
          <h1 className="Bookstore-CMS">logo</h1>
          <ul className="ul">
            <li>
              <Link className="BOOKS" to="/">Books</Link>
            </li>
            <li>
              <Link className="BOOKS" to="/categories">Categories</Link>
            </li>
          </ul>
        </div>
        <div className="Oval">
          <BiSolidGroup className="icon" />
        </div>
      </header>
    </>
  );
}
