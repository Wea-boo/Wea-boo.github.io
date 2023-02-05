import React from 'react';
import CategCard from './CategCard';

const Categories = () => {

    const categories = [
        {title: "ASCII Art", description: "It’s a graphic design technique that uses computers for presentation and consists of pictures pieced together from the 95 printable characters defined by the ASCII Standard", picture: "/Group 26.svg"},
        {title: "Pixel Art", description: "it’s a form of digital art where images are built using pixels as the only building block. It is widely associated with the low-resolution graphic and arcade video game console", picture: "/Group 26 (1).svg"},
        {title: "Interactive Generative Art", description: "it’s a form of digital art that involves the use of algorithms and computational processes to generate and display visually appealing and unique pieces of art", picture: "/Group 26 (2).svg"},
        {title: "Animated Art", description: "any form of artistic expression that uses movement and change over time to convey a message or tell a story and create dynamic and engaging experiences for the viewer.", picture: "/Group 26 (3).svg"}
    ]

    return (
        <section id='categories'>
            <div className='versatile-container'>
               <h1 className='section-title'>Categories:</h1>
               <div className='card-grid'>
                {categories.map(cat => {
                    return(
                        <CategCard title={cat.title} paragraph={cat.description} image={cat.picture}/>
                    )
                })}
               </div>
            </div>
        </section>
    );
}

export default Categories;
