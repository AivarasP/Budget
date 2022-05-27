import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import BackgroundImage from '../assets/images/gb.jpg'
import AuthService from "../services/auth.service";
import { Link } from "react-router-dom";
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const SignInPage = () => {
  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          console.log("LoginPage: " + username)
           navigate("/home");
          // window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="col-md-12 text-center font-medium font-Montserrat " style={HeaderStyle}>
        
    
        
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleLogin} ref={form}>
          <div className="form-group">
            <label htmlFor="username">Vartotojo Vardas</label>
            <input
              type="text"
              placeholder="Vardenis"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
              style={{ height: 30, width: "95%", borderColor: 'gray', borderWidth: 1,borderRadius:4 }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Slaptažodis</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              placeholder="***********"
              onChange={onChangePassword}
              validations={[required]}
              style={{ height: 30, width: "95%", borderColor: 'gray', borderWidth: 1,  marginBottom: 20,borderRadius:4 }}
            />
            {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block"id="btn" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm" ></span>
              )}
              Prisijungti
            </button>
          </div>
          <div>Dar neturite vartojo? <Link to="/register" style={{color:'#33FFBE'}}> Prisiregistruoti.</Link></div>
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
          
        </Form>
      </div>
    </div>
  );
};
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
export default SignInPage;