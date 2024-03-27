import { useContext, useRef } from "react";
import "./login.css";
import {loginCall} from "../../apiCalls"
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";


const Login = () => {

  const google = () => {
    window.open("https://accounts.google.com/v3/signin/identifier?hl=en-gb&ifkv=ARZ0qKKnpO-pC14soeKRMHZ0chRHGeiE58yTEWE-psUpmBfRqMoJ1k-DOU5o6xxJmoxZIiKUPkQ-jg&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1661237144%3A1711108550851093&theme=mn&ddm=0");
  };

  const github = () => {
    window.open("https://github.com/login");
  };

  const email = useRef();
  const password = useRef();
  const {user,isFetching,error,dispatch} = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall({email:email.current.value,password:password.current.value},dispatch)

  };
  console.log(user);

  return (
    <div className="login">
      <h1 className="Title">Let's select a login method to continue on PiggySocial</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src="assets/google.png"  alt="" className="icon" />
            Google
          </div>
          <div className="loginButton github" onClick={github}>
            <img src="assets/github.png" alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <form className="right" onSubmit={handleClick}>
          <input 
            type="email" 
            placeholder="Email" 
            required ref={email} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            required 
            minLength="6"
            ref={password} 
           />
          <button className="submit">
            {
            isFetching 
            ? (<CircularProgress color="white" size="20px"/>) 
            : "Submit"
            }
            </button>
          <span className="Link">Forgot your Password ?</span>
          <span className="Link">Create an account </span>       
        </form>
      </div>
    </div>
  );
};

export default Login;