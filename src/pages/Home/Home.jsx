import Header from '../../components/Header';
import ContentSection from '../../components/homeComponents/ContentSection';
import CardsSection from '../../components/homeComponents/CardSection';
import TestimonialsSection from '../../components/homeComponents/TestimonialSection';
import CoachesSection from '../../components/homeComponents/CoachesSection';
import ContactUs from '../../components/homeComponents/ContactUs';
import Footer from '../../components/Footer';

export const Home = () => {
    return (
        <>
            <Header />  
            <ContentSection />
            <CardsSection />
            <TestimonialsSection />
            <CoachesSection />
            <ContactUs />
            <Footer />
        </>
    )
}
