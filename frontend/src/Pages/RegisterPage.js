import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import BackgroundImage from '../assets/images/bgw.jpg'
import AuthService from "../services/auth.service";
import Swal from "sweetalert2";
import { Link,useNavigate } from "react-router-dom";
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const SignUpPage = () => {
    const navigate = useNavigate();
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, email, password).then(
        (response) => {
            Swal.fire({
                position: 'top',
                icon: 'success',
                color: 'rgba(255, 0, 255, 0.5)',
                title: 'Prisiregistravote!',
                showConfirmButton: false,
                timer: 1500
              })
        navigate("/login");
          setMessage(response.data.message);
          setSuccessful(true); 
          
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
      <header style={HeaderStyle} className="text-center font-medium font-Montserrat">
    <nav className="navbarlanding">
        <div className="navbar-nav mr-auto">
          <Link to="/"><h1 id="btnnavs"style={{userSelect:'none'}}>Pinigu <span style={{color:'#AAFF00'}}>Medis</span></h1></Link>
        </div>
          <Link to="/aboutus">
            <button id="btnnavlan">
              APIE MUS
            </button>
            </Link>
            <Link to="/contacts">
            <button id="btnnavlan">
              KONTAKTAI
            </button>
            </Link>
            
            
            <div className="navbar-nav ml-auto">
            
            <Link to="/login">
            <button id="btnnavlan">
              PRISIJUNGTI
            </button>
            </Link>  
          </div>
      </nav>
    <div> 
        <h1 className="text-3xl "style={{
            position:"relative",
            top:100,
            color:"black"
        }}>Registracija</h1>
       
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="username">Vartotojo Vardas</label>
                <input
                  type="text"
                  placeholder="Vardenis"
                  className="form-control"
                  name="Vardenis"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                  style={{ height: 30, width: "95%", borderColor: 'gray', borderWidth: 1,borderRadius:4 }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">El. paštas</label>
                <input
                  type="text"
                  placeholder="aaaaa@gmail.com"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                  style={{ height: 30, width: "95%", borderColor: 'gray', borderWidth: 0.5,borderRadius:4 }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Slaptažodis</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="***********"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                  style={{ height: 30, width: "95%", borderColor: 'gray', borderWidth: 1,  marginBottom: 20,borderRadius:4 }}
                />
                {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block" id="btn">Užsiregistruoti</button>
              </div>
              <div>Jau turite vartotoja? <Link to="/login" style={{color:'#33FFBE'}}> Prisijungti.</Link></div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
    </header>
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
export default SignUpPage;
