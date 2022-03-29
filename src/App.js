import React from 'react';
import ProjectOwnerStore from "./ProjectOwnerStore";
import ProjectList from './component/ProjectList';
function App() {
 const store = ProjectOwnerStore;
  return (
    <div>
      <ProjectList store={store}></ProjectList>
    </div>
  );
}
export default App;