

import React, { Component } from 'react';
import {Card,Button} from 'react-bootstrap'
import {GrFormEdit, GrDocument} from 'react-icons/gr'
import {IoIosArrowDown} from 'react-icons/io'
import Profile from '../../Profile';
import DropOpenTo from './ProfileCardComponents/DropOpenTo';
import DropMore from './ProfileCardComponents/DropMore';
import EditPage from './ProfileCardComponents/EditPage';
class ProfileCard extends React.Component {
    state={
        dropdown:"",
        showEditPage:false
    }


    showDropdown = (input) =>{
      if(this.state.dropdown===input){
          this.setState({dropdown:''}) 
    } else{
          this.setState({dropdown:input}) 

      }
    }

/*{_id: '61e5270f73d5cb0015395a9d', name: 'Rajib', surname: 'Jonchhen', email: 'onlyrajib@gmail.com', username: 'onlyrajib', …}
area: "Lisbon,Portugal"
bio: "Loading Full Stack Developer.."
createdAt: "2022-01-17T08:21:35.995Z"
email: "onlyrajib@gmail.com"
image: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
name: "Rajib"
surname: "Jonchhen"
title: "student"
updatedAt: "2022-01-17T08:21:35.995Z"
username: "onlyrajib"
__v: 0
_id: "61e5270f73d5cb0015395a9d"
[[Prototype]]: Object*/

    render() { 
        return <div>
             <Card className='profile-card round-border' >
                <div style={{overflow:'hidden',borderRadius:'10px 10px 0 0'}}>

                <Card.Img variant="top" src={"https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=webp"} />
                </div>
                <span className="edit-bg h4 round-hover" ><GrFormEdit/></span>
                <Card.Body>
                    <img className='profile-pic' src="https://miro.medium.com/max/1400/1*yIxkX8nAZkBxDP0gTjNrog.jpeg" alt='linkedin user'/>
                    <span className="round-hover  h3 text-primary dRelative" onClick={(e)=>this.setState({showEditPage:true})}><GrFormEdit/></span>
                 
                <Card.Text className='mt-n5'>
                <div className='pAbsolute w-100' style={{display:this.state.showEditPage? 'block':'none', zIndex:'10'}}>
                        <EditPage/>
                    </div>
                   <p className='h2 bold'>{this.props.profile.name} {this.props.profile.surname}</p>
                   <p>{this.props.profile.title}
                        Strive School
                        {this.props.profile.area} <span className='h6 bold blue-link'>Contact info</span></p>
                    <p><span className='h6 bold blue-link'>96 Connections</span></p>
                    <div>
                        <Button onClick={(e)=>this.showDropdown(e.target.innerText)} className='h6 bold rounded-btn' style={{backgroundColor:'rgb(9, 79, 168)'}}>Open to</Button>
                        <Button onClick={(e)=>this.showDropdown(e.target.innerText)} variant="outline-secondary" className='h6 bold rounded-btn ml-2'>Add Section</Button>
                        <Button onClick={(e)=>this.showDropdown(e.target.innerText)} variant="outline-secondary" className='h6 bold rounded-btn ml-2'>More</Button>
                    </div>
                    <div className='pRelative'>
                        <div id='drop-open' className='grey-border' style={{display:this.state.dropdown==='Open to'? 'block':'none',borderRadius:'0 10px 10px 10px'}}>
                            <DropOpenTo/>
                        </div>
                        <div id='drop-selection' className='grey-border'  style={{display:this.state.dropdown==='Add Section'? 'block':'none',borderRadius:'10px 10px 10px 10px'}}>
                         
                        </div>

                        <div id='drop-selection' className='grey-border '  style={{display:this.state.dropdown==='More'? 'block':'none',borderRadius:'10px 0 10px 10px'}}>
                           <DropMore/>
                        </div>
                    </div>
                    <div className='mt-3 round-border py-1 px-3' style={{backgroundColor:'rgb(232,229,223)',fontSize:'14px'}}>
                        <div className='m-0 p-0 d-flex justify-content-between'>
                        <span className='bold'>Open to work</span> 
                        <span className="h4 round-hover"><GrFormEdit/></span>
                        </div>
                        <div>
                        <p className='bold'> {this.props.profile.bio}
                           <br/>  <span className='h6 blue-link'>See all details</span>
                            </p>
                        </div>
                    </div>
                </Card.Text>
                </Card.Body>
            </Card>
  
        </div>;
    }
}
 
export default ProfileCard;