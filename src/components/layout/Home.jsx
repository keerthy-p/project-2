import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import abstract from '../../assets/images/abstract.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBriefcaseMedical, faStethoscope, faUserDoctor, faVideo } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import pic from '../../assets/images/pic.png';
import picc from '../../assets/images/picc.png';
import piccc from '../../assets/images/piccc.png';
import picccc from '../../assets/images/picccc.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import rightdoc from '../../assets/images/rightdoc.png';
// import leftdoc from '../../assets/images/leftdoc.png';
// import centerdoc from '../../assets//images/centerdoc.png';
import Header from '../../components/Header.jsx';
import diethos from '../../assets/images/diethos.png';
import familycare from '../../assets/images/familycare.png';
import medical from '../../assets/images/medical.png';
import Footer from '../Footer.jsx';



function Home() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }


    };
    return (
        <>
            <section>
                <Header />
            </section>
            <section className="banner-bg image-style">
                <div className='abstract-bg'>
                    <img src={abstract} />
                </div>
                <div className='banner'>
                    <Container>
                        <div className='content-show'>
                            <Col md={7} lg={7}>
                                <div className='glass-effect'>
                                    <span>Welcome to Medico</span>
                                    <h1>Your Health is Our Priority</h1>
                                    <p>Connecting You With Caring Doctors, Hassle Free</p>
                                </div>
                            </Col>
                        </div>
                    </Container>
                </div>
            </section>
            <section className='online-serv'>
                <Container>
                    <Col md={12} lg={12}>
                        <div>
                            <h2>Online Services</h2>
                            <p>Connect with doctors online and address all health concerns <br /> over a private and 100% secured video call</p>
                        </div>
                    </Col>
                    <Row className='content-center'>
                        <Col md={2} lg={2} sm={12}>
                            <div className='serv-card'>
                                <FontAwesomeIcon className='icon-style' icon={faStethoscope} />
                                <p>Book Doctor Appoinment</p>
                            </div>
                        </Col>
                        <Col md={2} lg={2} sm={12}>
                            <div className='serv-card'>
                                <FontAwesomeIcon className='icon-style' icon={faUserDoctor} />
                                <p>Find Doctors
                                    For You</p>
                            </div>
                        </Col>
                        <Col md={2} lg={2} sm={12}>
                            <div className='serv-card'>
                                <FontAwesomeIcon className='icon-style' icon={faBriefcaseMedical} />
                                <p>Health Check
                                    Packages</p>
                            </div>
                        </Col>
                        <Col md={2} lg={2} sm={12}>
                            <div className='serv-card'>
                                <FontAwesomeIcon className='icon-style' icon={faVideo} />
                                <p>Video
                                    Consultation</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="doctor-background image-style-2">
                <div className='doctor-bg'>
                    <Container>
                        <div className='content-show'>
                            <Col md={5} lg={5}>
                                <div className='glass-effect'>
                                    <h2>Online Consultation With Doctor</h2>
                                    <p>Telehealth platform complies with legal and privacy
                                        regulations to protect your medical information and
                                        ensure a secure and confidential consultation.
                                    </p>
                                    <Button>Know More</Button>
                                </div>
                            </Col>
                        </div>
                    </Container>
                </div>
            </section>
            <section className='top-specialty'>
                <Container>
                    <Col md={12} lg={12}>
                        <div>
                            <h2>Top Specialty</h2>
                            <p>Our advanced multispecialty providing a wide range of <br /> comprehensive medical care</p>
                        </div>
                    </Col>
                    <Row className='content-center'>
                        <Carousel responsive={responsive}>
                            <div>
                                <Col md={8} lg={8} sm={12}>
                                    <div className='img-card'>
                                        <img src={pic} />
                                        <p>Dentistry</p>
                                    </div>
                                </Col>
                            </div>
                            <div>
                                <Col md={8} lg={8} sm={12}>
                                    <div className='img-card'>
                                        <img src={picc} />
                                        <p>Child Specialist</p>
                                    </div>
                                </Col>
                            </div>
                            <div>
                                <Col md={8} lg={8} sm={12}>
                                    <div className='img-card'>
                                        <img src={piccc} />
                                        <p>Dermatology</p>
                                    </div>
                                </Col>
                            </div>
                            <div>
                                <Col md={8} lg={8} sm={12}>
                                    <div className='img-card'>
                                        <img src={picccc} />
                                        <p>Nutrition Diet</p>
                                    </div>
                                </Col>
                            </div>
                        </Carousel>;
                    </Row>
                </Container>
            </section>
            <section className="doctor-background image-style-3">
                <div className='doctor-bg'>
                    <Container>
                        <div className='content-show'>
                            <Col md={5} lg={5}>
                                <div className='glass-effect'>
                                    <h2>Your Wellness, Our Expertise</h2>
                                    <p>A wide range of medical services by bringing together doctors from different specialties under one roof.
                                    </p>
                                    <Button>Know More</Button>
                                </div>
                            </Col>
                        </div>
                    </Container>
                </div>
            </section>
            <section className='video-sec'>

                <Container>
                    <Col md={12} lg={12}>
                        <h2>Our Services</h2>
                    </Col>

                    <Row className='content-center'>
                        <Carousel responsive={responsive}>
                            <div>
                                <Col md={10} lg={10} sm={12}>
                                    <div className='services-card'>
                                        <img src={familycare} />
                                        <p>Routine
                                            Family Care
                                            <FontAwesomeIcon className='arrow-icon' icon={faArrowRight} />
                                        </p>
                                    </div>
                                </Col>
                            </div>
                            <div>
                                <Col md={10} lg={10} sm={12}>
                                    <div className='services-card'>
                                        <img src={medical} />
                                        <p>Medical
                                            Emergency
                                            <FontAwesomeIcon className='arrow-icon' icon={faArrowRight} />
                                        </p>
                                    </div>
                                </Col>
                            </div>
                            <div>
                                <Col md={10} lg={10} sm={12}>
                                    <div className='services-card'>
                                        <img src={diethos} />
                                        <p>Diet
                                            Nutrition
                                            <FontAwesomeIcon className='arrow-icon' icon={faArrowRight} />
                                        </p>
                                    </div>
                                </Col>
                            </div>
                            <div>
                                <Col md={10} lg={10} sm={12}>
                                    <div className='services-card'>
                                        <img src={medical} />
                                        <p>Medical
                                            Emergency
                                            <FontAwesomeIcon className='arrow-icon' icon={faArrowRight} />
                                        </p>
                                    </div>
                                </Col>
                            </div>
                        </Carousel>;
                    </Row>
                </Container>
            </section>
            <section>
                <Footer/>
            </section>
        </>
    );
} export default Home;