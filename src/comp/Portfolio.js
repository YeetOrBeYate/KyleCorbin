import React from 'react'
import PortCard from "./PortCard"
import Africa from "../img/Africa.png"
import Country from "../img/Country.png"
import {useSelector,useDispatch} from 'react-redux'
import {getTags} from "../Actions/TagsActions"
import {Jumbotron, Badge} from "reactstrap"
const Portfolio = ()=>{

    const dispatch = useDispatch()

    const Tags = useSelector(state=>state.Tags)



    React.useEffect(()=>{
        dispatch(getTags())
    },[])

    if (Tags.tags.length ===0){
        return(
            <div>
                loading...
            </div>
        )
    }


    const testdata = [
        {
            name:'Africa Market',
            pic:Africa,
            tags:['React.JS', 'Full-Stack', 'Redux', 'Node', "express.js", 'Postgresql', 'css']
        },
        {
            name:'Country Directory',
            pic:Country,
            tags:['React.JS', 'front-end', 'Redux', 'ant-design']
        },        {
            name:'Africa Market',
            pic:Africa,
            tags:['React.JS', 'Full-Stack', 'Redux', 'Node', "express.js", 'Postgresql', 'css']
        },
        {
            name:'Country Directory',
            pic:Country,
            tags:['React.JS', 'front-end', 'Redux', 'ant-design']
        }
    ]

    const changeActive = (e)=>{
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
                console.log('actual', e.target.classList.length)
                e.target.classList.add('activee')
            }
        }
    }

    return(
        <div>
            <Jumbotron>
                <h1>Web Developer Portfolio</h1>
                <p>Full Stack, and Front end. I've used React/Redux, Node.js/Express.js,
                 Ant-Design/Reactstrap, Postgresql,sqlite, Vanilla CSS.</p>
                <div>
                    {Tags.tags.map((badge,index)=>(
                    <Badge key={index} onClick={(e)=>changeActive(e)} color="secondary">
                        <span>{badge.name}</span>
                    </Badge>
                    ))}
                </div>
            </Jumbotron>
            <div className = "portGrid">
                {testdata.map((card,index)=>(
                    <PortCard key={index} name={card.name} pic={card.pic} tags = {card.tags}/>
                ))}
            </div>
        </div>
    )

}

export default Portfolio