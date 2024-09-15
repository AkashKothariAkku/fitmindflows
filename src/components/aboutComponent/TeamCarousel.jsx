import Carousel from 'react-bootstrap/Carousel';

const TeamCarousel = () => {
  return (
    <div style={{ padding: '50px 20px', backgroundColor:"#007bff" }}>
      <h2>Meet Our Team</h2>
      <Carousel>
        <Carousel.Item>
          <div style={styles.card}>
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 1"
              style={styles.image}
            />
            <h3>John Doe</h3>
            <p>CEO</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={styles.card}>
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 2"
              style={styles.image}
            />
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={styles.card}>
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 3"
              style={styles.image}
            />
            <h3>Michael Johnson</h3>
            <p>Lead Developer</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

const styles = {
  card: {
    textAlign: 'center',
    padding: '20px',
  },
  image: {
    borderRadius: '50%',
    marginBottom: '10px',
  },
};

export default TeamCarousel;
