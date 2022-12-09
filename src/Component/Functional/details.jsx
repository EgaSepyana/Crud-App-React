import React from "react";
import { useLocation } from "react-router-dom";
import { Jumbotron, Button } from 'reactstrap';
const DetailsCom = (props) =>{
    const location = useLocation()
    return(
        <Jumbotron>
        <h1 className="display-3">{location.state.judul}</h1>
        <p className="lead">{location.state.tanggal}</p>
        <hr className="my-2" />
        <p>{location.state.description}</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    )
}

export default DetailsCom