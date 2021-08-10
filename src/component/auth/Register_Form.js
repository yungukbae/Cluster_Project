import {useState} from 'react';
import {AppleLoginButton, GithubLoginButton, GoogleLoginButton} from "react-social-login-buttons";
import {Link} from "react-router-dom";

const Register_Form = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pw_check, setPw_check] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        let body = {email: email,password: password};

        try{
            if(password !==  pw_check){
                alert('check your password');
                throw new Error('error');
            }
            console.log('fetching');

        }catch (err){
            console.log(err);
        }

    }

    return (
        <div>
            <div>
                <div className="container">
                    <div style={{position:'relative',width: '500px', height:'600px',margin:'10% auto', boxShadow:'1px 1px 4px 1px #a6a6a6',borderRadius:'10px',textAlign:'center',padding:'30px'}}>
                        <i className="fas fa-lock" style={{height:'40px', fontSize:'25px'}}></i>
                        <p className="h2">REGISTER</p>
                        <hr/>
                        <div style={{height:200, marginTop:5}}>
                            <form onSubmit={handleSubmit} >
                                <div className="mb-2">
                                    <input type="email" className="form-control"
                                           placeholder="Email: example@email.com" onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div className="mb-2">
                                    <input type="password" className="form-control"
                                           placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="mb-2">
                                    <input type="password" className="form-control"
                                           placeholder="Password-Check" onChange={(e) => setPw_check(e.target.value)} />
                                </div>

                                <div className="input-group mb-2">
                                    <input type="text" className="form-control" placeholder="Recipient's username"
                                           aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                        <button className="btn btn-outline-secondary" type="button"
                                                id="button-addon2">Button
                                        </button>
                                </div>

                                <div className="col-auto">
                                    <button type="submit" className="btn btn-primary mb-3">SIGN UP</button>
                                </div>
                            </form>
                        </div>
                        <div style={{ position:'absolute',width:440, bottom:30}}>
                                <Link to="/signin"><button type="button" className="btn btn-outline-primary btn-sm">Do you have an account?</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register_Form;