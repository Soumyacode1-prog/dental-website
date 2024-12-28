import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Appointment from '../sections/Appointment/Appointment';
import Banner from '../sections/Banner/Banner';
import Blogs from '../sections/Blogs/Blogs';
import Emergency from '../sections/Emergency/Emergency';
import Expert from '../sections/Expert/Expert';
import Features from '../sections/Features/Features';
import Footer from '../sections/Footer/Footer';
import Services from '../sections/Services/Services';
import Testimonial from '../sections/Testimonial/Testimonial';
import Terms from '../components/Terms';
import Privacy from '../components/Privacy';

const Home = () => {

    return (
        <>
            <Navbar/>
            <Banner/>
            <Services/>
            <Emergency/>
            <Features />
            <Expert/>
            <Testimonial/>
            <Blogs/>
            <Terms/>
            <Privacy/>
            <Appointment/>
            <Footer/>
        </>
    );
};

export default Home;