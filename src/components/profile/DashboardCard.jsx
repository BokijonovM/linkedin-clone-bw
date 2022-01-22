import React, { useState, useEffect } from 'react';
import {Card,Button} from 'react-bootstrap'
import {GiFallingStar} from 'react-icons/gi'
import {MdGroup} from 'react-icons/md'
import {FaSatelliteDish} from 'react-icons/fa'
import {GiPoliceBadge} from 'react-icons/gi'

const DashboardCard = () => {
  
        return <div className='dashboard round-border p-3 mt-3'>
            <div className='d-flex justify-content-between align-items-center'>
                <div >
                <p className='h4'>Your Dashboard</p>
                    <span className="italics">Private to you</span>
                </div>
                    <span> <GiFallingStar/> All stars</span>
            </div>
            <div className='d-flex justify-content-between text-left bg-white grey-border round-border mt-3'>
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
            <div className="mt-3 p-2 bg-white round-border text-left" style={{fontSize:'14px'}}>

                <div className='d-flex justify-content-between'>
                    <span className='h4 pl-3 pr-3'><FaSatelliteDish/></span>
                    <div className='grey-border-bottom w-100 mb-3'>
                        <p>
                        <span className='h6'> Creator mode: Off</span>
                        <br/>  Get discovered, showcase content on your profile, and get access to creator tools
                        </p>
                    </div>
                </div>

                <div className='d-flex'>
                    <span className='h4 pl-3 pr-3'><MdGroup/></span>
                    <div className='grey-border-bottom w-100 mb-3'>
                        <p>
                        <span className='h6'>My Network</span>
                        <br/>Manage your connections, events, and interests.
                        </p>
                    </div>
                </div>

                <div className='d-flex'>
                    <span className='h4 pl-3 pr-3'><i className="bi bi-bookmark-fill"></i></span>

                    <div>
                        <p>
                        <span className='h6'>My items</span>
                        <br/>Keep track of your jobs, courses and articles.
                        </p>
                    </div>

                </div>
            </div>
        </div>
   
}
 
export default DashboardCard;