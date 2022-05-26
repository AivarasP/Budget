import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import AddIncome from "./Pages/Components/AddIncome";
import EditIncome from "./Pages/Components/EditIncome";
import AddExpense from "./Pages/Components/AddExpense";
import EditExpense from "./Pages/Components/EditExpense";
import LandingPage from "./Pages/LandingPage";
import SignInPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/RegisterPage";
import { Fragment } from "react";
import Navbar from "./Pages/Components/Navbar";
import BoardUser from "./Pages/Components/BoardUser";
import BoardAdmin from "./Pages/Components/BoardAdmin";
import Profile from "./Pages/Components/Profile";
import IncomePage from "./Pages/IncomePage";
import ExpensePage from "./Pages/ExpensePage";
import './App.css'

function App() {

  const AuthRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.accessToken) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };
  const AuthAdminRoute = ({children}) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user.roles !== "admin"){
      return <Navigate to ="/" replace/>
    }
    return children;
  }
  return (
      <div className="App"> 
        <Routes>
          <Route path="/" element={<Fragment><LandingPage/></Fragment>} />
          <Route path="/login" element={<SignInPage/>} />
          <Route path="/register" element={<SignUpPage/>} />
          <Route path="/profile" element={<AuthRoute><Fragment><Navbar/><Profile/></Fragment></AuthRoute>} />
          <Route path="/home" element={<AuthRoute><Fragment><Navbar/><Home/></Fragment></AuthRoute>} />
          <Route path ="/income" element={<AuthRoute><Fragment><Navbar/><IncomePage/></Fragment></AuthRoute>} />
          <Route path ="/expense" element={<AuthRoute><Fragment><Navbar/><ExpensePage/></Fragment></AuthRoute>} /><Route path="/add-income" element={<AuthRoute><Fragment><Navbar/><AddIncome/></Fragment></AuthRoute>} />
          <Route path="/add-expense" element={<AuthRoute><Fragment><Navbar/><AddExpense/></Fragment></AuthRoute>}/>
          <Route path="/edit-income/:id" element={<AuthRoute><Fragment><Navbar/><EditIncome/></Fragment></AuthRoute>} />
          <Route path="/edit-expense/:id" element={<AuthRoute><Fragment><Navbar/><EditExpense/></Fragment></AuthRoute>} />
          <Route path="/user" element={<AuthRoute><BoardUser/></AuthRoute>} />
          <Route path="/admin" element={<AuthAdminRoute><BoardAdmin/></AuthAdminRoute>} />
        </Routes>
      </div>
  );
}

export default App;
