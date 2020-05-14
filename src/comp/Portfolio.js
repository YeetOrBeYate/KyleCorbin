import React from 'react'
import {Jumbotron, Container, Badge, } from "reactstrap"
const Portfolio = ()=>{

    return(
        <div>
            <Jumbotron>
                <h1>Web Developer Portfolio</h1>
                <p>Full Stack, and Front end. I've used React/Redux, Node.js/Express.js, Ant-Design/Reactstrap, Postgresql,sqlite, Vanilla CSS, </p>
                <div>
                    <Badge onClick={()=>console.log('Show all')} color="secondary"><span>Show all</span></Badge>
                    <Badge color="secondary"><span>Front-end</span></Badge>
                    <Badge color="secondary"><span>Back-end</span></Badge>
                    <Badge color="secondary"><span>Full-Stack</span></Badge>
                    <Badge color="secondary"><span>React.js</span></Badge>
                    <Badge color="secondary"><span>Redux</span></Badge>
                    <Badge color="secondary"><span>Node.js</span></Badge>
                    <Badge color="secondary"><span>Express.js</span></Badge>
                    <Badge color="secondary"><span>Ant-Design</span></Badge>
                    <Badge color="secondary"><span>Reactstrap</span></Badge>
                    <Badge color="secondary"><span>Postgresql</span></Badge>
                    <Badge color="secondary"><span>Sqlite</span></Badge>
                    <Badge color="secondary"><span>CSS</span></Badge>
                </div>
            </Jumbotron>
        </div>
    )

}

export default Portfolio