import React from 'react'
import {Jumbotron, Container, Badge} from "reactstrap"
const Portfolio = ()=>{

    return(
        <div>
            <Jumbotron>
                <h1>Web Developer Portfolio</h1>
                <p>Full Stack, and Front end. I've used React/Redux, Node.js/Express.js, Ant-Design/Reactstrap, Postgresql,sqlite, Vanilla CSS, </p>
                <div>
                    <Badge onClick={()=>console.log('Show all')} color="secondary"><span>Show all</span></Badge>
                    <Badge color="secondary">Front-end</Badge>
                    <Badge color="secondary">Back-end</Badge>
                    <Badge color="secondary">Full-Stack</Badge>
                    <Badge color="secondary">React.js</Badge>
                    <Badge color="secondary">Redux</Badge>
                    <Badge color="secondary">Node.js</Badge>
                    <Badge color="secondary">Express.js</Badge>
                    <Badge color="secondary">Ant-Design</Badge>
                    <Badge color="secondary">Reactstrap</Badge>
                    <Badge color="secondary">Postgresql</Badge>
                    <Badge color="secondary">Sqlite</Badge>
                    <Badge color="secondary">CSS</Badge>
                </div>
            </Jumbotron>
        </div>
    )

}

export default Portfolio