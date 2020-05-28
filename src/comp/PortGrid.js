import React from 'react'
import PortCard from "./PortCard"
import {Spinner} from 'reactstrap';
import {useSelector,useDispatch} from 'react-redux'
import {getProjects} from "../Actions/PortfolioActions"


const PortGrid = ()=>{

    const dispatch = useDispatch()

    const Portfolio = useSelector(state=>state.Projects)

    React.useEffect(()=>{
        dispatch(getProjects())
    },[])

    if (Portfolio.loading){
        return(
            <div>
                <Spinner color="info" style={{ width: '3rem', height: '3rem' }} type="grow"/>
            </div>
        )
    }

    return(
        <div className = "portGrid">
            {Portfolio.projects.map((proj,index)=>(
                <PortCard key={index} id ={proj.id} name={proj.name}
                pic={proj.picture} tags={proj.tags}/>
            ))}
        </div>
    )
}

export default PortGrid