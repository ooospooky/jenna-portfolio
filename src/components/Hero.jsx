import React from 'react'
import { Link } from 'react-scroll'
import mdi_file from '../image/svg/mdi_file.svg'
import mdi_tools from '../image/svg/mdi_tools.svg'

export const Hero = () => {
  return (
    <section id="hero" className='hero' >
      <div className='hero__content'>
        <div className='hero__text'>
          <p className='hero__p'>Hi,I’m Jenna.</p>
          <p className='hero__p'>A UI Designer.</p>
        </div>
        <p className='hero__cta'>

          <span className="cta-btn cta-btn--hero ">
            <Link to="skills" smooth duration={300} className="hero__link">
              <img src={mdi_tools} width="30px" height="30px" alt="" /><span>Skills </span></Link>
          </span>
          <a href="https://drive.google.com/file/d/1zFuBk9cyciz2NUc6s10bGola6iiOW-DO/view" target="_blank" >
            <span className="cta-btn cta-btn--hero " >
              <div className="hero__link">
              <img src={mdi_file} width="30px" height="30px" alt="" /> <span>Resume</span>
              </div>
            </span>
          </a>
        </p>
      </div>
      <div className='hero__imgContainer'>
        {/* <img className='hero__img' src={hero}></img> */}
        <div className='hero__img'></div>
      </div>
    </section>
  )
}
