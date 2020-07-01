import React from 'react'
import CarouselUnit from "./Carousel"
import {Button,Jumbotron,Spinner} from 'reactstrap'
import {useSelector,useDispatch} from 'react-redux'
import {getOneProject} from "../Actions/PortfolioActions"


const ProjectPage = (props)=>{

    //we need dispact and out global state
    const dispatch = useDispatch()
    const Portfolio = useSelector(state=>state.Projects)
    //this is the object in state that the file needs
    let Project = Portfolio.single

    // Component did mount lifecycle to make the get request
    // Also using the component did update to make another request when the url changes
    React.useEffect(()=>{
        
        dispatch(getOneProject(props.match.params.id))
        
    },[props.match.params.id])

    
    
    if(!Portfolio.single){
        return(
            <div>
                <Spinner color="info" style={{ width: '3rem', height: '3rem' }} type="grow"/>
            </div>
        )
    }

    return(
        <div className="project">
            <Jumbotron>
                <h1>{Project.name}</h1>
                <p>{Project.description}</p>
                <div className="headerFlex">
                    <a href={Project.url} target="_blank" rel="noopener noreferrer">
                        <Button color="info">Visit the Website</Button>
                    </a>
                    <div id='gitLinks'>
                        {Project.repos.map((git,index)=>(
                            <a key={index} href={git.url} target="_blank" rel="noopener noreferrer">{git.name}</a>
                        ))}
                    </div>
                </div>
            </Jumbotron>
            <div className="projectImage">
                <CarouselUnit Project ={Project}/>
            </div>
            <section className="projectSection">
                <h1>About this project</h1>
                <hr></hr>
                <p>{Project.about}</p>
            </section>
            <section className="projectSection">
                <h1>Technology used</h1>
                <hr></hr>
                <ul>
                    {Project.tags.map((tag,index)=>{
                        if(tag.name !== "Show all"){

                            return <li key={index}>{tag.name}</li>
                        }
                    })}
                </ul>
            </section>
        </div>
    )
}

export default ProjectPage