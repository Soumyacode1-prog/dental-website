import React from 'react';
import './Appointment.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import {AiFillHome} from "react-icons/ai";
import ContactForm from '../../components/ContactForm/ContactForm';

const Appointment = () => {

    const mapLink = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d57482.08035558106!2d87.42971885822708!3d25.782781298428635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smax%20dental%20clinic%20purnia%20bihar%20on%20map%20location!5e0!3m2!1sen!2sin!4v1727528116755!5m2!1sen!2sin"
    return (
        <section className='appointment-section pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="google-map">
                            <iframe title='map' src={mapLink}></iframe>

                            <div className="location-name">
                                <AiFillHome />
                                <p>Max Clinic and Hospital,Line Bazar</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="appointment-form-area">
                            <SectionTitle 
                            subTitle="BOOK APPOINTMENT"
                            title="Care at Max Clinic & Hospital is pleasure"
                            description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual"/>

                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;