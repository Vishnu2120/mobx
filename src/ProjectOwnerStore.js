import React from "react";
import ReactDOM from "react-dom";
import { observable,action,computed, makeObservable } from "mobx";


class ProjectOwnerStore {
    projects = [];
    owners = [];
    
    constructor () {
        makeObservable(this, {
          projects: observable,
          owners: observable,
          totalOwners: computed,
          totalProjects: computed,
          storeDetails: computed,
          getProjectsByOwner: action,
          createProject: action,
          createOwner: action,
          updateProject: action,
          updateOwner: action,
          deleteProject: action,
          deleteOwner: action,
          assignOwnerToProject: action
        });
       // autorun(logStoreDetails);
    }

    get totalOwners(){
       return this.owners.length;
    }
    get totalProjects(){
        return this.projects.length;
    }
     
    getProjectsByOwner(ownerId) {
         return this.projects.filter((project) => {
         return project.owner && project.owner.id === ownerId;
    });
  }
  
    createProject(project = { id: 0, name: "", type: "", breed: "", owner: null }) 
    {
      this.projects.push(project);
    }
  
    createOwner(owner = { id: 0, firstName: "", lastName: "" }) 
    {
      this.owners.push(owner);
    }

    
  updateOwner(ownerId, update) 
    {
        const ownerIndexAtId = this.owners.findIndex((owner) => owner.id === ownerId);
        if (ownerIndexAtId > -1 && update) {
        this.owners[ownerIndexAtId] = update;
        }
    }
    
  updateProject(projectId, update) 
    {
        const projectIndexAtId = this.projects.findIndex((project) => project.id === projectId);
        if (projectIndexAtId > -1 && update) {
            this.projects[projectIndexAtId] = update;
        }
    }
  deleteProject(projectId) 
    {
        const projectIndexAtId = this.projects.findIndex((project) => project.id === projectId);
        if (projectIndexAtId > -1) {
          this.projects.splice(projectIndexAtId, 1)
        }
    }
  deleteOwner(ownerID)
    {
        const ownerIndexAtId = this.owners.findIndex((owner) => owner.id === ownerID );
        if (ownerIndexAtId > -1) {
            this.owners.splice(ownerIndexAtId, 1);
        }
    }
   
  assignOwnerToProject(ownerId, projectId) 
    {
        const projectIndexAtId = this.projects.findIndex((project) => project.id === project);
        const ownerIndexAtId = this.owners.findIndex((project) => project.id === ownerId);
        if (projectIndexAtId > -1 && ownerIndexAtId > -1) {
            this.projects[projectIndexAtId].owner = this.ownrs[projectIndexAtId];
        }
    }

  get storeDetails () 
    {
        return `We have ${this.totalProjects} total projects and ${this.totalOwners} total owners, so far!!!`
    }

//     // Log the store details to the console
//   logStoreDetails() 
//     {
//         console.log(this.storeDetails);
//     }
    
  }

  const projectOwnerStore = new ProjectOwnerStore();
  projectOwnerStore.createProject({
    id: 1,
    name: "Abintal",
    type: "Shopping",
    source: "PHP",
  });
 
  
  
  projectOwnerStore.createProject({
    id: 2,
    name: "LiveChat",
    type: "Medical",
    source: "ASP.NET",
  });
  projectOwnerStore.createProject({
    id: 3,
    name: "RLloyd",
    type: "VOIP",
    source: "Angular",
  });
  
  projectOwnerStore.createOwner({ 
      id: 1, 
      firstName: "Sundar", 
      lastName: "Pitchai" });
  
  export default projectOwnerStore;