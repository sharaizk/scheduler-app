import React,{useEffect} from 'react'
import './LandingPage.css'
import Card from '../Components/Card';
import adminSvg from '../Assets/adminSvg.svg'
import employeeSvg from '../Assets/employeeSVG.svg'
import {connect} from 'react-redux'
import {checkToken} from '../redux/actions'
const LandingPage = ({checkToken}) =>{
    useEffect(() => {
        checkToken()
    })
    return(
        <div className="container">
            <div className="nameContainer">
            <h1 className="appName">Time Scheduler</h1>
            </div>
            <div className="cardContainer">
            <Card svg={adminSvg} as="Admin" to="/admin/login"/>
            <Card svg={employeeSvg} as="Employee" to="/user/login"/>
            </div>
        </div>
    )
}

export default connect(null, {checkToken})(LandingPage)