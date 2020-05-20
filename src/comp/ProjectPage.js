import React from 'react'
import {Button,Jumbotron} from 'reactstrap'
import Country from "../img/Country.png"

const ProjectPage = ()=>{

    return(
        <div className="project">
            <Jumbotron>
                <h1>Country Directory</h1>
                <p> Ant-design layout driven by a React-Redux front end</p>
                <div className="headerFlex">
                    <Button color="info">Visit the Website</Button>
                    <span>Github</span>
                </div>
            </Jumbotron>
            <div className="projectImage">
                <img src={Country} width="970px" 
                height="562px" alt="yeet"/>
            </div>
            <section className="projectSection">
                <h1>About this project</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </section>
            <section className="projectSection">
                <h1>Technology used</h1>
                <ul>
                    <li>tag1</li>
                    <li>tag2</li>
                    <li>tag3</li>
                    <li>tag4</li>
                </ul>
            </section>
        </div>
    )
}

export default ProjectPage