import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WomanImage from '../images/woman.jpg';
import BlueRoomImage from '../images/blue room.jpg';
import ManImage from '../images/man.jpg';
import '../Card.css';

function Cards() {
  const features = [
    {
      title: 'FASHION STORE',
      image: WomanImage,
      text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    },
    {
      title: 'HOME FURNITURE',
      image: BlueRoomImage,
      text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    },
    {
      title: 'GADGET STORE',
      image: ManImage,
      text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    },
  ];
  
  return (
    <section className='groupCards'>
    <Container className="my-5">
      <Row className="justify-content-center">
        {features.map((feature, index) => (
          <Col key={index} md={4} className="mb-4" >
            <Card  className="hover-zoom" style={{ width: '100%',borderRadius: '1rem',border: '.1rem solid white' }}>
              <Card.Img style={{ height: '14rem',padding: '1rem',borderRadius: '1.5rem' }} variant="top" src={feature.image} />
              <Card.Body>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>{feature.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </section>

  );
}

export default Cards;
