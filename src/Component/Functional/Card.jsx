import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Cards = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{props.judul}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.description}</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>
            <Link to={{pathname:`/detail/${props.id}`}} state={{judul:props.judul, tanggal:props.tanggal, description:props.description}}>Follow More</Link>
            </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;
