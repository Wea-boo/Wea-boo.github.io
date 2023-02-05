import React from 'react'

export default function Contact() {
  return (
    <section id='mailing-list'>
        <div className="versatile-container">
            <h1 id='contact-h1'>Contact</h1>
            <div id='contact-text'>
              <p>Join our mailing list to stay in touch with our newest plans</p>
              <p>You’ll also get a weekly mail about some amazing code arts that were recently made</p>
            </div>
            <form action="" id='enter-mail'>
              <input type="email" placeholder='Your Email Address Here'/>
              <button>Submit</button>
            </form>
        </div>
    </section>
  )
}
