import React from 'react'
import { Link } from 'react-scroll'
export const Hero = () => {
  return (
    <section id="hero" className='hero' >
      <div className='hero__content'>
        <div className='hero__text'>
          <p className='hero__p'>Hi,I’m Jenna.</p>
          <p className='hero__p'>A UI Designer.</p>
        </div>
        <p className='hero__cta'>

          <span className="cta-btn cta-btn--hero">
            <Link to="skills" smooth duration={300}>Skills &thinsp;</Link>
          </span>
          <a href="https://drive.google.com/file/d/1zFuBk9cyciz2NUc6s10bGola6iiOW-DO/view" target="_blank" >
            <span className="cta-btn cta-btn--hero">
              Resume  &thinsp;
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
