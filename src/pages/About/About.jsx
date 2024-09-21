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
      <AboutContent para={"FitMind Flows is a holistic health and fitness company dedicated to empowering individuals on their journey toward better physical and mental well-being. Our team of expert trainers, nutritionists, and yoga instructors bring personalized fitness and wellness solutions to help you lead a healthier lifestyle. Whether you prefer training online or in person, we provide a range of services, from personal training and nutritional guidance to yoga, prenatal yoga, and kickboxing."} head={"Who We Are"}/>
      <LeftContent />
      <AboutContent para={"We believe that fitness is more than just exercise—it’s a way to enhance both physical and mental well-being. Our mission is to spread awareness about the importance of maintaining a balanced, healthy lifestyle. By providing accessible, personalized fitness solutions, we help our clients become the best version of themselves, physically, mentally, and emotionally. We do this because we are passionate about making a positive impact on people's lives through fitness and holistic health."} head={"Why We Do It"}/>
      <FAQ />
      <TestimonialCarousel />
      <Footer />
    </div>
  );
};

export default About;

