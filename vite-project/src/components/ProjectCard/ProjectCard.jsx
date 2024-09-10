import React from 'react'
import project1Img from '../../assets/project1.jpg';
import project2Img from '../../assets/project2.png';
import project3Img from '../../assets/project3.jpg';

function ProjectCard() {
    return (
        <div>
            <div>NEW</div>
            <img src={project1Img} alt="" />
            <p>ЖК ПРАВОБЕРЕЖНЫЙ — 112 м² — 2023</p>
            <a href="http://">Подробнее →</a>
        </div>
    );
  }

  export default ProjectCard