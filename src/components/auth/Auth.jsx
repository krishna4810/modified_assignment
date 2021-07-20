import React from 'react'
import './auth.css'
import Signin from '../auth/signin/Signin'
import Signup from '../auth/signup/Signup'
 
export default function Auth() {
    return (
        <div className="signInUp">
            <div className="signInUpWrapper">
                <div class="row">
                    <div class="column" style={{backgroundColor: "#4e73df"}}>
                        <Signin />
                    </div>
                    <div class="column">
                        <Signup />
                    </div>
                </div>
            </div>
        </div>
    )
}
