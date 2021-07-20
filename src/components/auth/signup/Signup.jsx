import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp} from '../../../store/actions/authActions'
import './signup.css'
 class Signup extends Component {
    state={
        email:'',
        password:'',
        firstName:'',
        lastName:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.signUp(this.state)  
      }
    render() {
        const {authError} = this.props;
        return (
            
            <div className="signup">
                <div className="signupWrapper">
                       
                        <h3 className="signupTitle">
                            Sign Up
                        </h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-field">
                            <label className="labelUp">First Name:</label>
                            <input type="text" id="firstName" className="signUpInput" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label className="labelUp">Last Name:</label>
                            <input type="text" id="lastName" className="signUpInput" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label className="labelUp">Email:</label>
                            <input type="text" id="email" className="signUpInput" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label className="labelUp">Password:</label>
                            <input type="password" id="password" className="signUpInput" onChange={this.handleChange}/>
                        </div>
                        <button className="buttonSign" type="submit">Sign Up</button>
                    </form>
                    <p className="warningText">{authError ? (authError):(null)}</p>

                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        auth:state.firebase.auth,
        authError:state.auth.authError
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        signUp:(newUser)=>dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)
