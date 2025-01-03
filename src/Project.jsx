import React from 'react';
import pm_gif from './assert/passmana.gif';
import ts_gif from './assert/turtle.gif';

function Project() {
    return (
        <div>
            <div className='sub-container'>
                <h2>PROJECTS</h2>
            </div>
            <div className='project-container'>
                <div className='project'>
                    <p>Password manager</p>
                    <img src={ pm_gif } alt='pm_animation'/>
                </div>
                <div className='project'>
                    <p>Turtle scooping</p>
                    <img src={ ts_gif } alt='ts_animation' height="400px" />
                </div>
            </div>

            <div className='sub-container'>
                <h2>Project goals</h2>
            </div>
            <div className='goals-container'>
                <p>An apps for foreigners who want to live in or visit Japan</p>
                <p>Menu app</p>
            </div>
        </div>
    );
}
  
export default Project;