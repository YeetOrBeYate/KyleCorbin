import React from 'react'
import {Link, useLocation} from "react-router-dom"
const MyLink = (props) => {

    const location = useLocation()

    let name = props.name
    let destination = props.destination
    return (
        <>
            <Link  className="nav-link" to={{pathname: destination, state: { from: location.pathname }}}>{name}</Link>

        </>
    )
}

export default MyLink
