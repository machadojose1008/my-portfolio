import './project.styles.scss';

const Project = ({ name, description, image, gitLink, viewLink, tecnologies }) => {



    return (
        <div className='project'>
            <h3 className='nome-projeto'>
                <a href={viewLink}>{name}</a>
            </h3>
            <p className='description'>{description}</p>
        </div>
    )

}

export default Project;