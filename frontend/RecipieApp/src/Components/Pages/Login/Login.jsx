import React from 'react'
import "./login.css";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    return (
        <div className='container'>
            <div id="card">
                <div id="card-content">
                    <div id="card-title">
                        <h2>LOGIN</h2>
                        <div className="underline-title"></div>
                    </div>
                    <form method="post" className="form">
                        <label htmlFor="user-email">
                            &nbsp;Email
                        </label>
                        <input id="user-email" className="form-content" type="email" name="email" autoComplete="on" required />
                        <div className="form-border"></div>
                        <label htmlFor="user-password">&nbsp;Password
                        </label>
                        <input id="user-password" className="form-content" type="password" name="password" required />
                        <div className="form-border"></div>
                        <a href="#">
                            <legend id="forgot-pass">Forgot password?</legend>
                        </a>
                        <input 
                        onClick={()=>navigate("/home")}
                        id="submit-btn" type="submit" name="submit" value="LOGIN" />
                        <a href="#" id="signup">Don't have account yet?</a>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login