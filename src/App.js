import React, {Component} from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/pages/Home'
import './App.css'
import CreateIncome from './components/create_income/Income';
import CreateExpenditure from './components/create_expenditure/Expenditure';
import Incomedetails from './components/details_income/Incomedetails'
import Expendituredetails from './components/details_expenditure/Expendituredetails'
import Transactiondetails from './components/transaction_details/Transactiondetails'
import Auth from './components/auth/Auth'

function App(props) {
    const {auth} = props;
    // console.log(auth);
    return (
      
      <BrowserRouter> 
      
      {auth.uid ? 
        <div className="container">
          <Sidebar />
            <Switch>
              <Route exact path="/" >
                <Home />
              </Route>  
              <Route path="/income" component={CreateIncome} />
                          
              <Route path="/expenditure">
                <CreateExpenditure />
              </Route>          
              <Route path="/incomedetails">
                <Incomedetails />
              </Route>          
              <Route path="/expendituredetails">
                <Expendituredetails />
              </Route>            
              <Route path="/transactiondetails">
                <Transactiondetails />
              </Route>
            </Switch>
        </div> : <Auth /> }  
             
      </BrowserRouter>
    );
  
}
const mapStateToProps=(state)=>{
  return{
      auth:state.firebase.auth
  }
}
export default connect(mapStateToProps)(App);
