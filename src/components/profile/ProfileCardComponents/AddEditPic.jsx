
import {Modal} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import { GrFormEdit } from 'react-icons/gr'
import { axios } from 'axios'
const AddEditPic = ({showAddEditPic,handleCloseAddEditPic}) => {

    const[selectedFile,setSelectedFile] = useState(null)
    

    const handleUpload = async(e) => {
        e.preventDefault();

        const formData = new FormData();
        handleCloseAddEditPic()
        formData.append(
            "profile",
            selectedFile
          )

        console.log(formData)
       
    try {
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/61e5270f73d5cb0015395a9d/picture`,{
            method:'POST',
            body: formData,
            headers:{
                Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1MjcwZjczZDVjYjAwMTUzOTVhOWQiLCJpYXQiOjE2NDI0MDc2OTYsImV4cCI6MTY0MzYxNzI5Nn0.B1ilUGNw7LlLAHJb6MgXt6yxthjBHXwzG6x1aMcz1H8'
            }
        })

        if(response.ok){
            let data = await response.json()
            console.log("successfully Uploaded", data)
        } else{
            console.log("error on uploading")
        }
    } catch (error) {
        console.log(error)
    }
}

const handleChange = (e) => {
setSelectedFile(e.target.files[0])
}

return (
    
    <Modal show={showAddEditPic} onHide={handleCloseAddEditPic} animation={true} className='w-100'>
    <Modal.Header closeButton>
        <Modal.Title>Helllo</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <input type='file' id='photo' onChange={(e)=> handleChange(e)}/>
        <span className='pointer round-border grey-border p-2 m-3' onClick={(e) => handleUpload(e) }>upload</span>

       {selectedFile && ( <>
       <p>{selectedFile.name}</p>
        <p className='mb-5'>{selectedFile.type}</p>  </>)}
      
   
       <hr/>
        <div className='d-flex justify-content-between text-center px-2 '>
            <div className='d-flex'>
                <div className='mx-2'>
                    <p> 
                    <i class="bi bi-pencil-fill"></i>
                   </p>
                    <p>Edit</p>
                </div>
                <div className='mx-2'>
                    <p>
                    <i class="bi bi-camera-fill"/>
                    </p>
                    <p>Add Photo</p>
                </div>
                <div className='mx-2'>
                <p><i class="bi bi-image-fill"/></p>
                    <p>Frame</p>
                </div>
            </div>
            <div className='d-flex'>
                <div className='mx-2'>
                    <p><i class="bi bi-trash-fill"/></p>
                    <p>Delete</p>
                </div>
            </div>
        </div>
        </Modal.Body>
    </Modal>
    )
}

export default AddEditPic