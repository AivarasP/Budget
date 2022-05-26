import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link} from "react-router-dom";
import './NavBar.css'
import AuthService from "../../services/auth.service";
import EventBus from "../../common/EventBus";
import authHeader from "../../services/auth-header";
const Navbar = () => {
const [income, setIncome] = useState([]);
const [expense, setExpense] = useState([]);
  const loadExpense = () => {
    axios.get("http://localhost:8080/api/expenses",{ headers: authHeader() }).then((res) => {
      setExpense(res.data.reverse());
    });
  }
  const loadIncome = () => {
    axios.get("http://localhost:8080/api/incomes",{ headers: authHeader() }).then((res) => {
      setIncome(res.data.reverse());
    });
  };

  useEffect(() => {
    loadIncome();
  }, [income]);

  useEffect(() => {
    loadExpense();
  }, [expense]);
  const balansas = income.reduce(function( _this,val ) {
   return _this + Number(val.sum)
  }, 0);
  const islaidos = expense.reduce(function( _this,val ) {
    return _this + Number(val.sum)
  }, 0);

 
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
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
    setShowAdminBoard(false);
    setCurrentUser(undefined);
    
  };
  return (
   
    <div>
      <nav className="navbar">
        <div className="navbar-nav mr-auto">
          <h1 id="bal">BALANSAS : {balansas - islaidos}</h1>
        </div>
          <Link to="/home">
            <button id="btnnav">
              PAGRINDINIS
            </button>
            </Link>
            <Link to="/income">
            <button id="btnnav">
              PAJAMOS
            </button>
            </Link>
            <Link to="/expense">
            <button  id="btnnav">
              IŠLAIDOS
            </button>
            </Link>
            <Link to="/Profile">
            <button  id="btnnav">
              MANO PASKYRA
            </button>
            </Link>
            {showAdminBoard && (
              <Link to={"/admin"} id="btnav">
                Admin Board
              </Link>
          )}   
        {currentUser ? (
          <div className="navbar-nav ml-auto">
            
            <Link to="/">
            <button id="btnnav"onClick={logOut}>
              ATSIJUNGTI
            </button>
            </Link>  
          </div>
        ) : (
          <p>404</p>
        )}
      </nav>
      </div>
  );
}
 
export default Navbar;