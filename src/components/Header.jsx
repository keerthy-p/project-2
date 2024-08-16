import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import medical_logo from '../assets/images/medical_logo.png';
import Searchbar from './Searchbar';
import Location from './Location';

function Header() {
    const [results, setResults] = useState([]);
    const [navbar, setNavbar] = useState(false)

    return (
        <>
            <section className='header-sec'>
                <Container>
                    <Row>
                        <Col md={6} lg={6}>
                            <div className='nav-link-style header-logo res-header'>
                                <ul>
                                    <li><img src={medical_logo} /></li>
                                    <li><span>Medico</span></li>
                                    <li><Link>Home</Link></li>
                                    <li><Link>About</Link></li>
                                    <li><Link>Services</Link></li>
                                    <li><Link>Contact</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={6} lg={6} sm={7}>
                            <div className='nav-style nav-link-style res-header'>
                                <ul>
                                    <li><Button className='orange-btn'>Signup</Button></li>
                                    <li><Button className='brown-btn'>Login</Button></li>
                                </ul>
                            </div>
                        </Col>

                        {/* <Row className='mobile-header'>
                            <Col md={6} lg={6} sm={6}>
                                <div>
                                    <img src={medical_logo} />
                                </div>
                            </Col>
                            <Col md={6} lg={6} sm={6}>
                                <FontAwesomeIcon className='menu-icon' icon={faBars} onClick={() => { setNavbar(!navbar) }} />
                                {navbar === true ?
                                    <div className='responsive-nav'>

                                        <ul>
                                            <li><Link>Home</Link></li>
                                            <li><Link>About</Link></li>
                                            <li><Link>Services</Link></li>
                                            <li><Link>Contact</Link></li>
                                            <li><Button className='orange-btn'>Signup</Button></li>
                                            <li><Button className='brown-btn'>Login</Button></li>
                                        </ul>

                                    </div>
                                    : <></>}
                            </Col>

                        </Row> */}

                        <Row className='search-loc'>
                            <Col md={2} lg={2}>
                                <Location />
                            </Col>
                            <Col md={2} lg={2}>
                                <Searchbar setResults={setResults} />
                            </Col>
                        </Row>


                    </Row>
                </Container>
            </section>
        </>
    );
} export default Header;