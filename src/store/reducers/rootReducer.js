import authReducer from './authReducer'
import incomeReducer from './incomeReducer'
import expenditureReducer from './expenditureReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth:authReducer,
    income:incomeReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer,
    expenditure:expenditureReducer
}); 

export default rootReducer 