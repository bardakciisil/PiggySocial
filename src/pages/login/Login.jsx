import "./login.css";

const Login = () => {
  const google = () => {
    window.open("https://accounts.google.com/v3/signin/identifier?hl=en-gb&ifkv=ARZ0qKKnpO-pC14soeKRMHZ0chRHGeiE58yTEWE-psUpmBfRqMoJ1k-DOU5o6xxJmoxZIiKUPkQ-jg&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1661237144%3A1711108550851093&theme=mn&ddm=0");
  };

  const github = () => {
    window.open("https://github.com/login");
  };

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
        <div className="right">
          <input type="text" placeholder="Username or Email" />
          <input type="text" placeholder="Password" />
          <button className="submit">Submit</button>
          <span className="Link">Forgot your Password ?</span>
          <span className="Link">Create an account </span>
        </div>
      </div>
    </div>
  );
};

export default Login;