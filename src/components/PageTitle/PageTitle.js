import React from 'react';
import './PageTitle.scss';

const PageTitle = ({title,description}) => {
    return (
        <div className='page-title'>
            <div className="container">
                <h2>Our Experts</h2>
                <p>Consult the expert doctors at Max Dental most of whom are pioneers in their specialties and apply a patient-focused approach towards healthcare.</p>
            </div>
        </div> 
    );
};

export default PageTitle;