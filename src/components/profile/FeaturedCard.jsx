import { GrFormEdit } from "react-icons/gr";
import React, { useState, useRef, useEffect } from "react";
import {location, useLocation} from 'react-router-dom'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import SingleFeaturedCard from "./SingleFeaturedCard";

const FeaturedCard = () => {
  
  const [infos, setInfos] = useState();
  const location = useLocation()
 const[editable, setEditable] = useState(true)
 
  useEffect(() => {
    if(location.pathname!== '/profile'){
      setEditable(false)
      }
    setInfos([
      {
        image: "https://picsum.photos/640/360",
        title: "Micro Certification",
      },
      {
        image:
          "https://placebear.com/640/360",
        title: "Multiple Certified",
      },
      {
        image: "http://placeimg.com/640/360/any",
        title: "Sample Certificate",
      },
      {
        image:
          "https://comptiacdn.azureedge.net/webcontent/images/default-source/blogs/most-popular-it-certifications.png?sfvrsn=12755259_6",
        title: "IT certification",
      },
    ]);
  }, []);

  const ref = useRef(null);

  const scroll = scrollOffset => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="bg-white round-border  p-3 mt-3">
      <div className="d-flex justify-content-between">
        <span className="h4"> Featured</span>
        <div className='d-flex'>
          <span className="h4 mx-2 round-hover" onClick={e => this.scroll(-20)}>
            <IoIosArrowBack />
          </span>
          <span className="h4 mx-2 round-hover" onClick={e => this.scroll(+20)}>
            <IoIosArrowForward />
          </span>
          <span className="h4 mx-2 round-hover" style={{display:editable? 'block':'none'}}>
            <GoPlus />
          </span>
          <span className="h4 round-hover" style={{display:editable? 'block':'none'}}>
            <GrFormEdit />
          </span>
        </div>
      </div>
      <div className=" featured-cards overflow-y-hided-needed mt-3  row-cols-sm-2 row-cols-md-3  row-col-xl-4">
        {infos &&
          infos.map((info, i) => <SingleFeaturedCard key={i} info={info} />)}
      </div>
    </div>
  );
};

export default FeaturedCard;
