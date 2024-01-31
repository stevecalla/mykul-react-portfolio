// Import the Project component and the project data
import Project from "../component/Project";
import projects from '../data/project.json';

// Functional component to display projects
function Projects() {
    return (
        <div className="background min-vh-100 pb-5">
            {/* Heading for the projects section */}
            <h2 className="p-5 pb-3">A display of some of the projects I've worked on, deployed webpages, and Github repo's:</h2>

            {/* Container for displaying projects */}
            <div className="flex-wrap d-flex m-4 p-4">
                {/* Map through the project data and render Project components */}
                {projects.map((project) => {
                    return (
                        <Project
                            key={project.id}
                            title={project.title}
                            image={project.image}
                            description={project.description}
                            tools={project.tools}
                            deployed={project.deployed}
                            github={project.github}
                        />
                    );
                })}
            </div>
        </div>
    );
}

// Export the Projects component
export default Projects;
