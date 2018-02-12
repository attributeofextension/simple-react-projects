import "./AboutPage.css";
import React from 'react';

const AboutPage = () => {
  return (
    <div className="container about-page">

    <div className="card">
      <div className="card-content">
        <i className="material-icons" style={{fontSize:80,color:"#4CAF50"}}>face</i>
        <h4>Hi! I'm Leah Carr</h4> 
        <h5>I'm a MERN stack developer</h5> 
        <p> 
          I'm looking for work at the moment. To boost my profile I've chosen to do over some freecodecamp.com projects in React and Redux. 
          My toolkit includes HTML, CSS, JavaScript, jQuery, Node, Express, MongoDB, React and Redux. 
          I'm self-taught and continuing to teach myself new things every day. 
          As a self-taught developer I am self-motivated and capable of taking the time to learn a new piece of tech if the job demands it.
        </p>
        <p style={{marginTop:10}}>If you like what you see, drop me an email at <a href="mailto:leah.carr@gmail.com">leah.carr@gmail.com</a></p>
        <p>For more projects, check out my portfolio at <a href="https://attributeofextension.github.io/" target="_blank">https://attributeofextension.github.io/</a></p>
        <p>Or you can go straight to my codepen: <a href="https://codepen.io/attributeofextension/" target="_blank">https://codepen.io/attributeofextension/</a></p>
        <p>Or straight to Github: <a href="https://github.com/attributeofextension" target="_blank">https://github.com/attributeofextension</a></p>,
      </div>
    </div>
    </div>
  );
}
export default AboutPage;