import ProjectSidebar from "./Components/ProjectSidebar";
import NewProject from "./Components/NewProject";
import React, { useState, useRef } from "react";
import NoProjectSelected from "./Components/NoProjectSelected";
import SelectedProject from "./Components/SelectedProject";

function App() {
  const [projects, setProjects] = useState({
    project: undefined,
    projectList: [],
    tasks: [],
  });

  const handleAddTask = (text) => {
    setProjects((preV) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: preV.project,
        id: taskId,
      };
      return {
        ...preV,
        tasks: [...preV.tasks, newTask]
      };
    });
  };

  const handleDeleteTask = (id) => {
    const filteredTask = projects.tasks.filter((task) => task.id !== id);
    setProjects((prev) => ({
      ...prev,
      tasks: filteredTask,
    }));
    console.log(filteredTask);
  };

  const addProject = () => {
    setProjects((prev) => ({
      ...prev,
      project: null
    }));
  };

  const handleAddProject = (projectData) => {
    setProjects((preV) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      };
      return {
        ...preV,
        project: undefined,
        projectList: [...preV.projectList, newProject]
      };
    });
  };

  const handleDisplay = (id) => {
    setProjects((prev) => ({
      ...prev,
      project: id,
    }));
  };

  const handleCancel = () => {
    setProjects((prev) => ({
      ...prev,
      project: undefined
    }));
  };

  const deleteProject = (id) => {
    const filteredProject = projects.projectList.filter(
      (project) => project.id !== id,
    );
    setProjects((prev) => ({
      ...prev,
      project: undefined,
      projectList: filteredProject,
    }));
  };

  const selectedProject = projects.projectList.find(
    (project) => project.id === projects.project,
  );

  let current = (
    <SelectedProject
      project={selectedProject}
      onDelete={deleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projects.tasks}
    />
  );

  if (projects.project === null) {
    current = <NewProject onSave={handleAddProject} onCancel={handleCancel} />;
  } else if (projects.project === undefined) {
    current = <NoProjectSelected onAdd={addProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onAdd={addProject}
        projects={projects}
        onDisplay={handleDisplay}
        selectedId={projects.project}
      />
      {current}
    </main>
  );
}
export default App;
