import "./Login.css";
import Card from "@material-ui/core/Card";
import { Button, CardActions, CardContent, Input } from "@material-ui/core";

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
                        <p>Not a member? Sign Up</p>
                        <p>Forgot Password?</p>
                    </div>
                    <button className="login__btn">Sign In</button>
                </CardActions>
            </Card>
        </div>
    );
};
