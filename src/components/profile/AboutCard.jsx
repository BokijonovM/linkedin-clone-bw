import {GrFormEdit} from 'react-icons/gr'
import React, { Component } from 'react';
import Profile from '../../Profile';
 
class AboutCard extends React.Component {
    render() { 
        return <div className='bg-white round-border p-3 mt-3'>
                    <div className='d-flex justify-content-between'>
                        <span className='h4'> About</span>
                        <span className="h4 round-hover" ><GrFormEdit/></span>

                    </div>
                    <div className='mt-3'>
                        <span>{Profile.bio}</span>
                    </div>
                </div>
    }
}
 
export default AboutCard;