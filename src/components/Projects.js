import React from 'react'

function Projects() {
    return(
        <section id="Work" class="Work">
            <header class = "item-a"><h2>Work</h2></header> 
            <li class = "item-b">
                <a class="coding-project" href="https://nickdibartolo1.github.io/Project-1-MLB-Player-Info-website/" target="_blank"></a>
                <summary class="project-name">
                    <h5>MLB Player Info Site</h5>
                    <p>HTML/CSS/Javascript</p>
                </summary>
            </li>
            <li class = "item-c">
                <a class="coding-project" href="https://boredom-buster.herokuapp.com/" target="_blank"></a>
                <summary class="project-name">
                    <h5>Boredom Buster</h5>
                    <p>Node/Express, Handlebars, JS, CSS</p>
                </summary>
            </li>
            <li class = "item-d">  
                <summary class="project-name">
                    <h5>Placeholder</h5>
                </summary>
            </li>
            <li class = "item-e">
                <summary class="project-name">
                    <h5>Placeholder</h5>
                </summary>
            </li>
            <li class = "item-f">  
                <summary class="project-name">
                    <h5>Placeholder</h5>
                </summary>
            </li>
            
        </section>
    )
}

export default Projects;