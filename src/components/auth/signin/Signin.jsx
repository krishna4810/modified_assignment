import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './signin.css'
import {connect} from 'react-redux'
import {signIn} from '../../../store/actions/authActions'
import Signup from '../signup/Signup'
 class Signin extends Component {
    state={
        email:'',
        password:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.signIn(this.state);
    }
    render() {
        const {authError}=this.props;
        return (
                <div className="signin">
                    <div className="signinWrapper">
                            <h3 className="signinTitle">
                                Sign In
                            </h3>
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-field">
                                <label className="labelIn">Email:</label>
                                <input type="text" id="email" className="signinInput" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label className="labelIn">Password:</label>
                                <input type="password" id="password" className="signinInput" onChange={this.handleChange}/>
                            </div>
                            <button className="buttonSignIn" type="submit">Sign In</button>
                        </form>
                        <p className="warningText">{authError ? (authError):(null)}</p>
                    </div>
                </div>            
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        signIn:(credentials)=>dispatch(signIn(credentials))
    }
}
const mapStateToProps=(state)=>{
    return {
        authError:state.auth.authError
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Signin)
