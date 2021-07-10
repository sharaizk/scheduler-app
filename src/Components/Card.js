import React from "react";
import './Card.css'
import Paper from "@material-ui/core/Paper";
import {NavLink} from 'react-router-dom'
const Card = ({svg,as, to}) => {
  return (
    <div className="mainCard">
      <NavLink to={to} exact className="links">
      <Paper variant="outlined" className="paper">
        <div className='cards'>
            <img src={svg} alt="type-img" className="cardsvg" />
            <h4 className="type-label">{`Sign in as ${as}`}</h4>
        </div>
      </Paper>
      </NavLink>
    </div>
  );
};

export default Card;
