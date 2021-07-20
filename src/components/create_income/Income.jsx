import './income.css'
import React, {Component} from 'react';
import Topbar from '../../components/topbar/Topbar'
import {connect} from 'react-redux'
import {createIncome} from '../../store/actions/incomeActions'

class Income extends Component {
  state={
    income_name:'',
    income_money:0,
    income_description:'',
    timestamp:''
  }
  handleChange=(e)=>{
      this.setState({
          [e.target.id]:e.target.value
      })
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.createIncome(this.state)
  }
  render(){
    const {authError}=this.props;
    return (
        <div className="income">
            <Topbar />
            <div className="createIncome">
                <h3>Add Income source</h3>
                <br />
                
                <form onSubmit={this.handleSubmit} name="incomeForm">
                <div>
                  <label className="label">Income Name:</label>
                  <input type="text" className="input" required id="income_name" onChange={this.handleChange}/>
                </div>                      
            <br />
              <div>
                <label className="label">Amount:</label>
                  <input type="text" className="input" required id="income_money" onChange={this.handleChange}/>
                </div> 
            <br />
              <div>
                <label className="label">Date of Income:</label>
                  <input type="date" className="input" required id="timestamp" onChange={this.handleChange}/>
                </div> 
            <br />
              <div>
                <label className="label">Income Description:  </label>
                  <textarea id="income_description"  className="textarea" rows="20" onChange={this.handleChange}></textarea>
                </div>
    
            <button className="button"
              type="reset">
              Reset
            </button>
            <button className="button"
              type="submit">
              Submit
            </button>
          </form> 
          <p className="successText">{authError ? (authError):(null)}</p>

            </div>
        </div>
    )
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    createIncome:(income)=>dispatch(createIncome(income))
  }
}
const mapStateToProps=(state)=>{
  return {
      authError:state.income.authError
  }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Income)