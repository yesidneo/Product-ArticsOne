import React from "react";

export default function Labels() {
  return (
    <div className='pages'>
      <div className='pages_wrapper'>
        <div
          id='page-1'
          className='page page--welcome page--intro'>
          <h1 className='message'>ArticsOne</h1>
        </div>
        <div
          id='page-2'
          className='page page--headband page--hidden'>
          <h1 className='message'>Headband</h1>
          <p className='message--sub'>
          Experience the pinnacle of headbanging performance with Carbon Fiber
            Reinforcement. Elevate your passion for music and unleash your inner
            rock god. Whether you&apos;re a fan, musician, or simply love a good
            headbang, this is your chance to be part of the revolution
          </p>
        </div>
        <div
          id='page-3'
          className='page page--sounds page--hidden'>
          <h1 className='message'>Sound Control</h1>
          <p className='message--sub'>
          Scroll and Normal Modes for Unparalleled Control! Say goodbye to
            cumbersome controls and hello to a new era of headphone convenience!
            We are thrilled to present our groundbreaking Ergonomic Buttons with
            Scroll and Normal modes, designed to revolutionize your audio
            experience.
          </p>
        </div>
        <div
          id='page-4'
          className='page page--battery page--hidden'>
          <h1 className='message'>Great Battery</h1>
          <p className='message--sub'>
          Experience the revolution of extended battery life with our Lithium
            Battery-Powered Headphones. Say goodbye to constant charging and
            embrace a world where your music is always at your fingertips.
           
          </p>
        </div>
        <div
          id='page-5'
          className='page page--construction page--hidden'>
          <h1 className='message'>Best Construction</h1>
          <p className='message--sub'>
            That&apos;s why we&apos;ve engineered the best construction headphones to
            elevate your work experience like never before.<br></br>onals who demand the
            very best.
          </p>
        </div>
        <div
          id='page-6'
          className='page page--brandlogo page--hidden'>
          <h1 className='message'>Get yours!</h1>
          <button className='comprar'>AR-mode</button>
        </div>
      </div>
    </div>
  );
}

