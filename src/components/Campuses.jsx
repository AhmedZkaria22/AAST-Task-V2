import React from 'react';
import Alexandria from '../images/Campuses/alex.jpg';
import Elalamein from '../images/Campuses/elalamein.jpg';
import Heliopolis from '../images/Campuses/heliopolis.jpg';
import Dokki from '../images/Campuses/dokki.jpg';
import Smart from '../images/Campuses/smart.jpg';
import PortSaid from '../images/Campuses/portsaid.jpg';
import SouthValley from '../images/Campuses/south-valley.jpg';
import Sharjah from '../images/Campuses/sharjah.jpg';
import Lattakia from '../images/Campuses/syria.jpg';


function Campuses({wd}) {
    const camps = ['Alexandria', 'Heliopolis', 'Dokki', 'Smart Village', 'Port Said', 'South Valley', 'Lattakia', 'Elalamein', 'Sharjah'];
    const campsLinks = [
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600002',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600005',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600006',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600007',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600008',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600009',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600010',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600024',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600025'
    ];
    const campsImgs = [Alexandria, Heliopolis, Dokki, Smart, PortSaid, SouthValley, Lattakia, Elalamein, Sharjah];

    return (
        <section id='Campuses'>
            <h3>Our Campuses</h3>
            <div className="campuses__container">
            {
                camps.map( (camp , i) => {return(
                    <div key={i} className="campuses__container__item">
                        <img src={campsImgs[i]} alt={`${camp} img`} />
                        <a href={campsLinks[i]}>{camp}</a>
                    </div>
                )} )
            }
            </div>
        </section>
    )
}

export default Campuses
