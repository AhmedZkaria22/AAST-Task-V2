import React from 'react'
import { FaAngleDown } from 'react-icons/fa';

function LgNavBarNested({ menuItem, index, ndx, dataArr1, dataArr2}) {

    /*const handelNestedRefEnter = (e) => { 
        e.target.style.display = 'block';
    } 

    const handelNestedRefLeave = (e) => { 
        e.target.style.animation = 'navAnmy2 0.85s ease-in-out';
        setTimeout(() => {
            e.target.style.display = 'none'; 
        }, 850);                 
    }*/

    const handelNavRefEnter = () => {     
        document.querySelectorAll('.scr-no-small .navbar__link-list__container')[ndx].style.display = 'block';
    } 

    const handelNavRefLeave = () => { 
        document.querySelectorAll('.scr-no-small .navbar__link-list__container')[ndx].style.animation = 'navAnmy2 0.85s ease-in-out';
        setTimeout(() => {
            document.querySelectorAll('.scr-no-small .navbar__link-list__container')[ndx].style.display = 'none';
        }, 850); 
    }


    return (
        <div key={index} className="navbar__link-list" 
        onMouseEnter={handelNavRefEnter}
        onMouseLeave={handelNavRefLeave}>

            <a href='/#'> {menuItem} <FaAngleDown /> </a>

            <div className='navbar__link-list__container'>{
                dataArr1.map( (dt1, j) => { return( <a key={j} href={dataArr2[j]}>{dt1}</a> ) } )
            }</div>
        </div>
)
}

export default LgNavBarNested
