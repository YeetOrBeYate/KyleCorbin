import React from 'react';
import { Media} from 'reactstrap';
import self from "../img/profSelf.jpeg"
import '../App.css';

const Home=()=>{



    return(
    <div>
        <Media>
            <Media left={true}>
                <Media object src={self} alt = "self"/>
            </Media>
            <Media body>
                <Media heading>
                Hello, my name is Kyle Corbin
                </Media>
                I'm a full-stack developer focusing on making products that make a difference.
            </Media>
        </Media>
        <div className="homeFlex">
            <div className="homeChild">
                <h2>About me</h2>
                <p>I like seeking opportunities and challenges that are meaningful to me. I graduated from Georgia College with a B.B.A in MIS in August 2018.
                Soon after that, I began work at Exela Technologies in a Systems Analyst role. During my time there I was exposed to engaging work, full of problem solving and planning.</p>
                <p>After much exposure to IT in a production setting, I wanted to learn programing in a more formal setting. In September 2019 I enrolled in Lambda school's full-stack developer program. Learning in a 100% remote environment allowed me to develop self-discipline for both school and personal projects.</p>
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
    </div>
    )

}

export default Home