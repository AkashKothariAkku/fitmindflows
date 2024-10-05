import { NavLink } from "react-router-dom";
import "../../assets/css/upcomingEvents.css"; 
import Footer from "../../components/Footer";
import Header from "../../components/Header";


const eventsData = [
  {
    id: 1,
    day: "07-12",
    month: "Oct",
    title: "MMA WorkShop",
    description: "Unleash your strength and confidence with expert MMA techniques, cardio, and self-defense in a dynamic workshop!",
    image: "/images/MMAthumbnail.png", 
  },
];

const UpcomingEvents = () => {
  return (
    <>
    <Header />
    <div className="events-page">
      <header className="header">
        <h1 className="title">Upcoming Events</h1>
      </header>
      <section className="events-container">
        {eventsData.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-date">
              <span className="day">{event.day}</span>
              <span className="month">{event.month}</span>
            </div>
            <div className="event-info">
              <h2 className="event-title">{event.title}</h2>
              <p className="event-description">{event.description}</p>
              <NavLink to='/mma-workshop'><button className="event-button">Learn More</button></NavLink>
            </div>
          </div>
        ))}
      </section>
    </div>
    <Footer />
    </>
  );
};

export default UpcomingEvents;
