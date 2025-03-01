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
import WhatsAppButton from '../components/WhatsAppButton';

const Home = () => {

    return (
        <>
            <Navbar/>
            <Banner/>
            <Services/>
            <Features />
            <Expert/>
            <WhatsAppButton/>
            
             <Blogs/>
             <Emergency/>
         <Testimonial/>
           <Terms/> 
            <Privacy/>
            <Appointment/>
            {/* <WhatsAppButton/> */}
            <Footer/>
        </>
    );
};

export default Home;