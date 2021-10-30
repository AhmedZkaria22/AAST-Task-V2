import React from 'react';
import {MdAdsClick, MdHelpOutline, MdOutlinePhotoLibrary} from 'react-icons/md';
import {VscChecklist} from 'react-icons/vsc';
import {AiOutlineUnorderedList} from 'react-icons/ai';
import {FaHandsHelping, FaUserGraduate, FaUniversity} from 'react-icons/fa';

function Services() {
    const srvIcons = [MdAdsClick, VscChecklist, AiOutlineUnorderedList, FaHandsHelping, MdHelpOutline, FaUserGraduate, FaUniversity, MdOutlinePhotoLibrary];
    const srvNames = ['ONLINE ADMISSION', 'ENGLISH PLACEMENT TEST', 'ADMISSION RESULTS', 'NEED HELP?', 'HOW TO APPLY', 'WHAT DO I NEED TO DO', 'INTERNATIONAL STUDENTS', 'PHOTOGALLERY'];    
    const srvDescs = ['Undergraduate', 
        'Instructions for New Students & DEMO for AAST Cambridge Placement Test',     
        'Placement Test and Admission Results for New Applicants',     
        'please contact us for any help or additional Info.',     
        'In The following information you will find all you need to know about applying to AASTMT. Be sure to review all the admission steps.',     
        `If you're interested in joining AASTMT, you'll find all the information you need about admission policies, procedures and rules.`,     
        'Please review the following requirements to ensure you can provide all of the proper documentation to complete your application',     
        `Online Photogallery for AASTMT Students' visits`];
    const srvLinks = [
        'https://aastmtic.aast.edu/onlineadmission/',
        'http://www.aast.edu/en/colleges/placement-test.php',
        'https://aastmtic2.aast.edu/tansik/',
        'http://www.aast.edu/en/admission/',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600011',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600003',
        'http://www.aast.edu/en/centers/AfricanAffairs/',
        'http://www.aast.edu/en/admission/photogallery.php'
    ]
    return (
        <section id='services' className='container-fluid'>
            <h3>Services</h3>
            <div className="row">
            {
            srvNames.map( (srvName, i) => {
                const SrvIc = srvIcons[i];
                return(
                <div key={i} className="services__item col-12 col-sm-6 col-md-4 col-lg-3 text-center">
                    <div className="services__item__desc">
                        <SrvIc />
                        <p className='headP'>{srvName}</p>
                        {
                            (i <= 3 || i === 7) ?
                            <a href={srvLinks[i]} className='txtP'> {srvDescs[i]}</a>
                            :<p className='txtP'>{srvDescs[i]}</p>
                        }
                    </div>
                    {
                        (i === 4 || i === 5 || i === 6) &&  
                        <a href={srvLinks[i]} >read more</a>
                    }                
                </div>
            )} )
            }        
            </div>
        </section>
    )
}

export default Services
