import Project from '../projects/project';
import './projects.styles.scss';
import FinalNoteImg from '../../assets/finalnote.png';
import SneakerStoreImg from '../../assets/snkr.png';

const Projects = () => {
    return (
        <div className='projects-container'>
            <h2 className='titulo'>Projetos</h2>
            <ul className='projects-lis'>
                <Project
                    name={"Final Note"}
                    description={"Esse projeto foi desenvolvido como meu TCC, foi meu primeiro contato com React. Através dele consegui desenvolver conhecimentos como armazenamento e controle de dados, cadastro de usuários, Hooks. Foi com ele que comecei a me interessar pelo desenvolvimento com React."}
                    image={FinalNoteImg}
                    gitLink={"https://github.com/machadojose1008/Final-Note"}
                    viewLink={"https://final-note.netlify.app"}
                    tecnologies={["React.js", "Sass", "Firebase"]}
                />
                <Project 
                    name={'Sneaker Store'}
                    description={"Projeto desenvolvido no curso de React da ZTM(Zero to mastery), nesse projeto tive oportunidade de desenvolver meus conhecimentos do uso de ferramentas do react como Redux, Hooks e assíncronismo"}
                    image={SneakerStoreImg}
                    gitLink={"https://github.com/machadojose1008/clothing-site"}
                    viewLink={"https://snkrstore.netlify.app"}
                    tecnologies={['React.js','Redux','Auth']}
                />  
                
            </ul>
        </div>
    )
}

export default Projects;