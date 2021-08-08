import {useState} from 'react';
import {AppleLoginButton, GithubLoginButton, GoogleLoginButton} from "react-social-login-buttons";

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

                    <div style={{width: '500px', height:'600px',margin:'10% auto', boxShadow:'1px 1px 4px 1px #a6a6a6',borderRadius:'10px',textAlign:'center',padding:'30px'}}>
                        <i className="fas fa-lock" style={{height:'40px', fontSize:'25px'}}></i>
                        <p className="h2">Register</p>
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

                                <div className="col-auto">
                                    <button type="submit" className="btn btn-primary mb-3">SIGN UP</button>
                                </div>
                            </form>

                        </div>

                        <div style={{height:230, paddingTop:25}}>
                                <GoogleLoginButton onClick={() => alert("Hello")}><span>Sign up with Google</span></GoogleLoginButton>
                                <AppleLoginButton onClick={() => alert("Hello")}><span>Sign up with Apple</span></AppleLoginButton>
                                <GithubLoginButton onClick={() => alert("Hello")}><span>Sign up with Github</span></GithubLoginButton>
                                <button type="button" className="btn btn-outline-primary btn-sm">Do you have an account?</button>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Register_Form;