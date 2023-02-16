import Spinner from './Spinner';
import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../queries/projectsQueries';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const { data, loading, error } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects Found</p>
      )}
    </>
  );
};

export default Projects;
