import React from 'react'
import {Button,Jumbotron} from 'reactstrap'
import {useSelector,useDispatch} from 'react-redux'
import {getOneProject} from "../Actions/PortfolioActions"
// import Country from "../img/Country.png"

const ProjectPage = (props)=>{


    const dispatch = useDispatch()

    const Portfolio = useSelector(state=>state.Projects)

    let Project = Portfolio.single
    
    React.useEffect(()=>{

        dispatch(getOneProject(props.match.params.id))
        
    },[props.match.params.id])

    if(!Portfolio.single){
        return(<div>
            loading....
        </div>)
    }

    return(
        <div className="project">
        {console.log(Portfolio.single)}
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
                <img src={Project.picture}  alt="yeet"/>
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
                    {Project.tags.map((tag,index)=>(
                        <li key={index}>{tag.name}</li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default ProjectPage