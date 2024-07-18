import React from 'react'
import "./login.css";

function Login() {
    return (
        <div className='container'>
            <div id="card">
                <div id="card-content">
                    <div id="card-title">
                        <h2>LOGIN</h2>
                        <div className="underline-title"></div>
                    </div>
                    <form method="post" className="form">
                        <label for="user-email">
                            &nbsp;Email
                        </label>
                        <input id="user-email" className="form-content" type="email" name="email" autocomplete="on" required />
                        <div className="form-border"></div>
                        <label for="user-password">&nbsp;Password
                        </label>
                        <input id="user-password" className="form-content" type="password" name="password" required />
                        <div className="form-border"></div>
                        <a href="#">
                            <legend id="forgot-pass">Forgot password?</legend>
                        </a>
                        <input id="submit-btn" type="submit" name="submit" value="LOGIN" />
                        <a href="#" id="signup">Don't have account yet?</a>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login