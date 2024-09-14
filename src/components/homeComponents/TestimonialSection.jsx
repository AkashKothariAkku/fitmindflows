import { Container, Carousel } from 'react-bootstrap';
import '../../assets/css/testimonialsection.css';

const TestimonialsSection = () => {
  const testimonialsData = [
    {
      id: 1,
      text: 'This product has changed the way I work and live!',
      author: 'John Doe',
    },
    {
      id: 2,
      text: 'Exceptional quality and amazing customer support.',
      author: 'Jane Smith',
    },
    {
      id: 3,
      text: 'I would highly recommend this service to anyone!',
      author: 'Mark Johnson',
    },
  ];

  return (
    <div className="testimonials-section">
      <div className="overlay"></div>
      <Container className="text-center testimonials-container">
        <h2 className="testimonials-title">Testimonials</h2>
        <p className="testimonials-description">
          Hear what our customers have to say about us.
        </p>
        <Carousel interval={2000} >
          {testimonialsData.map((testimonial) => (
            <Carousel.Item key={testimonial.id}>
              <blockquote className="testimonial-text">
                {testimonial.text}
              </blockquote>
              <p className="testimonial-author">- {testimonial.author}</p>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default TestimonialsSection;
