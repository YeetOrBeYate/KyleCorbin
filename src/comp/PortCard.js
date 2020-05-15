import React from 'react'
import {Badge, Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap"


const PortCard = (props)=>{

    return(

        <Card>
            <CardImg top height="50%" width='80%' src={props.pic} alt="yeet"/>
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardText>
                    {props.tags.map((tag,index)=>(
                        <Badge key={index} color="secondary">{tag}</Badge>
                    ))}
                </CardText>
            </CardBody>
        </Card>

    )
}

export default PortCard