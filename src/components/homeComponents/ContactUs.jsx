import '../../assets/css/contactus.css';

const ContactUs = () => {
  return (
    <div className="contact-section">
      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <h2 className="contact-title">Get in Touch</h2>
          <form>
            <div className="form-group">
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="contact-details">
          <p className="contact-info">
            <strong>Address:</strong> 1234 Street Name, City, Country
          </p>
          <p className="contact-info">
            <strong>Phone:</strong> +123 456 7890
          </p>
          <p className="contact-info">
            <strong>Email:</strong> contact@example.com
          </p>
          <div className="contact-map">
            {/* Optional: Add a map iframe for visual purposes */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093744!2d144.96305791531853!3d-37.816279179751944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5774d7758dfca0!2s1234+Street+Name%2C+City!5e0!3m2!1sen!2sus!4v1630331454621!5m2!1sen!2sus"
              title="Location"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
