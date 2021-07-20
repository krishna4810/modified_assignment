import './transactiondetails.css'
import Topbar from '../../components/topbar/Topbar'
import React, {Component} from 'react'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {connect} from 'react-redux'
import moment from 'moment'

class Transactiondetails extends Component {
    render(){
        const {incomes,auth}=this.props;
        var UID=auth.uid;    
    return (
        <div className="incomeDetails">
        <Topbar />
        <div className="incomeStatus">
        <h3 className="detailsTitle">Transaction Details</h3>
        <table> 
        <thead>
        <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Amount</th>
            <th>IN/EX</th>
        </tr>
        </thead>
        <tbody>
        {incomes && incomes.map(income =>{
            if(income.user_id==UID){
            return(
            <tr  key={income.id} title={income.income_description}>
                <td >{moment(income.timestamp).format('LL')}</td>
                <td className="name">{income.income_name}</td>
                <td className="money">{income.income_money}</td>
                <td className="description">{income.IN_EX} </td>
            </tr>          
            )
            }
        })}
        </tbody>
        </table> 
    </div>
        </div>
    )
}
}
const mapStateToProps=(state)=>{
    return{
        incomes:state.firestore.ordered.incomes,
        auth:state.firebase.auth

    }
}
export default compose(
    firestoreConnect((props)=>[
        { collection:'incomes'}   
        ]),
    connect(mapStateToProps),
)(Transactiondetails)
