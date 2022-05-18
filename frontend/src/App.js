import { Route, Routes } from "react-router-dom";
import Home from "./Pages/PageComponents/Home";
import AddIncome from "./Pages/Components/AddIncome";
import EditIncome from "./Pages/Components/EditIncome";
import AddExpense from "./Pages/Components/AddExpense";
import EditExpense from "./Pages/Components/EditExpense";
import LandingPage from "./Pages/LandingPage";
import SignInPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/RegisterPage";
import { Fragment } from "react";
import './App.css'
import Navbar from "./Pages/PageComponents/Navbar";

function App() {
  return (
    <>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<SignInPage/>} />
          <Route path="/register" element={<SignUpPage/>} />
          <Route path="/home" element={
            <Fragment>
              <Navbar/>
              <Home/>
            </Fragment>
          } />
          <Route path="/add-income" element={<AddIncome/>} />
          <Route path="/add-expense" element={<AddExpense/>}/>
          <Route path="/edit-income/:id" element={<EditIncome/>} />
          <Route path="/edit-expense/:id" element={<EditExpense/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
