
export const createExpenditure = (expenditure)=>{
    return (dispatch, getState,{getFirebase, getFirestore})=>{
        const firestore =getFirestore();
        const user_id=getState().firebase.auth.uid;

        firestore.collection('incomes').add({
            ...expenditure,
            IN_EX:"EX",
            user_id:user_id
        }).then(()=>{
            dispatch({type:'CREATE_EXPENDITURE', expenditure});
        }).catch((err)=>{
            dispatch({type:'CREATE_EXPENDITURE_ERROR', err});

        })
    }
};