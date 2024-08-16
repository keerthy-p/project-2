import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <>
            <div className='footer-bg'>
                <Container>
                    <Row className='space-even'>
                        <Col md={2} lg={2}>
                            <div className='footer-style'>
                                <h4>Medico</h4>
                                <ul>
                                    <li><Link>Blog</Link></li>
                                    <li><Link>Careers</Link></li>
                                    <li><Link>Press</Link></li>
                                    <li><Link>Contact Us</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={2} lg={2}>
                            <div className='footer-style'>
                                <h4>For patients</h4>
                                <ul>
                                    <li><Link>For patients</Link></li>
                                    <li><Link>Search for doctors</Link></li>
                                    <li><Link>Search for clinics</Link></li>
                                    <li><Link>Book Body Checkups</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={2} lg={2}>
                            <div className='footer-style'>
                                <h4>For Doctors</h4>
                                <ul>
                                    <li><Link>Profile</Link></li>
                                    <li><Link>Career</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={2} lg={2}>
                            <div className='footer-style'>
                                <h4>More</h4>
                                <ul>
                                    <li><Link>About Us</Link></li>
                                    <li><Link>FAQ</Link></li>
                                    <li><Link>Contact US</Link></li>
                                    <li><Link>Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={2} lg={2}>
                            <div className='footer-style'>
                                <h4>Follow US</h4>
                                <ul>
                                    <li><Link>Instagram</Link></li>
                                    <li><Link>Twitter</Link></li>
                                    <li><Link>Youtube</Link></li>
                                    <li><Link>Facebook</Link></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
} export default Footer;