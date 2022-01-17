import {GrFormEdit} from 'react-icons/gr'
import React, { Component, useEffect } from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import {GoPlus} from 'react-icons/go'

class FeaturedCard extends React.Component {
    render() { 
        return <div className='bg-white round-border p-3 mt-3'>
                    <div className='d-flex justify-content-between'>
                        <span className='h4'> Featured</span>
                    <div>
                        <span className="h4 mx-2 round-hover"><IoIosArrowBack/></span>
                        <span className="h4 mx-2 round-hover"><IoIosArrowForward/></span>
                        <span className="h4 mx-2 round-hover"><GoPlus/></span>
                        <span className="h4 round-hover" ><GrFormEdit/></span>
                    </div>

                    </div>
                    <div className='mt-3'>
                        <span>I believe focusing on the origin of any problem is the key to solution.</span>
                    </div>
                </div>
}
 
export default FeaturedCard;

