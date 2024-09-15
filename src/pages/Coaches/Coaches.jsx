import '../../assets/css/coaches.css'; // External CSS file for styling
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

const coachesData = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Fitness Coach',
    image: 'path_to_image_1.jpg' // Replace with actual path
  },
  {
    id: 2,
    name: 'Jane Smith',
    designation: 'Yoga Instructor',
    image: 'path_to_image_2.jpg' // Replace with actual path
  },
  {
    id: 3,
    name: 'Mike Johnson',
    designation: 'Strength Trainer',
    image: 'path_to_image_3.jpg' // Replace with actual path
  },
  {
    id: 4,
    name: 'Emily Davis',
    designation: 'Pilates Coach',
    image: 'path_to_image_4.jpg' // Replace with actual path
  }
  // Add more coaches as needed
];

const Coaches = () => {
  const navigate = useNavigate();

  // Function to handle card click, navigating to coach detail page
  const handleCardClick = (id) => {
    navigate(`/coach/${id}`); // Navigating to dynamic route for coach details
  };

  return (
    <>
    <Header />
    <div className="coaches-container">
      <header className="coaches-header">
        <h1 className="coaches-title">Meet Our Coaches</h1>
        <p className="coaches-description">
          Our team of expert coaches is dedicated to helping you achieve your fitness goals. Each coach brings their own unique style and expertise to guide you on your fitness journey.
        </p>
      </header>

      <div className="coaches-grid">
        {coachesData.map(coach => (
          <div key={coach.id} className="coach-card" onClick={() => handleCardClick(coach.id)}>
            <img
              src="https://via.placeholder.com/150"
              alt={coach.name}
              className="coach-image"
              style={styles.image}
            />
            <h2 className="coach-name">{coach.name}</h2>
            <p className="coach-designation">{coach.designation}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};


const styles = {
  image: {
    borderRadius: '50%',
    marginBottom: '10px',
  },
};

export default Coaches;
