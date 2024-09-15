const LeftContent = () => {
    return (
      <div className="about-content" style={styles.content}>
        <div style={styles.imageSection}>
          <img
            src="https://via.placeholder.com/500x400"
            alt="About Us"
            style={styles.image}
          />
        </div>
        <div style={styles.textSection}>
          <h2>About Our Company</h2>
          <p>
            We are a cutting-edge company committed to providing innovative solutions to our clients.
            Our mission is to lead the industry by offering excellent services and building long-lasting
            relationships with our customers.
          </p>
        </div>
      </div>
    );
  };
  
  const styles = {
    content: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '50px 20px',
      backgroundColor: "#000000"
    },
    textSection: {
      flex: 1,
      padding: '20px',
      color: "#ffffff"
    },
    imageSection: {
      flex: 1,
    },
    image: {
      width: '100%',
      borderRadius: '8px',
    },
  };
  
  export default LeftContent