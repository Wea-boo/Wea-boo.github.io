import React from 'react'

export default function Description() {
  return (
    <section id='description'>
        <div className='versatile-container'>
            <div id='left-side-desc'>
                <img src="/Image Holder (1).svg" alt="" className='upper-image' />
                <img src="/Image Holder.svg" alt="" className='lower-image'/>
            </div>
            <div id='right-side-desc'>
                <h1 className='section-title'>Description:</h1>
                <p>Learning to program is no longer just for computer specialists and software developers. People from many different backgrounds now want to understand the basics of programming, because it’s both fun and an increasingly valuable skill. one of the most exciting ways to learn programming is through authoring your own creative programs. Known as <span style={{color: "#FFC11D", fontWeight: "700"}}>creative coding</span>, this growing field uses computer software as a medium to develop original creative expression. So if you’re an artist who’s interested in how you can expand your creative skills, or even a computer programmer looking to work in creative applications, you will find this event very helpful.</p>
            </div>
        </div>
    </section>
  )
}
