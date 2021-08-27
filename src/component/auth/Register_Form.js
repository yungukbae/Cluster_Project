import {Link} from "react-router-dom";
import './Auth_Form.css'

const Register_Form = () => {





    return (
        <div>
            <div className="container">
                <div id="auth_content">
                <div id="form">
                    <div id="auth_text_area">
                        <i className="fas fa-user-plus"></i>
                        <p>SIGN UP</p>
                    </div>
                    <div id="auth_input_area">
                        <form action="submit">
                            <input id="input_email" type="email" className="form-control" placeholder="Email: example@email.com"/>
                            <input type="password" className="password form-control" placeholder="Password"/>
                            <input type="password" className="password_check form-control" placeholder="Password Check"/>
                            <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Verify Code" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn btn-outline-secondary btn_verify" type="button" id="button-addon2">Verify
                                </button>
                            </div>
                            <button id="btn_submit">SIGN UP</button>
                        </form>
                    </div>
                    <div id="btn_signin">
                        <Link to="/signin"><button type="button" className="btn btn-outline-primary btn-sm">
                            Do you have an account?
                        </button></Link>
                    </div>
                </div>
                <div id="btn_home_container">
                <Link to="/"><button id="btn_home" type="button" className="btn btn-info">Let's go home!</button></Link>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Register_Form;