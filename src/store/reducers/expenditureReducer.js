const initState ={
    authError:null
}
const expenditureReducer =(state=initState,action)=>{
    switch (action.type){
        case 'CREATE_EXPENDITURE':
            return{
                ...state, authError:'Added expenditure successfully'
            }
        case 'CREATE_EXPENDITURE_ERROR':
            console.log('created expenditure error' , action.err)
            return state;
        default:
            return state;
        }
        
}

export default expenditureReducer