import "./Login.css";
import Card from "@material-ui/core/Card";
import {
    CardActions,
    CardContent,
    Input
} from "@material-ui/core";
import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <div className="container">

            <Card className="card__container">

                <div className="header">
                    <h3 className='heading'>Sign In</h3>
                </div>

                <CardContent className="content-container">
                    <div className="logo__container">
                        <p className="logo__typo">ILEETO</p>
                    </div>
                    <p style={{ margin: 0 }}>Email</p>
                    <Input className='input__field' autoFocus='true' />
                    <p style={{ margin: 0 }}>Password</p>
                    <Input className='input__field' />
                </CardContent>

                <hr />

                <CardActions className="footer">
                    <div className="forgotPassword">
                        <p>Not a member? <Link to='/register'>Sign Up</Link></p>
                        <Link>Forgot Password?</Link>
                    </div>
                    <button className="login__btn">Sign In</button>
                </CardActions>

            </Card>

        </div>
    );
};
