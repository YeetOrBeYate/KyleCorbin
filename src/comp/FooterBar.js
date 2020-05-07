import React from 'react'
import {Button} from 'reactstrap'

const FooterBar = ()=>{

    return(
    <div className="footerbar">
        <div>
            <h2>Random Quote generated by the backend</h2>
        </div>
        <div className="footerOptionFlex">
            <section>
                <ul>
                    <li>LinkedIn</li>
                    <li>Github</li>
                    <li>Twitter</li>
                    <li>Email</li>
                </ul>
            </section>
            <section>
                <div>
                    <h4>Start a project</h4>
                    <p>Like what you see? Let's meet over a cup of coffee, my treat</p>
                    <Button>Let's chat</Button>
                </div>
            </section>
        </div>
    </div>
    );

}

export default FooterBar