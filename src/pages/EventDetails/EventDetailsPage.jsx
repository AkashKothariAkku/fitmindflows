import { useState } from "react";
import "../../assets/css/eventDetail.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const EventDetailsPage = () => {
  const [image, setImage] = useState('/images/bhilwaraEvent.jpeg');

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
          <h1 className="event-title" style={{ color: "white" }}>Wellness Workshop</h1>
          <p className="event-date">04th October, 2024</p>
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
            <h2 className="details-heading">Event Details</h2>
            <p className="event-description">
              A wellness workshop is a fun and informative session designed to help you improve your overall health and well-being. It focuses on topics like stress management, healthy eating, physical activity, and mental relaxation. You will learn simple, practical tips and techniques that you can use in your daily life to feel better, both physically and mentally. This workshop is open to everyone and aims to create a positive, supportive environment where you can learn, ask questions, and start your wellness journey!
            </p>
            <h2>Join Our Transformative Wellness Workshop!</h2>

<p>Unlock the secrets to a healthier, happier you in our exciting and interactive wellness workshop! This hands-on experience will guide you through essential aspects of well-being, including:</p>

<ul>
  <li><strong>Stress Relief Techniques:</strong> Learn proven methods to reduce stress and restore calm in your daily life.</li>
  <li><strong>Nourishing Nutrition:</strong> Discover how to fuel your body with balanced meals that boost energy and vitality.</li>
  <li><strong>Empowering Physical Activities:</strong> Engage in simple exercises that fit into any schedule, promoting fitness and flexibility.</li>
  <li><strong>Mindfulness & Relaxation:</strong> Master techniques to quiet the mind and find inner peace, even on your busiest days.</li>
</ul>

<p>Our workshop is designed for <strong>all ages and fitness levels</strong>, making it the perfect opportunity for anyone to start or elevate their wellness journey. Surround yourself with like-minded individuals, gain practical, actionable insights, and leave feeling <strong>empowered, refreshed, and ready to embrace a healthier lifestyle!</strong></p>

            <ul className="event-info-list">
              <li><strong>Date:</strong> 04th October, 2024</li>
              <li><strong>Location:</strong> 53 First Floor, Near Subhash Nagar Thana, Love Garden Road, Sanjay Colony, Bhilwara</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Google Map Embed */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.9608131559667!2d74.64316637131955!3d25.356012717942978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c3ad75d77de3%3A0x8a856d79c076ec6a!2sLove%20Garden%20Rd%2C%20R%20K%20Colony%2C%20Bhilwara%2C%20Rajasthan%20311001!5e0!3m2!1sen!2sin!4v1727871846593!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Footer />
    </>
  );
};

export default EventDetailsPage
