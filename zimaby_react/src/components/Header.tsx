import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to='/'>Home</Link>
        <Link to='/posts'>Posts</Link>
      </nav>
    </header>
  );
};

export default Header;