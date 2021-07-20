
export const createIncome = (income)=>{
    return (dispatch, getState,{getFirebase, getFirestore})=>{
        const firestore =getFirestore();
        const user_id=getState().firebase.auth.uid;
        firestore.collection('incomes').add({
            ...income,
            IN_EX:"IN",
            user_id:user_id

        }).then(()=>{
            dispatch({type:'CREATE_INCOME', income});
        }).catch((err)=>{
            dispatch({type:'CREATE_INCOME_ERROR', err});

        })
    }
};

export const deleteIncome=(income)=>{
    return (dispatch, getState,{getFirebase, getFirestore})=>{
        const firestore =getFirestore();
        firestore.collection('incomes').doc(income).delete().then(()=>{
            console.log("Document Deleted")
        })
    }
}