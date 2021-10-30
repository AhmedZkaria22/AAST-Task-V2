import React from 'react';
import { GrSearch } from 'react-icons/gr';
import logo from '../images/headerLogo.png';

function Header() {
    return (
        <header className='d-none d-lg-block d-xl-block'>
            <div id="header__container" className='container-fluid'>
                <div className="row">
                    <div className="header__container__col col-3">
                        <img src={logo} alt="headerLogo" className='img-fluid'/>
                    </div>
                    <div className="header__container__col col-9">
                        <h3 className='text-start'>Deanery of Admission and Registration</h3>
                        <p>Arab Academy for Science, Technology and Maritime Transport</p>
                        <form>
                            <input type="text" placeholder='AASTMT Search'/>
                            <button type='submit'> <GrSearch /> </button>
                        </form>
                        <button>العربية</button>
                    </div>
                </div>
            </div>            
        </header>
    )
}

export default Header
