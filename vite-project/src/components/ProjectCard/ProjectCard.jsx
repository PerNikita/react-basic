import React from 'react'
import project1Img from '../../assets/project1.jpg';
import project2Img from '../../assets/project2.png';
import project3Img from '../../assets/project3.jpg';

function ProjectCard(props) {
    return (
        <div>
            { props.isNew && (<div>isNew</div>) }
            <img src={props.image} alt="" />
            <p>{props.title} - {props.square} М² - {props.year}</p>
            <a href={props.link}>Подробнее →</a>
        </div>
    );
  }

  export default ProjectCard