import React from 'react';

function Home() {
    return (
        <div className="main home-container">

            <div className='title-container'>
                <h1>Welcome</h1>
                <h2>I'm Masaya</h2>
            </div>

            <div className='contents-container'>
                <div className='content'>
                    <h2>About me</h2>
                    <p>University student</p>
                    <p>I love books, movies, learning computer science and English.</p>
                </div>
                <div className='content'>
                    <h2>Get In Touch</h2>
                    <p>If you love learning new things as much as I do.</p>
                    <p>Let's talk about what we are learning and make new things.</p>
                    <a href="https://forms.gle/M6CPFDmvnjL4JE9TA" target="_blank" rel="noopener noreferrer">
                        CONTACT ME
                    </a>
                </div>            
            </div>

        </div>
    );
}
  
export default Home;