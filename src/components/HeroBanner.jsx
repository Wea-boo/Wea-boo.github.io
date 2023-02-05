import React from 'react'

export default function HeroBanner() {
  return (
    <section id='banner'>
        <div className='versatile-container'>
            <div className='left-side'>
                <div id='title'>
                <h1 id='title-1'>Welcome to</h1>
                <h1 id='title-2'>Create I.T 2023</h1>
                </div>
                <p id='intro-text'>Create I.T is an event that handles the art of creative coding through a series of workshops about the main categories of this art and an opportunity for Art Code Enthusiasts to compete in</p>
                <div id='event-btn'>
                    <button id='btn-join'>Join</button>
                    <button id='btn-info'>More</button>
                </div>
                
            </div>
            <div className='right-side'>
                <img src="/thing 1.png" alt="" />
                <img src="/Mask group.png" alt="Foreground image" style={{width: "393.125px",height: "auto",position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}/>
            </div>
        </div>
    </section>
  )
}
