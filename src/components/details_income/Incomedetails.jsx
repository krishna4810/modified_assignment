import './incomedetails.css'
import Topbar from '../../components/topbar/Topbar'
import {connect} from 'react-redux'
import React, {Component} from 'react'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import moment from 'moment'
import DeleteIcon from '@material-ui/icons/Delete';
import {deleteIncome} from '../../store/actions/incomeActions'

class Incomedetails extends Component {
    handleDelete = (e)=>{
        this.props.deleteIncome(e)
    }
   
    render(){
        const {incomes,auth}=this.props;
        var UID=auth.uid;        
    return (
        <div className="incomeDetails">
          <Topbar />
            <div className="incomeStatus">
                <h3 className="detailsTitle">Your Income Details</h3>
                <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Description</th>
                    <th>Delete Income</th>
                </tr>
                </thead>
                <tbody>
                {incomes && incomes.map(income =>{
                    if(income.user_id==UID){
                        return(
                            <tr key={income.id}>
                                <td >{moment(income.timestamp).format('LL')}</td>
                                <td className="name">{income.income_name}</td>
                                <td className="money">{income.income_money}</td>
                                <td className="description">{income.income_description} </td>
                                <td>
                                    <button onClick={()=>{this.handleDelete(income.id)}} title="Delete item" className="deleteButton"><DeleteIcon /></button>
                                </td>
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
const mapDispatchToProps=(dispatch)=>{
    return{
        deleteIncome:(income)=>dispatch(deleteIncome(income))
        
    }
}
export default compose(
    firestoreConnect(()=>[
        
        { collection:'incomes',where: [['IN_EX','==',"IN"]]},

    ]),
    connect(mapStateToProps,mapDispatchToProps),
)(Incomedetails)
