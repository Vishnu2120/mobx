import React from "react";
import {observer} from "mobx-react-lite";

function ProjectList({ store }) {
    const handleAppProject = () =>{
        const name = prompt("Name of the Project");
        const type = prompt("Type of the Project");
        const breed = prompt("Source of the Project");
        const ownerId = prompt("Owner's Id of the Project");
      
        const project = store.createProject({ id: Date.now(), name, breed, type });
        store.assignOwnerToProject(ownerId, project.id);
    };
    const handleDeleteProject = (project) => {
        store.deleteProject(project.id);
      };
      const handleUpdateProject = (project) => {
        project.name = prompt("Name of the Project", project.name);
        project.type = prompt("Type of the project", project.type);
        project.breed = prompt("Source of the project", project.breed);
        const ownerId = prompt("Owner's Id of the project", project.owner?.id);
        store.updateProject(project.id, project);
        if (ownerId !== project.owner?.id) {
          store.assignOwnerToProject(ownerId, project.id);
        }
      };
    return(
        <div>
            <p>{store.storeDetails}</p>
            <button onClick={handleAppProject}>+ Add New Item</button>
            <table>
                <thead>
                    <tr>
                       
                        <th>Project </th>
                        <th>Type </th>
                        <th>Platform</th>
                        <th>Owner</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th></th>
                    </tr>
                </tbody>
                {store.projects.map((project) => {
      return ( <tr key={project.id}>
        {/* <td>{project.id}</td> */}
        <td>{project.name}</td>
        <td>{project.type}</td>
        <td>{project.source}</td>
        <td>
          {project.owner
            ? `${project.owner?.firstName} ${project.owner?.lastName}`
            : "---"}
        </td> <td>
            <button
              onClick={() => handleDeleteProject(project)}
              style={{ marginRight: "1rem" }}
            >
              Delete 
            </button>
            <button className="button-primary" onClick={() => handleUpdateProject(project)}>
              Update 
            </button>
          </td>
        </tr>
      );
    })}
            </table>
            
        </div>
    )    


}

export default observer(ProjectList);