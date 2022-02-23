import React from 'react';
import sectionimg from '../imges/sectionimg.png';


const Section = () => {
    return(
    <>
        <div className='TabSection'>
           <div className='conteiner'>
           <div className='Section_info'>
                <div className='section-text'> Tab Section </div>
                <div className='section-paragrf'> This is some text inside of a div block. </div>
                <div className='section-button'>
                    <button className='secton-bt1'>Tab Button 1</button>
                    <button className='secton-bt1'>Tab Button 2</button>
                    <button className='secton-bt1'>Tab Button 3</button>
                </div>
                <div className='section_img'>  <img src={sectionimg} alt="" />  </div>
                
                <div className='section-img-text'>Some Title Here</div>
                <div className='section-img-paragrf'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                     Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                     Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                 </div>
            </div>
           </div>
        </div>  
    </>
    
    )
};


export default Section;