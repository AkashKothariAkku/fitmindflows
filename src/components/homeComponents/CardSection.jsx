import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../../assets/css/cardsection.css';

const CardsSection = () => {
  const cardsData = [
    {
      id: 1,
      title: 'Personal Training',
      description: 'Get personalized workouts tailored to your goals and fitness level with our expert trainers who guide you every step of the way.',
      image: 'images/personalTraining.svg',
    },
    {
      id: 2,
      title: 'Weight Loss Training',
      description: 'This program combines high-intensity workouts, strength training, and functional movements to maximize fat burn and improve your metabolism.',
      image: 'images/yoga.svg',
    },
    {
      id: 3,
      title: 'Fitness and Nutrition',
      description: 'Achieve your fitness goals faster with balanced nutrition plans and expert guidance on the best foods to fuel your body.',
      image: 'images/yoga.svg',
    },
    {
      id: 4,
      title: 'Injury Rehabilitation',
      description: 'Recover safely and effectively with customized rehabilitation programs designed to restore your strength and mobility.',
      image: 'images/yoga.svg',
    },
    {
      id: 5,
      title: 'Yoga',
      description: 'Enhance your body and mind connection with our yoga sessions, blending breath, movement, and mindfulness for holistic well-being.',
      image: 'images/yoga.svg',
    },
    {
      id: 6,
      title: 'Kickboxing Training',
      description: ' Led by expert trainers, our sessions incorporate powerful kicks, punches, and footwork drills to challenge your endurance, coordination, and speed.',
      image: 'images/yoga.svg',
    }
  ];

  return (
    <div className="cards-section">
      <Container>
        <Row>
          {cardsData.map(card => (
            <Col md={6} lg={4} key={card.id} className="mb-4">
              <Card className="custom-card" style={{ backgroundColor: '#ffffff' }}>
                <Card.Img
                  variant="top"
                  src={card.image}
                  className="transparent-image"
                  alt={card.title}
                />
                <Card.Body>
                  <Card.Title className="card-title">{card.title}</Card.Title>
                  <Card.Text className="card-description">{card.description}</Card.Text>
                  <Button variant="dark" className="custom-button">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CardsSection;
