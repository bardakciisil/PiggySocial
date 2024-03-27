import axios from "axios"
export const loginCall = async (userCredentials,dispatch) =>{
    dispatch({type:"LOGIN_START"});
    try {
        const res = await axios.post("auth/login",userCredentials);
        dispatch({type:"LOGIN_OK",payload:res.data});
    } catch (err) {
        dispatch({type:"LOGIN_FAILED",payload:err});
    }
};