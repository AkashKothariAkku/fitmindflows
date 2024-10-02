import { NavLink } from "react-router-dom";
import "../../assets/css/upcomingEvents.css"; 
import Footer from "../../components/Footer";
import Header from "../../components/Header";


const eventsData = [
  {
    id: 1,
    day: "04",
    month: "Oct",
    title: "Wellness WorkShop",
    description: "Boost your health with practical tips, stress relief, and wellness insights in a fun workshop!.",
    image: "/images/bhilwaraEventCut.jpeg", 
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
              <NavLink to='/bhilwara-event'><button className="event-button">Learn More</button></NavLink>
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
