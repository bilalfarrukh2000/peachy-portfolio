
import React from 'react';


function About () {
    return (
    <div>

        <section class="wallpaper">
                <img src={require('../Bilal.jpeg')} class="Bilal"/>
        </section>
    
        <section id="About-Me" class="About-Me">
            <h2>About Me</h2>
            <p>
                I am 22 years old, and completed my degree in Business Information Systems. My everyday life consists of me with my family and friends watching movies and sometimes travelling around the country. One of my biggest hobbies is to watch and play sports such as basketball, football, soccer, or baseball.
            </p>
        </section>

    </div>
    )
}

export default About;