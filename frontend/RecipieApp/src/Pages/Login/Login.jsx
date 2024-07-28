import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Login() {
    const navigate = useNavigate();
    return (
        <StyledContainer>
            <div id="card">
                <div id="card-content">
                    <div id="card-title">
                        <h2>LOGIN</h2>
                        <div className="underline-title"></div>
                    </div>
                    <form method="post" className="form">
                        <div className='inputField'>
                            <input id="user-email" className="form-content" type="text" name="email" autoFocus="off" required />
                            <label htmlFor="user-email">
                                &nbsp;Email or Username
                            </label>
                        </div>
                        <div className="form-border"></div>
                        <div className='inputField'>
                            <input id="user-password" className="form-content" type="password" name="password" required />
                            <label htmlFor="user-password">&nbsp;Password
                            </label>
                        </div>
                        <div className="form-border"></div>
                        <a href="#">
                            <legend id="forgot-pass">Forgot password?</legend>
                        </a>
                        <input
                            onClick={() => navigate("/home")}
                            id="submit-btn" type="submit" name="submit" value="LOGIN" />
                        <a
                            className='hover:cursor-pointer hover:text-red-500 text-white'
                            onClick={() => navigate("/signup")}
                            id="signup">Don't have account yet?</a>
                    </form>
                </div>
            </div>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    
`

export default Login