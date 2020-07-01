import React from 'react'
import {Button,Jumbotron,Spinner} from 'reactstrap'
import {useSelector,useDispatch} from 'react-redux'
import {getOneProject} from "../Actions/PortfolioActions"
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
  } from 'reactstrap';

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

    //local states controlling the carosel
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);

    const next = ()=>{
        // if we're animation get out of the function Now!
        if(animating){
            return
        }
        
        let nextIndex = null

        if(activeIndex === Project.pictures.length - 1){
            nextIndex = 0
        }else{
            nextIndex = activeIndex + 1
        }

        setActiveIndex(nextIndex)
        
    }

    const previous = ()=>{
        // if we're animation get out of the function Now!
        if(animating){
            return
        }

        let nextIndex = null

        if(activeIndex === 0){
            nextIndex = Project.pictures.length -1
        }else{
            nextIndex = activeIndex -1
        }
        setActiveIndex(nextIndex)
    }

    const goToIndex = (index)=>{
        // if we're animation get out of the function Now!
        if(animating){
            return
        }
        setActiveIndex(index)
    }
    
    
    

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
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                >
                    <CarouselIndicators items={Project.pictures} activeIndex={activeIndex} onClickHandler={goToIndex}/>
                        {Project.pictures.map((pic,index)=>{
                            return(
                                <CarouselItem
                                    onExiting={()=>setAnimating(true)}
                                    onExited={()=>setAnimating(false)}
                                    key={index}
                                >
                                    <img src={pic.picture} alt="yeet"/>

                                </CarouselItem>
                            )
                        })}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
                </Carousel>
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