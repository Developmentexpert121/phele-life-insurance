import React from 'react'
import '../assets/DashboardStyle.css'   
import { Container, Row, Col } from 'react-bootstrap';
import AdminHeader from '../layout/Header';
import Side from '../layout/Sidebar';
import AdminFooter from '../layout/Footer';

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