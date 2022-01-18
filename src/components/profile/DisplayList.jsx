import React from "react";
import { GoThreeBars } from "react-icons/go";
import { GrFormEdit } from "react-icons/gr";
import { format, parseISO } from "date-fns";

class DisplayList extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-between  ">
        <div style={{ width: "80px", height: "80px", overflow: "hidden" }}>
          <img
            src="https://image.shutterstock.com/image-vector/color-square-composition-text-geometric-600w-1337231156.jpg"
            className="w-100 mt-2"
          />
          {/* <img src={this.props.list.image} alt="" className="w-100" /> */}
        </div>
        <div className="w-100 ml-3">
          <p className="h5 bold p-0 m-0">{this.props.list.role}</p>
          <p className="p-0 m-0">{this.props.list.company}</p>
          {/* <p className="p-0 m-0 font14">{this.props.list.description}</p> */}
          <p className="p-0 m-0 font14">
            {this.props.list.startDate}-{this.props.list.endDate}
          </p>
          <span>{this.props.list.area}</span>
          <hr />
          {/* "": "CTO",
    "company": "Strive School",
    "startDate": "2019-06-16",
    "endDate": "2019-06-16", 									// could be null
    "description": "Doing stuff",
    "area": "Berlin", */}
        </div>
        <div>
          <span className="h3 text-primary dRelative">
            <GrFormEdit />
          </span>

          <br />
          <span>
            <GoThreeBars />
          </span>
        </div>
      </div>
    );
  }
}

export default DisplayList;
