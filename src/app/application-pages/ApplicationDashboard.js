import ProjectCard from "../components/ProjectCard";

export default function ApplicationDashboard (props){
    const {activeProjectList} = props
    return (
        activeProjectList && Array.isArray(activeProjectList) ?
            activeProjectList.map((project, key) =>
                <ProjectCard type="school" key={key} project={project}/>
            )
            : null
    )
}