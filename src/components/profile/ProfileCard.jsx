

import React, { Component } from 'react';
import {Card,Button} from 'react-bootstrap'
import {GrFormEdit} from 'react-icons/gr'
class ProfileCard extends React.Component {
    render() { 
        return <div>
             <Card className='profile-card round-border' style={{overflow:'hidden'}}>
                <Card.Img variant="top" src={"https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=webp"} />
                <span className="edit-bg h4 round-hover" ><GrFormEdit/></span>
                <Card.Body>
                    <img className='profile-pic' src="https://miro.medium.com/max/1400/1*yIxkX8nAZkBxDP0gTjNrog.jpeg" alt='linkedin user'/>
                    <span className="h3 text-primary"><GrFormEdit/></span>
                <Card.Text>
                   <h1>Strive School</h1>
                   <p>Loading….Full Stack Developer||Front End ||Back End ||Javascript Developer||React.js Developer||Bootstrap||HTML||CSS
                        Strive School
                        Lisbon, Lisbon, Portugal  <span className='h6 bold blue-link'>Contact info</span></p>
                    <p><span className='h6 bold blue-link'>96 Connections</span></p>
                    <div>
                        <Button className='h6 bold rounded-btn'>Open to</Button>
                        <Button variant="outline-secondary" className='h6 bold rounded-btn ml-2'>Add Section</Button>
                        <Button variant="outline-secondary" className='h6 bold rounded-btn ml-2'>More</Button>
                    </div>
                    <div>
                        {/* <div>
                       <h6> Hiring</h6>
                            Share that you’re hiring and attract qualified candidates
                        </div>
                        <div>
                        Providing services
                            Showcase services you offer so new clients can discover you
                        </div> */}
                    </div>
                    <div className='mt-3 round-border py-1 px-3' style={{backgroundColor:'rgb(232,229,223)',fontSize:'14px'}}>
                        <div className='m-0 p-0 d-flex justify-content-between'>
                        <span>Open to work</span> 
                        <span className="h4 round-hover"><GrFormEdit/></span>
                        </div>
                        <p className='bold'> Javascript Developer, Frontend Developer, Back End Developer, Web Developer and React Developer roles
                           <br/>  <span className='h6 blue-link'>See all details</span>
                            </p>
                    </div>
                </Card.Text>
                </Card.Body>
            </Card>
  
        </div>;
    }
}
 
export default ProfileCard;