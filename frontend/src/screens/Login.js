import { useState } from 'react';
import "./Login.css";
import Card from "@material-ui/core/Card";
import {
    CardActions,
    CardContent,
    InputAdornment,
    TextField
} from "@material-ui/core";
import { Link } from 'react-router-dom';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockIcon from '@material-ui/icons/Lock';

export const Login = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const [serRes, setSerRes] = useState({});

    const { email, password } = userData;

    const onSubmit = e => {
        e.preventDefault();
        // ---------------- GET Request Here ------------------
        fetch('http://localhost:5000/api/users', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                email,
            }),
        })
            .then(res => setSerRes(res))
            .catch(err => console.log(err))
        console.log(serRes)
        // -----------------------------------------------------
    }

    const onChange = e => setUserData({ ...userData, [e.target.name]: e.target.value })

    return (
        <div className="container__main">

            <Card className="card__container">

                <div className="header">
                    <h3 className='heading'>Sign In</h3>
                </div>
                <form onSubmit={e => onSubmit(e)}>
                    <CardContent className="content-container">

                        <div className="logo__container">
                            <p className="logo__typo">ILEETO</p>
                        </div>

                        <TextField
                            id="standard-basic"
                            type='email'
                            label="Email"
                            className='input__field'
                            margin='normal'
                            name='email'
                            value={email}
                            required
                            onChange={e => onChange(e)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='start'>
                                        <MailOutlineIcon />
                                    </InputAdornment>
                                )
                            }}
                        />

                        <TextField
                            type='password'
                            id='standard-basic'
                            label='Password'
                            className='input__field'
                            margin='normal'
                            name='password'
                            value={password}
                            required
                            onChange={e => onChange(e)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='start'>
                                        <LockIcon />
                                    </InputAdornment>
                                )
                            }}
                        />

                    </CardContent>

                    <hr />

                    <CardActions className="footer">
                        <div className="forgotPassword">
                            <p>Not a member? <Link to='/register'>Sign Up</Link></p>
                            <Link to='/forgot'>Forgot Password?</Link>
                        </div>
                        <button className="login__btn">Sign In</button>
                    </CardActions>
                </form>
            </Card>

        </div>
    );
};
