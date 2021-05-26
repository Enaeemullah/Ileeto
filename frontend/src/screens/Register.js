import "./Login.css";
import Card from "@material-ui/core/Card";
import {
    CardActions,
    CardContent,
    Input
} from "@material-ui/core";
import { Link } from 'react-router-dom';

export const Register = () => {
    return (
        <div className="container">
            <Card className="card__container">
                <div className="header">
                    <h3 className='heading'>REGISTER</h3>
                </div>
                <CardContent className="content-container">
                    <div className="logo__container">
                        <p className="logo__typo">ILEETO</p>
                    </div>
                    <p style={{ margin: 0 }}>Username</p>
                    <Input className='input__field' autoFocus='true' />
                    <p style={{ margin: 0 }}>Email</p>
                    <Input className='input__field' />
                    <p style={{ margin: 0 }}>Password</p>
                    <Input className='input__field' />
                    <p style={{ margin: 0 }}>Confirm Password</p>
                    <Input className='input__field' />
                </CardContent>

                <CardActions className="footer">
                    <div className="forgotPassword">
                        <p>Already have an account? <Link to="/login">Sign in</Link></p>
                    </div>
                    <button className="login__btn">Register</button>
                </CardActions>
            </Card>
        </div>
    );
};
