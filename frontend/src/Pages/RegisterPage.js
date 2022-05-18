import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../assets/images/bp.jpg'
import './Register.css'

function SignUpPage() {

    return (
        
        <div className="text-center"style={HeaderStyle}>
            <h2 style={{fontSize:30}}>Susikurkite vartotoją</h2>
            <form action="/home">
                <p>
                    <label>Vardas</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>El. paštas</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Slaptažodis</label><br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>Patvirtinu, jog duomenys yra teisingi</span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
                <div>Jau turite vartotoja? <Link to="/login" style={{color:'blue'}}> Prisijungti</Link>.</div>
            </form>
        </div> 
    )

}
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
export default SignUpPage;