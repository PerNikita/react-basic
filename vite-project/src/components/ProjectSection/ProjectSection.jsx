import React from 'react'
import Heading from '../Heading/Heading';
import ProjectsCard from '../ProjectCard/ProjectCard';
import Button from '../Button/Button';

function ProjectsSection() {
    return (
      <div>
        <h2>Проекты</h2>
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <Button />
      </div>
    );
  }

  export default ProjectsSection