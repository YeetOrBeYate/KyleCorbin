import React from 'react'
// import Africa from "../img/Africa.png"
// import Country from "../img/Country.png"
import PortGrid from "./PortGrid"
import {useSelector,useDispatch} from 'react-redux'
import {getTags} from "../Actions/TagsActions"
import {filterProject} from "../Actions/PortfolioActions"
import {Jumbotron, Badge, Spinner} from "reactstrap"
const Portfolio = ()=>{

    const dispatch = useDispatch()

    const Tags = useSelector(state=>state.Tags)

    React.useEffect(()=>{
        dispatch(getTags())
    },[])

    const [load,setLoad] = React.useState(true)

    if (Tags.loading){
        return(
            <div>
                <Spinner color="info" style={{ width: '3rem', height: '3rem' }} type="grow"/>
            </div>
        )
    }


    const changeActive = (e,id)=>{

        setLoad(false)

        let former = document.querySelector('.activee')

        if(former){
            former.classList.remove('activee')
            //differinciating between child and parent
            if(e.target.classList.length ===0){
                let parent = e.target.parentNode
                parent.classList.add('activee')
            }else{
                e.target.classList.add('activee')
            }
        }else{
            //differinciating between child and parent
            if(e.target.classList.length ===0){
                let parent = e.target.parentNode
                parent.classList.add('activee')
            }else{

                e.target.classList.add('activee')
            }
        }

        dispatch(filterProject(id))

    }

    return(
        <div>
            <Jumbotron>
                <h1>Web Developer Portfolio</h1>
                <p>Full Stack, and Front end. I've used React/Redux, Node.js/Express.js,
                 Ant-Design/Reactstrap, Postgresql,sqlite, Vanilla CSS.</p>
                <div>
                    {Tags.tags.map((badge,index)=>{
                        if(badge.name === "Show all" && load){
                            return(
                                <Badge 
                                key={index} 
                                onClick={(e)=>changeActive(e,badge.id)}

                                className="activee" 
                                color="secondary">
                                    <span>{badge.name}</span>
                                </Badge>
                            )
                        }else{
                            return(
                                <Badge 
                                key={index} 
                                onClick={(e)=>changeActive(e,badge.id)}
                                color="secondary">
                                    <span>{badge.name}</span>
                                </Badge>
                            )
                        }
                    })}
                </div>
            </Jumbotron>
            <PortGrid/>
        </div>
    )
}

export default Portfolio