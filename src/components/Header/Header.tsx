import "./Header.scss";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <h2>PetDex</h2>
        </Link>
      </div>
      <div className="header__actions">
        <ul>
          <li>
            <Link to="/admin">
              <span>Admin</span>
              <SupervisorAccountIcon />
            </Link>
          </li>
          <li>
            <Link to="/login">
              <span>Login</span>
              <AccountCircleIcon />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
