import Project from '../projects/project';
import './projects.styles.scss';

const Projects = () => {
    return (
        <div className='projects-container'>
            <h2 className='titulo'>Projetos</h2>
            <ul className='projects-lis'>
                <Project name={"Final Note"}/>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </div>
    )
}

export default Projects;