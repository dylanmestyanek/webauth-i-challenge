import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Login = ({ history }) => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;

        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:4000/api/auth/login", credentials)
            .then(res => {
                localStorage.setItem("token", JSON.stringify(res.data.cookie));
                history.push("/dashboard")
            })
            .catch(err => console.log("Failed to login", err));
        
        setCredentials({
            username: "",
            password: ""
        })
    }

    return (
        <LoginForm>
            <h1> Log In </h1>
            <form onSubmit={handleSubmit} autoComplete="off">
                <input 
                    type="text"
                    name="username"
                    placeholder="Username"
                    autoComplete="off"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input 
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button type="submit">Log In</button>
            </form>
        </LoginForm>
    )
}

export default Login;

const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    margin: 100px auto 0;
    padding: 20px 0 30px;
    border-radius: 5px;
    box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, .7);
    background: #42dee1;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        input {
            width: 250px;
            padding: 5px;
            border: none;
            border-radius: 3px;
            margin: 10px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, .7);
        }

        button {
            width: 150px;
            padding: 3px 0;
            margin-top: 10px;
            border: none;
            border-radius: 3px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, .7);
            cursor: pointer;
            background: #6decb9;
            transition: .3s ease-in-out;

            &:hover {
                filter: brightness(75%);
            }
        }
    }
`;