import React, {Component} from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import Cards from './Card';

const AbouteCom = () => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Aboute</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
      <Container>
      <Row>
        <Col><Cards id="1" tanggal="20 Januari 2022" judul="Golang Fundamentals" description="Belajar Golang Dasar" image="https://picsum.photos/300"/></Col>
        <Col><Cards id="2" tanggal="12 Febuari 2021" judul="Python Fundamentals" description="Belajar Bahasa Python Dasar" image="https://picsum.photos/302"/></Col>
        <Col><Cards id="3" tanggal="1 November 2022" judul="Pandas DataFrame" description="Python Data Structure" image="https://picsum.photos/301"/></Col>
      </Row>
      </Container>
    </div>
  )
}

export default AbouteCom;
