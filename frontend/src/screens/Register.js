import { useState } from 'react';
import "./Login.css";
import Card from "@material-ui/core/Card";
import {
    CardActions,
    CardContent,
    Input
} from "@material-ui/core";
import { Link } from 'react-router-dom';

export const Register = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    })

    const { username, email, password, confirm_password } = userData;

    const onChange = e => setUserData({ ...userData, [e.target.name]: e.target.value })
    const onSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            return alert("Password should be atleast 6 characters")
        }
        if (password !== confirm_password) {
            return alert('Passwords did not match')
        }
        else {
            // ---------------- POST Request Here ------------------
            fetch('http://localhost:5000/api/users', {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({
                    username,
                    email,
                    password
                }),
            })
                .then(res => res.text())
                .then(text => alert(text))
                .catch(err => console.log(err))
            // -----------------------------------------------------
        }
    }

    return (
        <div className="container__main">
            <Card className="card__container">
                <div className="header">
                    <h3 className='heading'>REGISTER</h3>
                </div>
                <form onSubmit={e => onSubmit(e)}>
                    <CardContent className="content-container">
                        <div className="logo__container">
                            <p className="logo__typo">ILEETO</p>
                        </div>
                        <p style={{ margin: 0 }}>Username</p>
                        <Input
                            className='input__field'
                            type='text'
                            name='username'
                            value={username}
                            onChange={e => onChange(e)}
                            required />
                        <p style={{ margin: 0 }}>Email</p>
                        <Input
                            className='input__field'
                            type='email'
                            name='email'
                            value={email}
                            onChange={e => onChange(e)}
                            required />
                        <p style={{ margin: 0 }}>Password</p>
                        <Input
                            className='input__field'
                            type='password'
                            name='password'
                            value={password}
                            onChange={e => onChange(e)}
                            required />
                        <p style={{ margin: 0 }}>Confirm Password</p>
                        <Input
                            className='input__field'
                            type='password'
                            name='confirm_password'
                            value={confirm_password}
                            onChange={e => onChange(e)}
                            required />
                    </CardContent>

                    <CardActions className="footer">
                        <div className="forgotPassword">
                            <p>Already have an account? <Link to="/login">Sign in</Link></p>
                        </div>
                        <button className="login__btn">Register</button>
                    </CardActions>
                </form>
            </Card>
        </div>
    );
};
