import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { TypeAnimation } from 'react-type-animation';

function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [password, setPassword] = useState('');

    return (
        <StyledContainer>
            <div className="textAnimation">
                <span style={{ fontSize: '2rem' }}>Create Your,</span>
                <span>Account Today.</span>
            </div>
            <div id="card">
                <div id="card-title">
                    <h2>Signup</h2>
                </div>
                <form method="post" className="form">
                    <div className='inputField'>
                        <input
                            id="user-email"
                            className="form-content"
                            type="email"
                            name="email"
                            autoFocus="off"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="user-email" className={email ? 'shrink' : ''}>
                            &nbsp;Email
                        </label>
                    </div>
                    <div className='inputField'>
                        <input
                            id="user-name"
                            className="form-content"
                            type="text"
                            name="user-name"
                            autoFocus="off"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label htmlFor="user-name" className={username ? 'shrink' : ''}>
                            &nbsp;Username
                        </label>
                    </div>
                    <div className='inputField'>
                        <input
                            id="password"
                            className="form-content"
                            type="password"
                            name="password"
                            autoFocus="off"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="password" className={password ? 'shrink' : ''}>
                            &nbsp;Password
                        </label>
                    </div>
                    <div className='inputField'>
                        <input
                            id="cnfm-password"
                            className="form-content"
                            type="password"
                            name="cnfm-password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <label htmlFor="cnfm-password" className={confirmPassword ? 'shrink' : ''}>
                            &nbsp;Confirm Password
                        </label>
                    </div>
                    <input
                        // onClick={() => navigate("/home")}
                        id="submit-btn"
                        type="submit"
                        name="submit"
                        value="SIGNUP"
                    />
                </form>
                <p className='logIN-link'>
                    Already have an account?&nbsp;
                    <a onClick={() => navigate("/")} id="signup">
                        Login
                    </a>
                </p>
            </div>
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    background: url("/background.jpg") no-repeat;
    background-size: cover;
    background-position: 0 0;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    flex-direction: column;
    padding: 20px;
    justify-content: space-around;
    
    @media (min-width: 768px) {
        justify-content: space-evenly;
        flex-direction: row-reverse;
    }

    .textAnimation {
        width: 100%;
        flex-direction: column;
        color: #ffffff;
        display: flex;
        padding-right: 30px;
        letter-spacing: 2px;
        font-weight: 800;
        font-size: 2.5em;
        -webkit-text-stroke: 1px black;
        text-align: center;
        justify-content: baseline;
        
        @media (min-width: 1099px) {
            max-width: 500px;
            display: flex;
            border-radius: 46% 54% 23% 77% / 74% 65% 35% 26%  ;
            background: linear-gradient(to right, #f77a7a, #88ce1e);
            justify-content: center;
            text-align: center;
            height: 500px;
            font-size: 3.6rem;
        }
    }

    div#card {
        width: 90vw;
        background-color: white;
        border-radius: 8px;
        padding: 25px 30px;
        cursor: default;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        @media (min-width: 400px) {
            max-width: 370px;
        }

        #card-title {
            h2 {
                position: relative;
                font-weight: 700;
                font-size: 1.6rem;
                background: linear-gradient(to left, #86b686, #ef5b5b);
                width: fit-content;
                color: transparent;
                background-clip: text;
                -webkit-background-clip: text;
                -moz-background-clip: text;
                -webkit-text-stroke: 1px black;

                &::before {
                    position: absolute;
                    content: "";
                    width: 100%;
                    height: 4px;
                    border-radius: 12px;
                    background: linear-gradient(to left, #86b686, #ef5b5b);
                    bottom: 0;
                    border: 1px solid black;
                }
            }
        }

        form.form {
            margin-top: 40px;

            .inputField {
                position: relative;
                height: 40px;
                width: 100%;
                display: flex;
                align-items: center;
                margin-bottom: 25px;

                input {
                    border: 1px solid #8b8b8b;
                    outline: none;
                    width: 100%;
                    height: 100%;
                    font-size: 16px;
                    padding-left: 10px;
                    border-radius: 4px;
                }

                label {
                    position: absolute;
                    left: 5px;
                    top: 50%;
                    transform: translateY(-50%);
                    font-size: 16px;
                    color: #919191;
                    transition: top 0.2s, font-size 0.2s, color 0.2s;
                    cursor: text;

                    &.shrink {
                        top: 0;
                        font-size: 12px;
                        color: black;
                        background-color: white;
                    }
                }
            }

            #submit-btn {
                display: block;
                text-align: center;
                width: 100%;
                background-color: #aa752f;
                color: white;
                cursor: pointer;
                height: 40px;
                margin-top: 50px;
                margin-bottom: 20px;
                border-radius: 4px;
                &:active {
                    background-color: #6f4a1a;
                }
            }
        }

        .logIN-link {
            text-align: center;
            font-size: 12px;
            a#signup {
                color: #2f48aa;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`;

export default Signup;
