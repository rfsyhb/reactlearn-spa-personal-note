import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Active</Link>
        </li>
        <li>
          <Link to="/archived">Archived</Link>
        </li>
        <li>
          <Link to="/note/add">Create New Note</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
