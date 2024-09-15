import HeroSlider from '../../components/aboutComponent/HeroSlider';
import AboutContent from '../../components/aboutComponent/AboutContent';
import FAQ from '../../components/aboutComponent/FAQ';
import TestimonialCarousel from '../../components/aboutComponent/TestimonialCarousel';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import '../../assets/css/about.css'
import LeftContent from '../../components/aboutComponent/LeftContent';

const About = () => {
  return (
    <div>
      <Header />
      <HeroSlider />
      <AboutContent />
      <LeftContent />
      <FAQ />
      <TestimonialCarousel />
      <Footer />
    </div>
  );
};

export default About;

