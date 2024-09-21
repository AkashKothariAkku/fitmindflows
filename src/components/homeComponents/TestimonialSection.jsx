import { Container, Carousel } from 'react-bootstrap';
import '../../assets/css/testimonialsection.css';

const TestimonialsSection = () => {
  const testimonialsData = [
    {
      id: 1,
      text: 'I’ve been training with Kuldeep for over a year now, and the transformation I’ve experienced has been incredible. Not only have I gained noticeable strength, but my overall fitness level has improved drastically. At 57, I feel more powerful and healthier than ever before. Kuldeep’s training approach is personalized, motivating, and effective. He has a deep understanding of fitness, and his guidance has helped me achieve results I didn’t think were possible at my age. I’m truly grateful for his dedication and expertise.',
      author: 'Dr. Ayman Elnaqa',
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
