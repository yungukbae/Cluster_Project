import {Link} from "react-router-dom";
import './Auth_Form.css';

const Login_Form = () => {




    return(

        <div>
            <div className="container">

                <div id="form">
                    <div id="auth_text_area">
                        <i className="fas fa-sign-in-alt"></i>
                        <p>SIGN IN</p>
                    </div>
                    <div id="auth_input_area">
                        <form action="submit">
                        <input id="input_email" type="email" className="form-control" placeholder="Email: example@email.com"/>
                        <input id="input_password" type="password" className="form-control" placeholder="Password"/>
                        <button id="btn_submit">SIGN IN</button>
                        </form>
                    </div>
                    <div id="btn_signup">
                        <Link to="/signup"><button type="button" className="btn btn-outline-primary btn-sm">
                            Don't you have an account?
                        </button></Link>
                    </div>
                </div>

                <div id="btn_home_container">
                <Link to="/"><button id="btn_home" type="button" className="btn btn-info">Let's go home!</button></Link>
                </div>


            </div>
        </div>

    );
}

export default Login_Form;