import { Container, Row, Col } from 'react-bootstrap';
import '../../assets/css/contentsection.css';

const ContentSection = () => {
  return (
    <div className="content-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="content-column">
            <div className="content-box">
              <h2 className="animated-title">Your Journey to Fitness and Mindfulness</h2>
              <p className="animated-text">
              At FitMind Flows, we believe that fitness is more than just physical—it is about harmonizing your mind, body, and spirit. Whether you’re looking for personal training, fitness coaching, or yoga sessions, we offer a comprehensive range of services both online and offline to meet your unique needs.
              </p>
              <button className="btn animated-button">Book your appointment now</button>
            </div>
          </Col>
          <Col md={6} className="image-column">
            <img
              src="images/FMFBlacklogo.svg"
              alt="Decorative"
              className="img-fluid animated-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContentSection;
