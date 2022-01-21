import {GrFormEdit} from 'react-icons/gr'
import React, { Component } from 'react';
 
class ActivityCard extends React.Component {
    render() { 
        return <div className='bg-white round-border p-3 mt-3'>
                    <div className='d-flex justify-content-between'>
                        <span className='h4'> Activity</span>
                        <span className="h4 round-hover" ><GrFormEdit/></span>

                    </div>
                    <div className='mt-3'>
                        <span>I believe focusing on the origin of any problem is the key to solution.</span>
                    </div>
                </div>
    }
}
 
export default ActivityCard;