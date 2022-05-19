import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './NavBar.css'
import AuthService from "../../services/auth.service";
import EventBus from "../../common/EventBus";
const Navbar = () => {
    const [income, setIncome] = useState([]);
const [expense, setExpense] = useState([]);
  const loadExpense = () => {
    axios.get("http://localhost:8080/api/expenses").then((res) => {
      setExpense(res.data.reverse());
    });
  }
  const loadIncome = () => {
    axios.get("http://localhost:8080/api/incomes").then((res) => {
      setIncome(res.data.reverse());
    });
  };

  useEffect(() => {
    loadIncome();
  }, [income]);

  useEffect(() => {
    loadExpense();
  }, [expense]);

  const islaidos = expense.reduce(function( _this,val ) {
    return _this + Number(val.sum)
  }, 0);
 const balansas = income.reduce(function( _this,val ) {
   return _this + Number(val.sum)
 }, 0);
 
 const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };
  return (
   
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          bezKoder
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/mod"} className="nav-link">
                Moderator Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>
      </div>
  );
}
 
export default Navbar;