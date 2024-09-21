const LeftContent = () => {
    return (
      <div className="about-content" style={styles.content}>
        <div style={styles.imageSection}>
          <img
            src="https://via.placeholder.com/400x300"
            alt="About Us"
            style={styles.image}
          />
        </div>
        <div style={styles.textSection}>
          <h2 style={styles.headSection}>What We Do</h2>
          <p style={styles.paraSection}>
          At FitMind Flows, we offer personalized fitness programs tailored to your individual needs. We provide:

Personal Training: One-on-one sessions designed to help you achieve your specific fitness goals.
Fitness and Nutrition: A comprehensive approach to training that includes customized workout routines and nutritional plans.
Yoga and Prenatal Yoga: Both traditional and prenatal yoga to support physical and mental balance.
Kickboxing: High-energy, strength-building kickboxing sessions, available both online and offline.
Our goal is to deliver effective and enjoyable programs that fit seamlessly into your lifestyle.
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
      fontWeight: "800",
      fontSize: "20px",
      color: '#ffffff'
    },
    headSection:{
      textDecoration: "underline",
      marginBottom: "20px" 
    },
    paraSection:{
      textAlign: 'left',
      fontWeight: "500",
      color: '#d4c8c8'
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