import React from 'react';
import servicesimg from '../imges/services1.png';
import servicesimgs from '../imges/services2.png';




const Services = () =>{
    return(
        <>
        <div className='services'>
            <div className='conteiner'>
            <div className='services-title'>
                <div className='services-title'> services </div>
                <div className='servises-paragrf'>This is some text inside of a div block.</div>
            </div>
            <div className='sc'>
            <div className='services-imgs'>
            <div className='services-imgs1'> <img src={servicesimg} alt="" />  </div>
            <div className='services-title-img'> SERVICES one </div>
            <div className='services-title-paragrf'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius. </div>
            <div className='services-btnss'>  <button className='services-btn'> Learn more </button>  </div>
            </div>
            <div className='services-imgs'>
            <div className='services-imgs1'> <img src={servicesimg} alt="" />  </div>
            <div className='services-title-img'> SERVICES one </div>
            <div className='services-title-paragrf'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius. </div>
            <div className='services-btnss'>  <button className='services-btn'> Learn more </button>  </div>
            </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Services;

//  <div className='services-imgs2'> <img src={servicesimgs} alt="" />  </div>