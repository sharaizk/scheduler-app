import React from 'react'
import {NavLink} from 'react-router-dom'
import './DataBreach.css'
function DataBreach({heading, notRole, to, whereTo}) {
    return (
        <div className="breachWarning">
        <h4>{heading}</h4>
        <p>{`YOU ARE NOT AN ${notRole}`}</p>
        <NavLink
        className="warningLink"
        to={to}
        >
            {`Go to ${whereTo} page`}
        </NavLink>
    </div>
    )
}

export default DataBreach
