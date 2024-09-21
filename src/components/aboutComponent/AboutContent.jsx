const AboutContent = ({head, para}) => {
    return (
      <div className="about-content" style={styles.content}>
        <div style={styles.textSection}>
          <h2 style={styles.headSection}>{head}</h2>
          <p style={styles.paraSection}>
            {para}
          </p>
        </div>
        <div style={styles.imageSection}>
          <img
            src="https://via.placeholder.com/400x300"
            alt="About Us"
            style={styles.image}
          />
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
    },
    textSection: {
      flex: 1,
      padding: '20px',
      fontWeight: "800",
      fontSize: "20px",
    },
    headSection:{
      textDecoration: "underline",
      marginBottom: "20px" 
    },
    paraSection:{
      textAlign: 'left',
      fontWeight: "500",
      color: '#646161'
    },
    imageSection: {
      flex: 1,
    },
    image: {
      width: '100%',
      borderRadius: '8px',
    },
  };
  
  export default AboutContent