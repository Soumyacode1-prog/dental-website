import React from 'react';
import './Team.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/about/team/dr121.png';
import imgTwo from '../../assets/about/team/dr2.png';
import imgThree from '../../assets/about/team/dr31.png';
import imgFour from '../../assets/about/team/dr416.png';


const Team = () => {

    const teams = [
        {
            'img': imgOne, // Image for Dr. Mayank Kr. Singh
            'name': 'Dr. Mayank Kr. Singh',
            'p': 'BDS (MCODS,Manipal), MDS (Oral Medicine & Radiology), MS Implantology',
            'P': 'REG.NO-3582/A' // Registration number
          },
        {
            'img': imgThree,
            'name': 'Dr.A Kumar',
            'p':'MDS ORTHODONTICS',
            'P':'REG.NO-7728/A'
        },
        {
            'img': imgTwo,
            'name': 'Dr.P.Kumar',
            'p':'MDS ORAL & MAXILLOFACIAL SURGERY',
            'P':'REG.NO-6217/A'

        },
        {
            'img': imgFour,
            'name': 'Dr.N.Milki',
            'p':'MDS MICRO ENDODONTICS',
            'P':'REG.NO-3605/A'
        }
    ]


    return (
        <section className='team-section pt-100' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <SectionTitle 
                            subTitle="Meet our Team"
                            title="Get to know the dentalist
                            dental Team"
                        />
                    </div>

                    <div className="col-lg-5">
                        <p className='pt-5'></p>
                    </div>
                </div>

                <div className="row">
                    {
                        teams.map (team => 
                            <div className="col-lg-3 col-sm-6">
                                <div className="team-card">
                                    <div className="team-img">
                                        <img src={team.img} alt="" />
                                    </div>
                                    <h3>{team.name}</h3>
                                    <h6>{team.p}</h6>
                                    <h6>{team.P}</h6>
                                </div>
                            </div>
                        )
                    }
                    {/* <div className='button-1'>
                        <button>Meet the Whole team </button>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Team;