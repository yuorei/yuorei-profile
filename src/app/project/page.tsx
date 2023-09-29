import styles from "@/app/css/project.module.css"
import Header from "@/app/components/Header"
import projectList from './projectList.json'
export default function Project() {
    return (
        <>
            <Header />
            <div className={styles.page}>
                <h1 className={styles.title}>プロジェクト</h1>
                <ul className={styles.project}>
                    {projectList.map((project, index) => (
                        <li className={styles.item} key={index}>
                            <h2>{project.projectName}</h2>
                            <p>技術スタック: {project.techStack.join(', ')}</p>
                            <p>担当: {project.field}</p>
                            <p> {project.summary}</p>
                            {project.link && <a href={project.link}>Link</a>}
                            <p>{project.date}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}