import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Head from 'next/head';

const About = () => {
  const [mode, setMode] = useState('');

  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
      setMode(savedMode);
    } else {
      const initialMode = 'light';
      setMode(initialMode);
      localStorage.setItem('mode', initialMode);
    }
  }, []);

  const handleToggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('mode', newMode);
  };

  useEffect(() => {
    document.body.style.backgroundColor = mode === 'dark' ? 'black' : 'white';
    document.body.style.color = mode === 'dark' ? 'white' : 'black';
  }, [mode]);

  // Check if mode is not yet set to prevent flashing
  if (mode === '') {
    return null; // or loading indicator, or any placeholder
  }

  return (
    <>
  <Head>
  <title>TODOs About</title>
</Head>
<div>
  <Navbar handleToggleMode={handleToggleMode} mode={mode} />

  <div className='container' style={{ backgroundColor: mode === 'light' ? 'white' : 'black', color: mode === 'light' ? 'black' : 'white' }}>
    <div className='text-center my-3 mt-5 mx-3'>
      <h2 className='mb-3'>About Us</h2>

<div className="accordion" id="accordionExample">

<div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: mode === 'light' ? 'white' : 'black', color: mode === 'light' ? 'black' : 'white' }}>
              Adding Your Tasks
            </button>
          </h2>
<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={{ backgroundColor: mode === 'light' ? 'white' : 'black', color: mode === 'light' ? 'black' : 'white' }}>
<div className="accordion-body">
TODOs List allows you can add, edit, and manage your tasks effectively.
</div>
          </div>
</div>

<div className="accordion-item">
<h2 className="accordion-header">
<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="#collapseFour" style={{ backgroundColor: mode === 'light' ? 'white' : 'black', color: mode === 'light' ? 'black' : 'white' }}>
Storage
</button>
</h2>
<div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{ backgroundColor: mode === 'light' ? 'white' : 'black', color: mode === 'light' ? 'black' : 'white' }}>
<div className="accordion-body">
It stores Todos in Your Browser So if you Clear Site Data your Todos will Deleted.
</div>
</div>
</div>

<div className="accordion-item">
<h2 className="accordion-header">
<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: mode === 'light' ? 'white' : 'black', color: mode === 'light' ? 'black' : 'white' }}>
Free To Use
</button>
</h2>
<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{ backgroundColor: mode === 'light' ? 'white' : 'black', color: mode === 'light' ? 'black' : 'white' }}>
<div className="accordion-body">
TODOs List is a free task management tool that allows you to organize and prioritize your tasks.
</div>
</div>
</div>

<div className="accordion-item">
<h2 className="accordion-header">
<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ backgroundColor: mode === 'light' ? 'white' : 'black', color: mode === 'light' ? 'black' : 'white' }}>
Browser Compatible
</button>
</h2>
<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{ backgroundColor: mode === 'light' ? 'white' : 'black', color: mode === 'light' ? 'black' : 'white' }}>
<div className="accordion-body">
TODOs List is compatible with all major web browsers, including Edge, Chrome, Firefox, Internet Explorer, Safari, and Opera. 
</div>
</div>
</div>




</div>

    </div>
  </div>
</div>

    </>
  );
};

export default About;

