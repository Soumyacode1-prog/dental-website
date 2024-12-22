
import React from 'react';
import './Safety.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Safety = () => {
    return (
        <section className='safty-section pt-100 section-bg section-common pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle 
                    subTitle="Lets have a"
                    title="Tour to our Clinic "
                    description=""
                />

                <div className="safety-video ratio ratio-16x9">
                    <iframe 
                        src="https://www.youtube.com/embed/0AxZpfMsk1g" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    >
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default Safety;
