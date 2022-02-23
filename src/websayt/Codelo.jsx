import React from 'react';
import saat from '../imges/saat.png';
import code from '../imges/code.png';


const Codelo  = () =>{
    return(
        <>
           <div className='codelo'>
          <div className='conteiner'>
          <div className='codelo-title'>
            <div className='codelo-text'>what we do</div>
            <div className='codelo-paragrf'> This is some text inside of a div block. </div>
            </div>
                <div className='codelo-info'>
                <div className='codelo-img'>
                <div className='codelo-img1'> <img src={saat} alt="" /> </div>
                <div className='imges-title'>Graphic Design </div>
                <div className='imges-paragrf'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </div>
                </div>
                <div className='codelo-img'>
                <div className='codelo-img1'> <img src={code} alt="" /> </div>
                <div className='imges-title'>Graphic Design </div>
                <div className='imges-paragrf'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </div>
                </div>
                <div className='codelo-img'>
                <div className='codelo-img1'> <img src={saat} alt="" /> </div>
                <div className='imges-title'>Graphic Design </div>
                <div className='imges-paragrf'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </div>
                </div>
                </div>
          </div>
            </div> 
        </>
    )
}

export default Codelo;