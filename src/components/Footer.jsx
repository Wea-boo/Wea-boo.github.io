import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className='versatile-container'>
            <div id='left-side-footer'>
                <h3>Community:</h3>
                <div id='social-media'>
                    <img src="/Youtube.svg" alt="" width="46.03125px" height="auto"/>
                    <img src="/Facebook.svg" alt="" width="46.3125px" height="auto"/>
                    <img src="/Instagram.svg" alt="" width="40.7375px" height="auto"/>
                    <img src="/Discord.svg" alt="" width="40.88125px" height="auto"/>
                </div>
            </div>
            <img src="/Group 22.svg" alt="" width="158.05625" height="auto"/>
            <div id='right-side-footer'>
                <h3>Ressources:</h3>
                <ul id='res-list'>
                    <li>Code Art Documentation</li>
                    <li>Terms And Conditions</li>
                    <li>Sponsoring File</li>
                    <li>Event Schedule</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}
