import Carousel from 'react-bootstrap/Carousel';
import '../../assets/css/heroslider.css'; // External CSS file for custom styles

const HeroSlider = () => {
  return (
    <div className="slider-container">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 hero-image"
          src="https://via.placeholder.com/1920x500"
          alt="First slide"
        />
        <Carousel.Caption className="hero-caption">
          <h3>Dream fit, we are here</h3>
          <p>Fit goals made easy</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 hero-image"
          src="https://via.placeholder.com/1920x500"
          alt="Second slide"
        />
        <Carousel.Caption className="hero-caption">
          <h3>Your top choice for fitness</h3>
          <p>Excellence in a healthy lifestyle</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 hero-image"
          src="https://via.placeholder.com/1920x500"
          alt="Third slide"
        />
        <Carousel.Caption className="hero-caption">
          <h3>Customer Satisfaction</h3>
          <p>Your success is our priority</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default HeroSlider;
