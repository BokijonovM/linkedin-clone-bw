import React, { Component } from 'react';
import {Card,Button} from 'react-bootstrap'
import {GiFallingStar} from 'react-icons/gi'
class DashboardCard extends React.Component {
    render() { 
        return <div className='dashboard round-border p-3'>
            <p className='h4'>Your Dashboard</p>
            <div className='d-flex justify-content-between'>
                <span>Private to you</span>
                <span> <GiFallingStar/> All stars</span>
            </div>
            <div className='d-flex justify-content-between text-left bg-white grey-border'>
                <div className='p-2 grey-border-left w-100'>
                    <span className='big-numb'>213</span><br/>
                    <span>Who viewed your profile</span>
                </div>
                <div className='p-2 grey-border-left w-100'>
                    <span className='big-numb'>123</span><br/>
                    <span>Post Views</span>
                </div>
                <div className='p-2  w-100'>
                    <span className='big-numb'>321</span><br/>
                    <span>Search Appearances</span>

                </div>
            </div>
        </div>;
    }
}
 
export default DashboardCard;