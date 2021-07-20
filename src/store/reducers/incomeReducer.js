const initState ={
    authError:null
}
const incomeReducer =(state=initState,action)=>{
    switch (action.type){
        case 'CREATE_INCOME':
            return{
                ...state, authError:'Added income successfully'
            }
        case 'CREATE_INCOME_ERROR':
            console.log('created income error' , action.err)
            return state;
        default:
            return state;
        }
        
}

export default incomeReducer