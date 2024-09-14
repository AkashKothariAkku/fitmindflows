import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import '../../assets/css/coachessection.css';

const CoachesSection = () => {
    const coachesData = [
        {
            id: 1,
            name: 'Priyanshu Sharma',
            designation: 'Personal Trainer',
            image: '/images/Priyanshu.svg',
        },
        {
            id: 2,
            name: 'Coach Jane Smith',
            designation: 'Fitness Coach',
            image: '/images/coaches.svg',
        },
        {
            id: 3,
            name: 'Coach Mark Johnson',
            designation: 'Strength Coach',
            image: '/images/coaches.svg',
        },
        {
            id: 4,
            name: 'Coach Emily Davis',
            designation: 'Yoga Instructor',
            image: '/images/coaches.svg',
        },
        {
            id: 5,
            name: 'Coach Alex Brown',
            designation: 'Cardio Specialist',
            image: '/images/coaches.svg',
        },
        // Add more coaches as needed
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="coaches-section mt-3">
            <h2 className="coaches-title">Meet Our New Generation Coaches</h2>
            <p className="coaches-description">
                Our coaches are experts in various fitness disciplines and are here to help you achieve your fitness goals. Get to know them better!
            </p>
            <Slider {...settings} className='slider-container'>
                {coachesData.map((coach) => (
                    <div key={coach.id} className="coach-card">
                        <img src={coach.image} alt={coach.name} className="coach-image" />
                        <div className="coach-info">
                            <h3 className="coach-name">{coach.name}</h3>
                            <p className="coach-designation">{coach.designation}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CoachesSection;
