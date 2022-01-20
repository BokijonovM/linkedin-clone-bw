
import {Modal} from 'react-bootstrap'
const AddEditPic = ({showAddEditPic,handleCloseAddEditPic}) => {



return (
    <Modal show={showAddEditPic} onHide={handleCloseAddEditPic} animation={true}>
    <Modal.Header closeButton>
        <Modal.Title>Helllo</Modal.Title>
    </Modal.Header>
    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    <Modal.Footer>
        
    </Modal.Footer>
    </Modal>
    )
}

export default AddEditPic