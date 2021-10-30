import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { GrMenu, GrSearch } from 'react-icons/gr';
import SmNavBarNested from './SmNavBarNested';
import logo from '../images/headerLogo.png';

function HeaderSm() {

    const menuList = ['Home', 'About', 'Colleges & Degrees' , 'Undergraduate Admission', 'International Certificates', 'Campuses'    , 'Student Services', 'Staff', 'Contact Us'];
    const aboutList = ['Overview','Dean Word'];
    const collegesList = ['Management & Technology','Maritime Transport & Technology','College of Law','Computing & Information Technology','International Transport & Logistics','Language & Communication','Fisheries Technology & Aquaculture','Pharmacy' ,'College of Oral & Dental Medicine','Engineering and Technology','College of Artificial Intelligence'];
    const campusesList = ['Alexandria','Heliopolis','Dokki','Smart Village','Port Said','South Valley','Lattakia','El Alamein','Sharjah']    
    const [aboutListener, setAboutListener] = useState(true);
    const [collegeListener, setCollegeListener] = useState(true);
    const [campusesListener, setCampusesListener] = useState(true);

    const menuLinks = [
        '/#', '/#', '/#', 'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600011',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600004', '/#', 
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600012',
        'http://www.aast.edu/en/admission/stafftemp.php',
        'http://www.aast.edu/en/admission/contact-us.php'
    ];
    const aboutLinks = [
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600021',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600022'
    ];
    const collegesLinks = [
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600015',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600013',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600027',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600017',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600016',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600018',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600019',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600020',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600026',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600014',
        'http://www.aast.edu/en/admission/contenttemp.php?page_id=54600028'
    ];
    const campusesLinks = [
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

    return (
        <section id='headerSm' className='d-block d-lg-none d-xl-none container-fluid'>
            <div className="row headerSm__controlls">
                <button>العربية</button>
                <form>
                    <input type="text" placeholder='AASTMT Search'/>
                    <button type='submit'> <GrSearch /> </button>
                </form>
                <GrMenu onClick={() => {
                            document.querySelector('.small-nav').style.display = 'block';
                            document.querySelector('.small-nav').style.animation = 'smallNav1 1.2s ease-in-out';
                }}/> 
            </div>
            <div className='small-nav'>
                <div className="scr-small">
                    {menuList.map( (menuItem, i) => {return(
                        <>{
                            (i !== 1 && i !== 2 && i !== 5) ?
                            <a key={i} href={menuLinks[i]}> {menuItem} </a>
                            :<>{
                                (i === 1) ?
                                    <SmNavBarNested key={i} index={i} menuLinks={menuLinks} menuItem={menuItem} setlstn={setAboutListener} 
                                    lstn={aboutListener} chindex={2} dataArr1={aboutList} dataArr2={aboutLinks}/>
                                : (i === 2) ? 
                                    <SmNavBarNested key={i} index={i} menuLinks={menuLinks} menuItem={menuItem} setlstn={setCollegeListener} 
                                    lstn={collegeListener} chindex={4} dataArr1={collegesList} dataArr2={collegesLinks}/>
                                : (i === 5) ? 
                                    <SmNavBarNested key={i} index={i} menuLinks={menuLinks} menuItem={menuItem} setlstn={setCampusesListener} 
                                    lstn={campusesListener} chindex={8} dataArr1={campusesList} dataArr2={campusesLinks}/>
                                : null
                            }</>
                        }</>
                    )})}
                    <FaTimes className='small-nav__close' onClick={() => {
                        document.querySelector('.small-nav').style.animation = 'smallNav2 1.2s ease-in-out';
                        setTimeout(() => {
                            document.querySelector('.small-nav').style.display = 'none'; 
                        }, 1200);  
                    }}/>        
                </div>
            </div>
            <div className="row headerSm__hero">
                <div className="header__container__col col-8 col-xs-8 col-sm-4 col-md-4">
                    <img src={logo} alt="headerLogo" className='img-fluid'/>
                </div>
                <div className="header__container__col col-xs-12 col-sm-12 col-md-8">
                    <h3 className='text-start'>Deanery of Admission and Registration</h3>
                    <p>Arab Academy for Science, Technology and Maritime Transport</p>
                </div>
            </div>
        </section>
    )
}

export default HeaderSm
