import Header from "./components/profile/Header/Header"
import {Container, Row, Col} from 'react-bootstrap'
import MyMain from "./components/profile/MyMain"
import Footer from "./components/profile/Header/Footer"
import OtherUser from "./OtherUser"

const MyLayout = ({profile}) => {

    return(
    <div>
        
        
            <Row className="header-row-profile">
               {profile &&  <Header profile={profile}/>}
                </Row>
                <Row className="profile-myMain-row" >
                   <OtherUser/>
                </Row>
                <Row>
                    <Footer/>
            </Row>
           
    </div>

    )
}

export default MyLayout
