import {GrFormEdit} from 'react-icons/gr'
import React, { Component } from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import {GoPlus} from 'react-icons/go'
import SingleFeaturedCard from './SingleFeaturedCard';

class FeaturedCard extends React.Component {
    
    state={
        infos:[
            {image:'https://www.cta.org/wp-content/uploads/2021/04/Go-4-1.png', title:'Micro Certification'},
            {image:'https://www.dasharaditsolutions.com/assets/frontend/images/IT-certifications.jpg', title:'Multiple Certified'},
            {image:'https://www.cta.org/wp-content/uploads/2021/09/Go2.png', title:'Sample Certificate'},
            {image:'https://comptiacdn.azureedge.net/webcontent/images/default-source/blogs/most-popular-it-certifications.png?sfvrsn=12755259_6', title:'IT certification'},
        ]
    }

    componentDidMount =()=>{
       
    }

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
                    <div className=' featured-cards mt-3  row-cols-sm-2 row-cols-md-3  row-col-xl-4' >{
                       this.state.infos.map((info,i)=> <SingleFeaturedCard key={i} info={info}/>) 

                    }
                    </div>
                </div>
    }
}
 
export default FeaturedCard;

