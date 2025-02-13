import React, { useContext } from 'react'
import { assets } from '../../assets/assets/assets'
import "./main.css"
import { Context } from '../../context/Context'

const Main = () => {

  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult
          ? <>
            <div className="greet">
              <p><span>Hello, Dev</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summerize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the readibility of following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </> :
          <div className='result'>
              <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
              </div> 
              <div className='result-data'>
                  <img src={assets.gemini_icon} alt="" />
                  {loading?<div className='loader'> 
                      <hr />
                      <hr />
                      <hr />
                  </div>
                  :  <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                  }
                 
              </div>
          </div>
          }

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" className="text" placeholder='Enter a Prompt Here' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className='bottom-info'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi modi quidem est molestiae!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main