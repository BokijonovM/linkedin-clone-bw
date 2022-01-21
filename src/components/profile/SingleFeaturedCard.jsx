import React,{Component  } from "react"
import {Card} from 'react-bootstrap'



class SingleFeaturedCard extends React.Component {
    render() { 
        return (
            <Card className='mr-3 round-border' style={{ width: '18rem',overflow:'hidden' }}>
            <Card.Img variant="top" src={this.props.info.image} />
            <Card.Body>
            <Card.Title>{this.props.info.title}</Card.Title>
                </Card.Body>
            </Card>
            )
    }
}
 
export default SingleFeaturedCard;