import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";

const Project = ({ heading, specificRepos }) => {
  const [projectsArray, setProjectsArray] = useState([]);
  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      // Fetch each specific repository
      for (let { username, repoName } of specificRepos) {
        try {
          const response = await axios.get(`${API}/repos/${username}/${repoName}`);
          repoList.push(response.data);
        } catch (error) {
          console.error(`Error fetching ${repoName} from ${username}: ${error.message}`);
        }
      }
      setProjectsArray(repoList);
    } catch (error) {
      console.error(`Error fetching repositories: ${error.message}`);
    }
  }, [specificRepos]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container>
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projectsArray.length > 0
            ? projectsArray.map((project, index) => (
                <ProjectCard
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  value={project}
                />
              ))
            : specificRepos.map((_, index) => (
                <ProjectCard
                  key={`dummy-${index}`}
                  id={`dummy-${index}`}
                  value={dummyProject}
                />
              ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
