export const LoginStart = (userCredentials) => ({
    type:"LOGIN_START",
});
export const LoginOk = (user) => ({
    type:"LOGIN_OK",
    payload:user,
});
export const LoginFailed = (error) => ({
    type:"LOGIN_FAILED",
    payload:error
});