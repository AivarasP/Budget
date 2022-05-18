import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './NavBar.css'
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
  return (
    <div className="navbar">
      <div>
        <p className="balance" style={{
            fontSize:17,
            justifyContent:'start'
        }}>Balansas: {balansas - islaidos}</p>
      </div>
      <Link to="/add-income">
        <button className="btn"id="btns"><span>Pridėti Pajamas</span></button>
      </Link>
      <Link to="/add-expense">
        <button className="btn"id="btns"><span>Pridėti išlaidas</span></button>
      </Link>
      <Link to="/">
        <button className="btn"id="btns"><span>Atsijungti</span></button>
      </Link>
    </div>
  );
}
 
export default Navbar;