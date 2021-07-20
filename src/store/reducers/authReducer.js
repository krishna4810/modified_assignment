const initState ={
    authError:null
}
const authReducer =(state=initState,action)=>{
    switch (action.type){
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return{
                ...state, authError:null
            };
        case 'LOGIN_ERROR':
            console.log('login failed');
            return {
                ...state, authError:'Incorrect Email or password'
            };
        case 'SIGNOUT_SUCCESS':
            console.log('logout yasi');
            return state;

        case 'SIGNUP_SUCCESS':
            console.log('SIGNUp yasi');
            return{
                ...state, authError: null
            };        
        case 'SIGNUP_ERROR':
            console.log('SIGNUP failed');
            return {
                ...state, authError: action.err.message
            };    
        default:
            return state;
        }
}

export default authReducer