import Button from "./Button";

export default function ProjectSidebar({
  onAdd,
  projects,
  onDisplay,
  selectedId,
}) {
  const { projectList } = projects;
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppecase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onAdd}>+add Project</Button>
      </div>
      <ul className="mt-8">
        {projectList.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm hover:text-stone-200 hover:bg-stone-800";
          if (project.id === selectedId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => onDisplay(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
