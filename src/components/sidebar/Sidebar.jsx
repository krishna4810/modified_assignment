import React,{useState} from 'react'
import './sidebar.css'
import {Link} from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

 function Sidebar(props) {
     const{profile,email}=props
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
            <div className="Bio"> 
                        <center>                      
                            <p className="Avatar" >{profile.initials}</p>
                               <h3 className="sidebarName">{profile.firstName} {profile.lastName}</h3>
                            <h3 className="sidebarEmail">{email.email}</h3>
                        </center>
                    </div>
                <div className="sidebarMenu">
                    
                    <hr/>
                    <div className="sidebarList">
                    <li>
                        <Link to="/" className="sidebarListItem">
                            <HomeIcon className="sidebarIcon"/> 
                            Dashboard
                        </Link>
                    </li>
                    <h3 className="sidebarTitle">Add Details</h3>
                            
                            <li>
                            <Link className="sidebarListItem" to="income">
                                <AddCircleOutlineIcon className="sidebarIcon"/> 
                                Add Income Source
                            </Link>    
                            </li>
                            <li >
                            <Link className="sidebarListItem" to="expenditure">
                                <AddCircleOutlineIcon className="sidebarIcon"/> 
                                Add Expenditure
                            </Link>    
                            </li>       
                       </div> 
                </div>
                <hr />
                <div className="sidebarMenu">
                       <h3 className="sidebarTitle">View Details</h3>
                        <div className="sidebarList">
                            <li>
                            <Link className="sidebarListItem" to="incomedetails">
                                <VisibilityIcon className="sidebarIcon"/> 
                                Income Source
                            </Link>        
                            </li>
                            <Link className="sidebarListItem" to="expendituredetails">
                                <VisibilityIcon className="sidebarIcon"/> 
                                Expenditure
                            </Link>   
                            <a className="sidebarListItem" href="/transactiondetails">
                            <VisibilityIcon className="sidebarIcon"/> 
                            Transaction History</a> 
                                
                       </div> 
                </div>
                <hr />
                <center className="Logout">
                    <ExitToAppIcon className="logoutIcon" onClick={props.signOut}/>
                    <p className="logoutText" onClick={props.signOut}>Log Out</p>
                </center>
            </div>
        </div>

    )
}
const mapDispatchToProps=(dispatch)=>{
    return{

        signOut:()=>dispatch(signOut())
    }
}
const mapStateToProps=(state)=>{
    console.log(state)
    return {
        profile:state.firebase.profile,
        email:state.firebase.auth
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar)
