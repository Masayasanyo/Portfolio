import React from 'react';

function Skill() {
    return (
        <div>
            <div className='sub-container'>
                    <h2>SKILLS</h2>
            </div>

            <div className='skill-container'>
                <div className='skill-content'>
                    <h3>Programing</h3>
                    <div className='programing'>
                        <p>C</p>
                    </div>
                    <div className='programing'>
                        <p>Python</p>
                    </div>
                    <div className='programing'>
                        <p>HTML, CSS, JavaScript, React.js, Node.js</p>
                    </div>
                </div>
                <div className='skill-content'>
                    <h3>Language</h3>
                    <div className='language'>
                        <p>Japanese</p>
                    </div>
                    <div className='language'>
                        <p>English</p>
                    </div>
                </div>
                <div className='skill-content'>
                    <h3>Qualification</h3>
                    <div className='qualification_container'>
                        <p className='qualification'>(Basic Information Technology Engineer Examination → Scheduled for April 2025)</p>
                    </div>
                </div>              
            </div>
        </div>

    );
  }
  
export default Skill;