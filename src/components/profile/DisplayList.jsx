import React, {Component} from 'react'
import {GoThreeBars} from 'react-icons/go'
import {GrFormEdit} from 'react-icons/gr'

class DisplayList extends React.Component {
    render() { 
        return <div className='d-flex justify-content-between  '>
                <div style={{width:'120px',height:'120px', overflow:'hidden'}}>
                    {/* <img src='https://image.shutterstock.com/image-vector/color-square-composition-text-geometric-600w-1337231156.jpg' className="w-100"/> */}
                    <img src={this.props.list.image} alt={this.props.list.info} className='w-100'/>
                </div>
                <div className='w-100 ml-3'>
                    <p className='h6 bold p-0 m-0'>{this.props.list.title}</p>
                    <p className='p-0 m-0 font14'>{this.props.list.info}</p>
                    <p className='p-0 m-0 font14'> {this.props.list.year}</p>
                    <span>{this.props.list.address}</span>
                    <hr/>
                </div>
                <div>
                <span className="h3 text-primary dRelative"><GrFormEdit/></span>

                    <br/>
                    <span><GoThreeBars/></span>
                </div>
            </div>
    }
}
 
export default DisplayList;