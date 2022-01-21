import {GrFormEdit} from 'react-icons/gr'
import {location, useLocation} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Profile from '../../Profile';
 
const AboutCard = ()=> {
    const[editable, setEditable] = useState(true)
    const location = useLocation()
    useEffect(()=>{
    if(location.pathname!== '/profile'){
    setEditable(false)
    }

},[])
        return <div className='bg-white round-border p-3 mt-3'>
                    <div className='d-flex justify-content-between'>
                        <span className='h4'> About</span>
                        <span className="h4 round-hover"  style={{display:editable? 'block':'none'}}>
    <GrFormEdit/></span>

                    </div>
                    <div className='mt-3'>
                        <span>{Profile.bio}</span>
                    </div>
                </div>
    
}
 
export default AboutCard;