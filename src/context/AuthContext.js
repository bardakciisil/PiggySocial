import {createContext, useReducer} from "react";
import AuthReducer from "./AuthReducer"
const INITIAL_STATE = {
    user:{
        "_id":{"$oid":"65fc48776ffcb074ad7db9c7"},
        "username":"isil",
        "email":"isil@gmail.com",
        "password":"$2b$10$i1sNwa68Bn59FFr.QaJa8.Mi/DGLL2YFq21.9ckxlI3ry9Cpnxrxi",
        "profilePicture":"me_night.jpeg",
        "coverPicture":"https://i.ibb.co/xXskj7f/pexels-frank-cone-3279307.jpg",
        "followers":["65fc43540d12a58bcf135dd1","65fc9602cc4cb378f7272ab7"],
        "followings":["65fc43540d12a58bcf135dd1","65fc9602cc4cb378f7272ab7"],
        "createdAt":{"$date":{"$numberLong":"1711032439574"}},
        "updatedAt":{"$date":{"$numberLong":"1711455051966"}},
        "__v":{"$numberInt":"0"},
        "city":"Ankara",
        "desc":"Gülmek güzel şey",
        "from":"Türkiye",
        "relationship":{"$numberInt":"1"}
    },
    isFetching: false,
    error:false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch
            }}
            >
                {children}
        </AuthContext.Provider>
    )
}