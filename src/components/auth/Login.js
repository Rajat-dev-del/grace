import React from 'react'
import {
    link
} from "react-router-dom";
import loginImg from '../../assets/images/login.png'

export default function Login() {
    return (
        <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src={loginImg} alt="sing up"/></figure>
                        <link to="registration" className="signup-image-link">Create an account</link>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Login</h2>
                        <form  className="register-form" >
                            <div className="form-group">
                                <label for="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="your_name"  placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <label for="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="your_pass" placeholder="Password" required />
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="remember-me"  className="agree-term" />
                                <label for="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="forget-Pass"  className="agree-term" />
                                <label for="forget-Pass" className="label-agree-term"><span><span></span></span><a href="forgetpassword.html">Forget Password</a></label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" onclick="window.location='home.html';" name="signin" className="form-submit" value="Log in"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
