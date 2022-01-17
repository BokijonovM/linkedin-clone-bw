

import React, { Component } from 'react';
import {Card,Button} from 'react-bootstrap'

class ProfileCard extends React.Component {
    render() { 
        return <div>
             <Card className='profile-card round-b'>
                <Card.Img variant="top" src={"https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=webp"} />
                <Card.Body>
                    <img className='profile-pic' src="https://miro.medium.com/max/1400/1*yIxkX8nAZkBxDP0gTjNrog.jpeg" alt='linkedin user'/>
                <Card.Text>
                   <h1>Strive School</h1>
                   <p>Loading….Full Stack Developer||Front End ||Back End ||Javascript Developer||React.js Developer||Bootstrap||HTML||CSS
                        Strive School
                        Lisbon, Lisbon, Portugal  <span className='blue-link'>Contact info</span></p>
                    <p><span className='blue-link'>96 Connections</span></p>
                    <div>
                        <Button className='rounded-btn'>Open to</Button>
                        <Button className='rounded-btn'>Add Section</Button>
                        <Button className='rounded-btn'>More</Button>
                    </div>
                    <div>
                        <h3>Open to work</h3>
                        <p>Javascript Developer, Frontend Developer, Back End Developer, Web Developer and React Developer roles
                            <span className='blue-link'>See all details</span></p>
                    </div>
                </Card.Text>
                </Card.Body>
            </Card>
  
        </div>;
    }
}
 
export default ProfileCard;