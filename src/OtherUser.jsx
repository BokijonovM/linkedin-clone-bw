import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./components/profile/Header/Footer";
import Header from './components/profile/Header/Header'
import Sidebar from "./components/profile/Sidebar/Sidebar";
import Main from "./components/profile/Main";



const OtherUser = ({userId}) =>{

const[ profile , setProfile ] = useState ()
const[ id,setId ] = useState () 

const fetchProfile = async() => {
  let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/",{
    headers:{
      Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU2ZWQ0Y2MyYzE4ODAwMTVhYjk0YjUiLCJpYXQiOjE2NDI1MjM5ODEsImV4cCI6MTY0MzczMzU4MX0.Co-ZiB-K6ynPob1rwDlJ3Nkq2YC6J9ewG5ExQJ2sT00'
    }
  })
  let data = await response.json()
  if(data){
    setProfile(data[5])
    let rajib = data.filter((item)=>item.name.toLowerCase().include('rajib'))

    console.log("data from other page",data[0])
    console.log(rajib)
  
  }
}

useEffect(()=>{
    setId('')
  fetchProfile()
},[])



    return (<Row
                className="justify-content-center mt-4"
                style={{
                marginLeft: "-80px",
                marginRight: "-100px",
                }}
            >
                <Col sm={10} lg={7}>
                {profile && <Main
                    setProfile={setProfile}
                    profile={profile}
                    />}
                </Col>
                <Col sm={0} md={3} lg={3}>
                <Sidebar />
                </Col>
            </Row>
     );
}

export default OtherUser;