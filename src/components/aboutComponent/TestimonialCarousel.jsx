import Carousel from 'react-bootstrap/Carousel';

const TestimonialCarousel = () => {
  return (
    <div style={{ padding: '50px 20px', backgroundColor:"#007bff" }}>
      <h2 className='text-white'>What Our Clients Say</h2>
      <Carousel>
        <Carousel.Item>
          <div style={styles.testimonial}>
          <img
              src="https://via.placeholder.com/150"
              alt="Team Member 1"
              style={styles.image}
            />
            <p style={styles.reviews}>
              This company is amazing! They delivered everything on time and exceeded our expectations.
            </p>
            <h3 className='p-2'>- Client Name</h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={styles.testimonial}>
          <img
              src="https://via.placeholder.com/150"
              alt="Team Member 1"
              style={styles.image}
            />
            <p style={styles.reviews}>
              Professional, reliable, and great customer service. We highly recommend them!
            </p>
            <h3 className='p-2'>- Another Client</h3>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

const styles = {
  testimonial: {
    textAlign: 'center',
    padding: '20px',
    fontStyle: 'italic',
    color: '#ffffff'
  },
  image: {
    borderRadius: '50%',
    marginBottom: '10px',
  },
  reviews:{
    fontSize: "20px",
    fontWeight: "300"
  }
};

export default TestimonialCarousel;
