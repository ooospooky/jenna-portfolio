import React from 'react'
import AdobeXD from '../image/svg/AdobeXD.svg'
import Figma from '../image/svg/Figma.svg'
import Photoshop from '../image/svg/Photoshop.svg'
import Starbucks from '../image/svg/Starbucks.svg'
import StarbucksComment from '../image/IMG_6397.JPG'
import Starbucksboard1 from '../image/starbuckboard1.png'
import Starbucksboard2 from '../image/starbuckboard2.png'
export const Skills = () => {
  return (
    <div>
      <section id="skills" className='skills' >
        <h2 className='skills__h2'>UI Skills</h2>
        <div className='uiSkills'>
          <div className="container">
            <p className="container__p">設計系統</p>
            <hr className="container__hr" />
            <p className="container__p" >Design System</p>
          </div>
          <div className="container">
            <p className="container__p">框線搞設計
            </p>
            <hr className="container__hr" />
            <p className="container__p" >Wireframe</p>
          </div>
          <div className="container">
            <p className="container__p">視覺搞設計</p>
            <hr className="container__hr" />
            <p className="container__p" >Mockup</p>
          </div>
          <div className="container">
            <p className="container__p">響應式設計</p>
            <hr className="container__hr" />
            <p className="container__p" >RWD Design</p>
          </div>
          <div className="container">
            <p className="container__p">原型設計</p>
            <hr className="container__hr" />
            <p className="container__p" >Prototype  </p>
          </div>
        </div>
        <h2 className='skills__h2'>Design Tools </h2>
        <p className='skills__h2Description'>在UI/UX設計初期使用Adobe XD，目前以Figma為主要設計工具。</p>
        <div className='designTool'>
          <div className="container">
            <img src={Figma}></img>
            <p className="container__p" >Figma</p>
          </div>
          <div className="container">
            <img src={AdobeXD}></img>
            <p className="container__p" >AdobeXD</p>
          </div>
          <div className="container">
            <img src={Photoshop}></img>
            <p className="container__p" >Photoshop</p>
          </div>
        </div>
        <h2 className='skills__h2'>Language </h2>
        <div className="Language">
          <div className="container">
            <p className="container__p" >中文｜母語</p>
          </div>
          <div className="container">
            <p className="container__p" >English ｜ TOEIC 650</p>
          </div>
        </div>
      </section >
      <section id="work" className='work' >
        <h2 className='skills__h2'>Work Experience </h2>
        <div className='container'>
          <div className='starbucks'>
            <img src={Starbucks}></img>
            <div className='starbucks__pWarp'>
              <p className='starbucks__p1 '>星巴克Starbucks_悠旅生活事業股份有限公司</p>
              <p className='starbucks__p2'>值班經理 七月 2020 - 七月 2022</p>
            </div>
          </div>
          <div className='work__wrap'>
            <p className='work__description'>在星巴克任職2年，設計了所有星巴克黑板及行銷刊板，因<span className="work__description greenP">學習力強、做事盡責</span>，在一年內晉升為值班經理，這讓我有很多機會與<span className="work__description greenP">團隊溝通、協調</span>，也訓練了我<span className="work__description greenP">解決問題的能力</span>，相信這些能力也都能用在職場上。</p>
          </div>
          <div className='experience'>
            <div className='work__comment'>
              <h3>店經理評分＆評語</h3>
              <img width='450px' height='360px'alt="" src={StarbucksComment}></img>
            </div>
            <div className='work__design'>
              <h3>刊板設計</h3>
              <div className='work__imgWarp'>
              <img width='280px' height='360px' alt="" src={Starbucksboard1}></img>
              <img width='280px' height='360px' alt="" src={Starbucksboard2}></img>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  )
}
