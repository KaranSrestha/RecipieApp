import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { TypeAnimation } from 'react-type-animation';
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(e) {
        e.preventDefault();

        const credentials = { username, password };

        try {
            const response = await fetch("http://localhost:3000/api/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });

            const result = await response.json();

            if (response.ok) {
                localStorage.setItem("token", result.token);
                console.log(result.token)
                toastr.success("Login successful! Redirecting to Home page...");
                setTimeout(() => {
                    navigate("/home");
                }, 2000);
            } else {
                toastr.error(result.message);
            }
        } catch (error) {
            console.error("Error during login:", error);
            toastr.error("Login failed. Please try again.");
        }
    }

    return (
        <StyledContainer>
            <div className="textAnimation">
                <span style={{ fontSize: '2rem' }}>Share Your,</span>
                <TypeAnimation
                    sequence={['Recipies.', 1000, 'Secrets.', 1000]}
                    wrapper="span"
                    speed={50}
                    style={{ display: 'inline-block' }}
                    repeat={Infinity}
                />
            </div>
            <div id="card">
                <div id="card-title">
                    <h2>LOGIN</h2>
                </div>
                <form method="post" className="form" onSubmit={handleLogin}>
                    <div className='inputField'>
                        <input
                            id="user-username"
                            className="form-content"
                            type="text"
                            name="username"
                            autoFocus="off"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label htmlFor="user-username" className={username ? 'shrink' : ''}>
                            &nbsp;Username
                        </label>
                    </div>
                    <div className='inputField'>
                        <input
                            id="user-password"
                            className="form-content"
                            type="password"
                            name="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="user-password" className={password ? 'shrink' : ''}>
                            &nbsp;Password
                        </label>
                        <span id="f-pass">
                            Forgot password?
                        </span>
                    </div>
                    <input
                        id="submit-btn"
                        type="submit"
                        name="submit"
                        value="LOGIN"
                    />
                </form>
                <p className='signUp-link'>
                    Don't have an account?&nbsp;
                    <a onClick={() => navigate("/signup")} id="signup">
                        Register
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
        flex-direction: row;
    }

    .textAnimation {
        width: 100%;
        flex-direction: column;
        color: #ffffff;
        display: flex;
        padding-left: 30px;
        letter-spacing: 2px;
        font-weight: 800;
        font-size: 2.5em;
        -webkit-text-stroke: 1px black;
        text-align: center;
        justify-content: baseline;
        
        @media (min-width: 1099px) {
            max-width: 500px;
            display: flex;
            border-radius: 37% 63% 79% 21% / 55% 65% 35% 45% ;
            background: linear-gradient(to left, #f77a7a, #88ce1e);
            justify-content: center;
            text-align: left;
            height: 500px;
            font-size: 5rem;
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

                #f-pass {
                    bottom: 0;
                    position: absolute;
                    right: 0;
                    transform: translateY(100%);
                    font-size: 12px;
                    color: #2f48aa;
                    &:hover {
                        text-decoration: underline;
                        cursor: pointer;
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

        .signUp-link {
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

export default Login;
