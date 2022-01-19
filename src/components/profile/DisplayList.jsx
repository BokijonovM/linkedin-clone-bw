import React, {useEffect, useState} from "react";
import { GoThreeBars } from "react-icons/go";
import { GrFormEdit } from "react-icons/gr";
import { format, parseISO } from "date-fns";
import EditExperience from "./ProfileCardComponents/EditExperience";

const DisplayList = ({list, userId}) => {
  
  const[showEditExperience, setShowEditExperience]= useState(false)
  

 
    return (
      <div className="d-flex justify-content-between  ">
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
            {list.startDate}-{list.endDate}
          </p>
          <span>{list.area}</span>
          <hr />
        </div>
        <div>
          <span className="h3 text-primary dRelative" onClick={(e)=>setShowEditExperience(true)}>
            <GrFormEdit />
          </span>

          <br />
          <span>
            <GoThreeBars />
          </span>
          <div style={{display:showEditExperience? 'block':'none'}}>{
            userId &&  <EditExperience userId={userId}  />
            }
          </div>
        </div>
      </div>
    );
  
}

export default DisplayList;
