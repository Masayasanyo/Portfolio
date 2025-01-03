import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Education from './Education';
import Skill from './Skill';
import Project from './Project';

function Main() {
  return (
    <div className='main'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/education' element={<Education />} />
            <Route path='/skill' element={<Skill />} />
            <Route path='/project' element={<Project />} />
        </Routes> 
    </div>
  );
}

export default Main;