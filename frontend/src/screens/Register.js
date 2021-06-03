import { useState } from 'react';
import "./Login.css";
import Card from "@material-ui/core/Card";
import {
    CardActions,
    CardContent,
    TextField,
    InputAdornment
} from "@material-ui/core";
import { Link } from 'react-router-dom';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import Alert from '@material-ui/lab/Alert';

export const Register = () => {
    const [serRes, setSerRes] = useState({});
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    })

    let [serResAlert, setSerResAlert] = useState();
    if (serRes.status === 400) {
        serResAlert = <Alert severity="error">Email is already registered</Alert>
    }
    else if (serRes.status === 200) {
        serResAlert = <Alert severity="success">Account created</Alert>
    }

    const { username, email, password, confirm_password } = userData;

    const onChange = e => setUserData({ ...userData, [e.target.name]: e.target.value })
    const onSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            return setSerResAlert(<Alert severity="error">Password should be atleast 6 characters</Alert>)
        }
        if (password !== confirm_password) {
            return setSerResAlert(<Alert severity='error'>Passwords did not match</Alert>);
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
                .then(res => setSerRes(res))
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
                        {serResAlert}
                        <TextField
                            id="standard-basic"
                            label="Username"
                            className='input__field'
                            margin='normal'
                            name='username'
                            required
                            value={username}
                            onChange={e => onChange(e)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='start'>
                                        <PersonIcon />
                                    </InputAdornment>
                                )
                            }}
                        />

                        <TextField
                            id="standard-basic"
                            label="Email"
                            className='input__field'
                            margin='normal'
                            name='email'
                            required
                            value={email}
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
                            id="standard-basic"
                            label="Password"
                            className='input__field'
                            margin='normal'
                            name='password'
                            required
                            type='password'
                            value={password}
                            onChange={e => onChange(e)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='start'>
                                        <LockIcon />
                                    </InputAdornment>
                                )
                            }}
                        />

                        <TextField
                            id="standard-basic"
                            label="Confirm Password"
                            className='input__field'
                            margin='normal'
                            type='password'
                            name='confirm_password'
                            required
                            value={confirm_password}
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
