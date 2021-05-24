import React from 'react';
import { Media, UncontrolledTooltip} from 'reactstrap';
import self from "../img/profSelf.jpeg"
import '../App.css';
import "../Animations/page.css"
import blackBusinessMan from "../img/BlackBusinessman.jpg"



const Home=()=>{



 
    return(
    <div className="homeLoad">
        <Media>
            <Media left={true}>
                <Media object src={self} alt = "self"/>
            </Media>
            <Media body>
                <Media heading>
                Hello, my name is Kyle Corbin
                </Media>
                I'm a full-stack developer focusing on building products that make a difference.
            </Media>
        </Media>
        <div className="homeFlex">
            <div className="homeChild">
                <h2>About me YEET</h2>
                <p>I like seeking opportunities and challenges that are meaningful to me. I graduated from Georgia College with a B.B.A in MIS in August 2018.
                Soon after that, I began work at Exela Technologies in a Systems Analyst role. During my time there I was exposed to engaging work, full of problem solving and planning.</p>
                <p>After much exposure to IT in a production setting, I wanted to learn programing in a more formal setting. In September 2019, I enrolled in Lambda school's full-stack developer program. Learning in a 100% remote environment allowed me to develop self-discipline for both school and personal projects.</p>
            </div>
            <div>
                <h2>Contact</h2>
                <div>
                    <a href="https://www.linkedin.com/in/kyle-corbin-a36bb9133/" target="_blank" rel="noopener noreferrer">linkedin</a>
                </div>
                <div>
                    <a href="https://github.com/YeetOrBeYate" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
            </div>
        </div>
        <div className="contactFlex">
                {/* <div className="contactText" style={{width:'40%'}}>
                    <h2>Lets bring your idea to life</h2>
                </div> */}
                <div id="contactPic">
                    <img src={blackBusinessMan} alt="Yeet"/>
                </div>
                <UncontrolledTooltip
                placement="right"
                target="contactPic"
                >
                    www.blackillustrations.com
                </UncontrolledTooltip>
        </div>
    </div>
    )

}

export default Home