
import './experience.styles.scss';
import SectionTitle from '../sectionTitle/sectionTitle';
import { Image } from 'react-bootstrap';
import MinhaFoto from '../../assets/me.png';
const Experience = () => {

    return (
        <div className='experience'>
            <Image src={MinhaFoto} width={325} height={277} />
            <div className='description'>
                <SectionTitle text='Desenvolvedor Front-end' />
                <p>Sou um Engenheiro de Software com um desejo insaciável de crescimento e inovação. Com uma sólida base em tecnologias web e um olhar aguçado para detalhes, estou pronto para mergulhar de cabeça em projetos desafiadores que me permitirão crescer ainda mais no mundo da engenharia de software. </p>

            </div>



        </div>
    )
}

export default Experience;