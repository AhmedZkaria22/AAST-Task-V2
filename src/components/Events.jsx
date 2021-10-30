import React from 'react'

function Events({wd}) {
    const evDts = ['09', '26', '28'];
    const evMons = ['oct', 'sep', 'aug'];
    const evMonsSm = ['October', 'September', 'August'];
    const evHds = ['Beginning of Study of First Semester', 
        'Beginning Of "First Semester 2021 - 2022" Registration And Tuition Fees Payment',
        'Beginning Of Summer Semester Final Exams'];
    return (
        <section id='upEvents'>
            <h3>Upcoming Events</h3>
            <div className="upEvents__container">{
                evHds.map( (evHd, i) => {return(
                    <div key={i} className="upEvents__container__item">
                        <div>
                            <span>{evDts[i]}</span>
                            { (wd <= 360)
                                ? <span>{evMonsSm[i]}</span>
                                : <span>{evMons[i]}</span>
                            }                            
                        </div>
                        <p className='headP'>{evHd}</p>
                        <p className='txtP'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aut vel inventore animi minus vero recusandae eum mollitia aliquid, similique cum quis laboriosam dolorem officiis?</p>
                    </div>
                )} )
            }</div>
            <a href='http://www.aast.edu/en/admission/events.php'>More Events</a>
        </section>
    )
}

export default Events
