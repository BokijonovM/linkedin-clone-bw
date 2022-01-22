import React, {useEffect, useState} from "react";
import {location, useLocation} from 'react-router-dom'
import { GoThreeBars } from "react-icons/go";
import { GrFormEdit } from "react-icons/gr";
import { format, parseISO } from "date-fns";
import AddEditExperience from "./ProfileCardComponents/AddEditExperience";

const DisplayList = ({list, userId, fetchExperiences}) => {
  
  const[showAddExperience, setShowAddExperience]= useState(false)
  
  

  const location = useLocation()
 const[editable, setEditable] = useState(true)
 
 useEffect(()=>{

   if(location.pathname!== '/profile'){
   setEditable(false)
   }
 },[])
 
 
 
    return (
      <div className="exp-card d-flex justify-content-between  ">
        <div style={{ width: "80px", height: "80px", overflow: "hidden" }}>
          <img
            src="https://image.shutterstock.com/image-vector/color-square-composition-text-geometric-600w-1337231156.jpg"
            className="w-100 mt-2"
          />
          {/* <img src={list.image} alt="" className="w-100" /> */}
        </div>
        <div className="w-100 ml-3">
          <p className="h5 bold p-0 m-0">{list.role}</p>
          <p className="p-0 m-0">{list.company}</p>
          {/* <p className="p-0 m-0 font14">{list.description}</p> */}
          <p className="p-0 m-0 font14">
            {/* {format(new Date(list.startDate), 'MM do yyyy')} -
            {format(new Date(list.endDate), 'MM do yyyy')} */}
          </p>
          <span>{list.area}</span>
          <hr />
        </div>
        <div>
          <span className="h3  round-hover text-primary dRelative d-hover" onClick={(e)=>setShowAddExperience(true)} style={{display:editable? 'block':'none'}}>
            <GrFormEdit />
          </span>

          <br />
          <span className="pl-2 round-border grey-hover" style={{display:editable? 'block':'none'}}>
            <GoThreeBars />
          </span>

          <div style={{ marginTop: "60px" }}>
          <div
              className="pAbsolute w-100 modal-box"
              style={{
                display: showAddExperience? "block" : "none",
              }}
             
            >
              {userId && (
                <AddEditExperience  fetchExperiences={fetchExperiences} userId={userId} list={list} setShowAddExperience={setShowAddExperience}/>
              )}
          </div>
          </div>

        </div>
      </div>
    );
  
}

export default DisplayList;
