import React from "react";
import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";
import { Card, Copy, Client, Button } from "./ProjectCardStyles";

const ProjectCard = ({ project }) => {
  return (
    <Card color={project.color}>
      <Copy>
        <h3>{project.title}</h3>
        <Client color={project.color}>{project.client}</Client>
        <p>{project.outline}</p>
      </Copy>
      {/* <Image fluid={project.featuredimage.childImageSharp.fluid} /> */}
      <Button
        to={`/projects${project.slug}`}
        aria-label={`Read more about ${project.title}`}
        cover
        bg={project.color}
        direction="down"
      >
        Read more <FaArrowRight />
      </Button>
    </Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
