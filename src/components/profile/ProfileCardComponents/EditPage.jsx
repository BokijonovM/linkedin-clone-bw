import {Modal, Button} from 'react-bootstrap'
import {useState} from 'react'

export default function EditPage () {

const [profile,SetProfile]=useState(
    {
        "name": "Diego",
        "surname": "Banovaz",
        "email": "diego@strive.school",
        "bio": "SW ENG",
        "title": "COO @ Strive School",
        "area": "Berlin",
    }
    
)



return(
    <Modal.Dialog>
    <Modal.Header closeButton>
      <Modal.Title>Edit Intro</Modal.Title>
    </Modal.Header>
  
    <Modal.Body className='d-flex flex-column text-left'>
        <label for='firstName'>First Name *</label>
        <input type='text' id='firstName' value={profile.name} class='' Place/>

        <label for='lastName'>Last Name *</label>
        <input type='text' id='lastName' value={profile.surname} class=''/>

        <label for='addName'>Email Address *</label>
        <input type='email' id='email' value={profile.email} class=''/>

        <label for='bio'>Bio *</label>
        <input type='text' id='bio' value='' class=''/>

        <label for='title'>Title *</label>
        <input type='text' id='title' value={profile.title} class=''/>

        <label for='area'>Area *</label>
        <input type='text' id='area' value={profile.area} class=''/>
    </Modal.Body>
  
    <Modal.Footer>
      <Button variant="secondary">Close</Button>
      <Button variant="primary">Save changes</Button>
    </Modal.Footer>
  </Modal.Dialog>
)
}