import '../../assets/css/contactus.css';

const ContactUs = () => {
  return (
    <div className="contact-section" id='contact-us'>
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
        <div className="contact-details text-center">
          <p className="contact-info">
            <strong>Phone:</strong> <a href='tel:+918696610310' style={{textDecoration:"none", color:"#000000"}}>+91 8696610310</a>
          </p>
          <p className="contact-info">
            <strong>WhatsApp:</strong> <a href="https://wa.me/+97430434644" target="_blank" style={{textDecoration:"none", color:"#000000"}}>+974 30434644</a>
          </p>
          <p className="contact-info">
            <strong>Email:</strong> <a href='mailto:fitmindflows@gmail.com' style={{textDecoration:"none", color:"#000000"}}>fitmindflows@gmail.com</a>
          </p>
          <div className="contact-map">
            {/* Optional: Add a map iframe for visual purposes */}
            <img
              src="images/FMFBlacklogo.svg"
              alt="Decorative"
              width="50%"
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
