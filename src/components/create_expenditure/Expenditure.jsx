import React, {Component} from 'react';
import {connect} from 'react-redux'
import Topbar from '../../components/topbar/Topbar'
import { createExpenditure } from '../../store/actions/expenditureAction';
class Expenditure extends Component {
        
      state={
        income_name:'',
        income_money:'',
        income_description:'',
        timestamps:''
      }
      handleChange=(e)=>{ 
          this.setState({
              [e.target.id]:e.target.value
          })
      }
      handleSubmit=(e)=>{
          e.preventDefault();
          this.props.createExpenditure(this.state)
      }
      
    render(){
      const {authError}=this.props;

    return (
        <div className="income">
            <Topbar />
            <div className="createIncome">
                <h3>Add Expenditure</h3>
                <br />
              
                  <form onSubmit={this.handleSubmit}>
                        <div>
                          <label className="label">Expenditure Name:</label>
                            <input type="text" className="input" required id="income_name" onChange={this.handleChange}/>
                        </div>                      
                    <br />
                        <div>
                            <label className="label">Expenditure:</label>
                            <input type="text" className="input" required id="income_money" onChange={this.handleChange}/>
                        </div> 
                    <br />
                        <div>
                            <label className="label">Date of Expenditure: </label>
                            <input type="date" className="input" required id="timestamps" onChange={this.handleChange}/>
                        </div> 
                    <br />
                        <div>
                          <label className="label">Expenditure Description:  </label>
                          <textarea id="income_description"  className="textarea" rows="20" onChange={this.handleChange}></textarea>         
                        </div>
            
                    <button className="button" 
                      type="reset" >
                      Reset
                    </button>
                    <button className="button"
                      type="submit">
                      Submit
                    </button>
                  </form>
                  <p className="successText" id="error">{authError ? (authError):(null)}</p>

            </div>
        </div>
    )
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    createExpenditure:(expenditure)=>dispatch(createExpenditure(expenditure))
  }
}
const mapStateToProps=(state)=>{
  return {
      authError:state.expenditure.authError
  }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Expenditure)
