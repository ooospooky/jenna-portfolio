import React from 'react'
import venus from '../image/venus.png'
import WSIW from '../image/WSIW.png'
export const Project = () => {
  return (
    <section id="project" className='project' >
      <div className='about'>
        <h2 className='about__h2'>PROJECT</h2>
      </div>
      <div className='project__container' >
        <div className='project__warp'>
          <img height="400px" alt="" src={WSIW}></img>
          <div className='project__content'>
            <h3>Redesign</h3>
            <h4>WHAT SHOULD I WEAR?</h4>
            <p>此專案是和一位前端工程師協作，而我是負責UI設計。專案目的是為了讓您在每天決定穿什麼時......</p>
          </div>
          <div className='project__btnWarp'>
            <a href="https://www.figma.com/exit?url=https%3A%2F%2Fwww.cakeresume.com%2Fportfolios%2Fwhat-should-i-wear" target="_blank" >專案介紹</a>
            <a href="https://what-should-i-wear-bd38a.web.app/" target="_blank" >網站連結</a>
          </div>
        </div>
        <div className='project__warp'>
          <img height="400px" alt="" src={venus}></img>
          <div className='project__content'>
            <h3>IOS APP Design </h3>
            <h4>VENUS</h4>
            <p>因為ＶENUS 沒有實體店面，單靠Instagram銷售，所以決定創造一個官方網站，讓消費者方便選購。</p>
          </div>
          <div className='project__btnWarp'>
            <a href="https://www.cakeresume.com/portfolios/ios-app-design-venus" target="_blank" >專案介紹</a>
            <p>未上架</p>
          </div>
        </div>
      </div>
    </section>
  )
}
