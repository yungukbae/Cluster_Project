import {GoogleLoginButton,GithubLoginButton,AppleLoginButton} from "react-social-login-buttons";

const Login_Form = () => {



    return(

        <div>

            <div className="container">

                <div style={{width: '500px', height:'600px',margin:'10% auto', boxShadow:'1px 1px 4px 1px #a6a6a6',borderRadius:'10px',textAlign:'center',padding:'30px'}}>
                    <i className="fas fa-lock" style={{height:'40px', fontSize:'25px'}}></i>
                    <p className="h2">LOGIN</p>
                    <hr/>

                    <div style={{height:200, marginTop:30}}>
                    <form action="submit">
                        <div className="mb-3">
                            <input type="text" className="form-control" id="formGroupExampleInput"
                                   placeholder="Email: example@email.com"/>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="formGroupExampleInput2"
                                   placeholder="Password"/>
                        </div>
                    </form>

                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">SIGN IN</button>
                    </div>
                    </div>

                    <div>
                        <GoogleLoginButton onClick={() => alert("Hello")}><span>Start with Google</span></GoogleLoginButton>
                        <AppleLoginButton onClick={() => alert("Hello")}><span>Start with Apple</span></AppleLoginButton>
                        <GithubLoginButton onClick={() => alert("Hello")}><span>Start with Github</span></GithubLoginButton>
                    <button type="button" className="btn btn-outline-primary btn-sm">Don't you have an account?</button>
                    </div>

                </div>

            </div>

        </div>

    );
}

export default Login_Form;