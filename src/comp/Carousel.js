import React from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
  } from 'reactstrap';

const CarouselUnit = (props) => {

    const Project = props.Project

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


    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators className='caroeselBackground' items={Project.pictures} activeIndex={activeIndex} onClickHandler={goToIndex}/>
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
                <CarouselControl className="carouselHover" direction="prev" directionText="Previous" onClickHandler={previous}/>
                <CarouselControl className="carouselHover" direction="next" directionText="Next" onClickHandler={next}/>
        </Carousel>
    )
}

export default CarouselUnit
