import React from 'react'
import {Link} from 'react-router-dom'
import {Badge, Card, CardImg, CardTitle, CardBody, CardText, Button } from "reactstrap"


const PortCard = (props)=>{

    return(

        <Card>
            <CardImg top  src={props.pic} alt="yeet"/>
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardText>
                    {props.tags.map((tag,index)=>{
                        if(tag.name !== "Show all"){
                            return <Badge key={index} color="secondary">{tag.name}</Badge>
                        }
                    })}
                </CardText>
                <Link to={`/project/${props.id}`}>
                    <Button color="info">More info...</Button>
                </Link>
            </CardBody>
        </Card>

    )
}

export default PortCard