import React from 'react'
import '../assets/DashboardStyle.css'   
import AdminHeader from '../layout/Header';
const Dashboard = () =>{
    return (
        <>
        < AdminHeader />
        <div className='content-here'>
            <span>Hello There!!</span>
        </div>
        
        </>
    )
}


export default Dashboard;