import React from 'react';
import logo from '../../assets/logo1.jpg';
import './Footer.scss';
import { FaFacebookF, FaInstagram, FaTwitter,FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import call from '../../assets/footer/calling.png';
import time from '../../assets/footer/time.png';
import location from '../../assets/footer/location.png';
import About from '../../pages/About';
import Services from '../Services/Services';
import Blogs from '../Blogs/Blogs';
import Terms from '../../components/Terms';
import Privacy from '../../components/Privacy';







const Footer = () => {

    const footerMenu = [
        {
            'name' : 'About Us',
            'link' : '/about'
        },
        {
            'name' : 'Services',
            'link' : '/singleservice'
        },
        {
            'name' : 'Dentist',
            'link' : '/'
        },
        {
            'name' : 'Blogs',
            'link' : '/blogs'
        },
        {
            'name' : 'Faq',
            'link' : '/faq'
        }
    ];

    const footerContacts = [
        {
            'title': 'Phone Number',
            'info': '+91 7781893306',
            'icon': call
        },
        {
            'title': 'Open Hour',
            'info': '09:00 AM - 8:00 PM',
            'icon': time
        },
        {
            'title': 'Clinic Address',
            'info': ' Max Dental Clinic & Hospital, Line Bazar,Purnea',
            'icon': location
        }
    ]

    return (
        <footer className='pt-100 pb-70'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5">
                        {/* <div>
                            <h3>Max Clinic & Hospital </h3>
                        </div> */}
                        <div className="footer-logo">
                            <img src={logo} alt="logo" />
                            {/* <h3>Max Clinic & Hospital</h3> */}
                        </div>
                        <p>Max Dental Clinic is a top-rated clinic with expertise in smile makeovers, crowns, bridges, and restoring oral functionality.</p>

                        <div className="social-logo">
                            <p>Follow us on</p>
                            <ul>
                                <li><a href="https://g.co/kgs/vcgTAFW"><FaFacebookF/></a></li>
                                {/* <li><a href="/"><FaTwitter/></a></li> */}
                                <li><a href="https://youtube.com/@maxdentalclinichospital?si=ZUQgfy9CmfiHGjN7"><FaYoutube /></a></li>
                                <li><a href="https://www.instagram.com/maxde.ntal/profilecard/?igsh=Z2V3NG1vOWszcTZl"><FaInstagram/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <div className="footer-link">
                            <p>Quick Links</p>
                            <ul>
                                {
                                    footerMenu.map(singleMenu => <li><Link to="/">{singleMenu.name}</Link></li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <div className="footer-contact">
                            <p>Contact & Information</p>

                            {
                                footerContacts.map(footerContact => {
                                    return  <div className="contact-list">
                                                <div className="contact-icon">
                                                    <img src={footerContact.icon} alt="call" />
                                                </div>
                                                <div className="contact-text">
                                                    <p>{footerContact.title}</p>
                                                    <h5>{footerContact.info}</h5>
                                                </div>
                                            </div>
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className='copy-text'>
                        <p>&copy; Max Clinic & Hospital. All Right Reserved</p>
                    </div>  
                    <div className='copy-links'>
                        <ul>
{/*                       
                            <li><a href="/terms">Terms Of Use</a></li> */}
                            <li><Link to="/terms">Terms of Use</Link></li>
                                  
                             <li><Link to='/privacy'>Privacy Policy</Link></li>
                        </ul>
                    </div>                          
                </div>
            </div>
        </footer>
    );
};

export default Footer;