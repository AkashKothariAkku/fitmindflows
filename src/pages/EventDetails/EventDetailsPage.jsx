import { useState } from "react";
import "../../assets/css/eventDetail.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const EventDetailsPage = () => {
  const [image, setImage] = useState('/images/MMA.jpg');

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <Header />
      <div className="event-details-page">
        <header className="event-header">
          <h1 className="event-title" style={{ color: "white" }}>MMA Workshop</h1>
          <p className="event-date">07th - 12th October, 2024</p>
        </header>

        <section className="event-content row">
          {/* Image column */}
          <div className="event-image-container col-12 col-md-6">
            {image ? (
              <img src={image} alt="Event" className="single-event-image" />
            ) : (
              <div className="upload-placeholder">
                <label htmlFor="upload" className="upload-label">
                  Upload Image (1080x1920)
                </label>
                <input
                  type="file"
                  id="upload"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="upload-input"
                />
              </div>
            )}
          </div>

          {/* Event details column */}
          <div className="event-details col-12 col-md-6">
            <h2>Unleash Your Inner Fighter at Our MMA Workshop!</h2>

            <p>Step into the world of <strong>Mixed Martial Arts</strong> and experience the thrill of combat training! Our MMA workshop offers a high-energy, action-packed session designed to boost your <strong>strength, agility, and confidence</strong>. Whether you are a beginner or have some experience, this workshop covers:</p>

            <ul>
              <li><strong>Striking Techniques:</strong> Master the basics of punches, kicks, elbows, and knees with expert guidance.</li>
              <li><strong>Grappling & Submission Skills:</strong> Learn essential moves for ground control and submissions, including takedowns and joint locks.</li>
              <li><strong>Cardio & Conditioning:</strong> Improve your endurance with dynamic drills that challenge both body and mind.</li>
              <li><strong>Self-Defense:</strong> Equip yourself with practical self-defense skills you can use in real-life situations.</li>
            </ul>

            <p>This workshop is perfect for anyone looking to <strong>get fit, sharpen their skills, or try something new</strong>. Train like a pro in a supportive, high-energy environment and take your fitness to the next level. Join us and <strong>unleash your fighting spirit!</strong></p>

            <ul className="event-info-list">
              <li><strong>Date:</strong> 07th-12th October, 2024</li>
              <li><strong>Location:</strong> 3rd Floor, Crystal Palm Mall, 22 Godown Circle, Sardar Patel Marg, near Nehru Sahkar Bhavan, Jaipur, Rajasthan 302001</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Google Map Embed */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.004467831548!2d75.78997977367116!3d26.903353310495987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db54a33736aa1%3A0x4027bf3c99ff9974!2sKLEAN%20FIT%20Iconic%20C-SCHEME!5e0!3m2!1sen!2sin!4v1728151165555!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <Footer />
    </>
  );
};

export default EventDetailsPage
