import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./components/profile/Header/Footer";
import Header from './components/profile/Header/Header'
import Sidebar from "./components/profile/Sidebar/Sidebar";
import MyMain from "./components/profile/MyMain";



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
    setProfile(data[293])
    let rajib = data.filter((item)=>item.name.toLowerCase().include('rajib'))

    console.log("data from other page",data[11])
    console.log(data[0]._id)
  
  }
}

useEffect(()=>{
    setId('')
  fetchProfile()
},[])



    return (<div>
                {profile && <MyMain profile={profile}/>}
            </div>
     );
}

export default OtherUser;