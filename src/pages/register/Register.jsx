import "./register.css";
import { useRef,useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import{Country,City} from "country-state-city";
import Select from 'react-select';


export default function Register() {
  const countryData  = Country.getAllCountries();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [, setInputValue] = useState('');

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setSelectedCity();
    setInputValue(selectedOption.label);
  };
  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
  };

  const countryOptions = countryData.map(country => ({
    value: country.isoCode,
    label: country.name
  }));

  const cityOptions = selectedCountry ? City.getCitiesOfCountry(selectedCountry.value).map(city => ({
    value: city.id,
    label: city.name
  })) : [];
  


  const email = useRef();
  const username = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const navigate = useNavigate(); // const history = useHistory()

  const handleClick = async (e) => {
    e.preventDefault();
    if(confirmPassword.current.value !== password.current.value){
      confirmPassword.current.setCustomValidity("Passwords don't match, please try again");
    }else{
      const user = {
        username:username.current.value,
        from:selectedCountry ? selectedCountry.value : "",
        city:selectedCity ? selectedCity.value : "",
        email:email.current.value,
        password:password.current.value
      };
      try {
        await axios.post("/auth/register",user);
        navigate("/login");
      } catch (err) {
  console.log(err);
  
}}
  };
  const handleLoginClick = () => {
    navigate("/login"); 
  };
 

  return (
    <div className="register">
      <h1 className="Title">Reach world on PiggySocial </h1>
      <form className="wrapper" onSubmit={handleClick}>
        <div className="left">
          <input type="text" required ref={username} placeholder="Username" />
          <input type="email" required ref={email} placeholder="Email" />
          <Select
              className="select-input"
              value={selectedCountry}
              onChange={handleCountryChange}
              options={countryOptions}
              placeholder="Country"
              
          />
          <Select
            className="select-input"
            value={selectedCity}
            onChange={handleCityChange}
            options={cityOptions}
            placeholder="City"
          />

        </div>
        <div className="center">
          <div className="line" />
          <div className="or"></div>
        </div>
        <div className="right">

          <input type="password" required minLength="6" ref={password} placeholder="Password" />
          <input type="password" required ref={confirmPassword} placeholder="Confirm Your Password" />
          <button className="submit" type="submit">Complete Registration</button>
          <span className="Link" onClick={handleLoginClick}>Log in into Account </span>
        </div>
      </form>      
    </div>
  );
};

