import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <h1 className="Title">Reach world on PiggySocial</h1>
      <div className="wrapper">
        <div className="left">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Email" />
        </div>
        <div className="center">
          <div className="line" />
          <div className="or"></div>
        </div>
        <div className="right">

          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Confirm Your Password" />
          <button className="submit">Sign Up</button>
          <span className="Link">Login into Account </span>
        </div>
      </div>      
    </div>
  );
};

export default Register;