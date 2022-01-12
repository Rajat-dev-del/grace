import React ,{useState} from 'react'

import signup from '../../assets/images/signup.jpg'

export default function Register() {
    const initialValues = {
        name : "",
        email: "",
        mobile : "",
        password: "",
        companyName : "",
        designation:"",
    }
    const [registerData,setRegisterData] = useState(initialValues);
    const onChange = (e)=>{
        setRegisterData({
            ...registerData, [e.target.name]: e.target.value
        })
        console.log(registerData);
    }
    return (
        <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Registration</h2>
                        <form method="POST" className="register-form" >
                            <div className="form-group">
                                <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" placeholder="Your Name" onChange={onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" placeholder="Your Email" onChange={onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass"><i className="zmdi zmdi-phone"></i></label>
                                <input type="text" name="mobile"  placeholder="mobile No." onChange={onChange}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="pass" placeholder="Password" onChange={onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="CompanyName"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="companyName"  placeholder="Company Name" onChange={onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="designation"><i className="zmdi zmdi-graduation-cap"></i></label>
                                <input type="text" name="designation" placeholder="Designation" onChange={onChange}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="companyType" ><i className="zmdi zmdi-balance"></i>Company Type</label>
                                <select className="form-control exampleFormControlSelect1" name="companyType"  onChange={onChange}>
                                    <option value="Insurance" selected>Insurance</option>
                                    <option value="Banking">Banking</option>
                                    <option value="Loan">Loan</option>
                                    <option value="Education">Education</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="agreeTerm"  className="agree-term"/>
                                    <label htmlFor="agree-term" className="label-agree-term">
                                <span>
                                    <span></span>
                                </span>I agree all statements in  <a href="terms" className="term-service">Terms of service</a></label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" className="form-submit" value="Register" />
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src={signup} alt="sing up"/></figure>
                        <a href="index.html" className="signup-image-link">I am already member</a>
                    </div>
                </div>
            </div>
        </section>

    )
}
