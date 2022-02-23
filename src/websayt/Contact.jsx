import React from 'react';
import twitter from '../imges/Twitter.png';




const Contact = () =>{
    return(
        <>
        <div className='contact'>
            <div className='conteiner'>
            <div className='contact-info'>
              <div className='contact-title'>
              <div className='contact-text'>about velocity </div>
                <div className='contact-paragrf'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Suspendisse varius enim in eros elementum tristique.  Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. </div>
              </div>
              <div className='contact-links'>
                <div className='contct-lin'>useful links</div>
                <div className='contact-parag'>Phasellus gravida semper nisi</div>
                <div className='contact-parag'>Suspendisse nisl elit</div>
                <div className='contact-parag'>Dellentesque habitant morbi</div>
                <div className='contact-parag'>Etiam sollicitudin ipsum</div>
              </div>
              <div className='contact-icon'>
                <div className='contact-icon-text'>social</div>
                <div  className='contact-img'> <img src={twitter} alt="" /> Twitter </div>
                <div className='span-ba'> </div>
                <div  className='contact-img'> <img src={twitter} alt="" /> Twitter </div>
                <div className='span-ba'> </div>
                <div  className='contact-img'> <img src={twitter} alt="" /> Twitter </div>
                <div className='span-ba'> </div>
                <div  className='contact-img'> <img src={twitter} alt="" /> Twitter </div>
                <div className='span-ba'> </div>
                <div  className='contact-img'> <img src={twitter} alt="" /> Twitter </div>
                <div className='span-ba'> </div>
              </div>    
            </div>
            </div>
        </div>
        </>
    )
}

export default Contact; 