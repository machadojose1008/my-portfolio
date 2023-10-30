import './experience.styles.scss';
import SectionTitle from '../sectionTitle/sectionTitle';
import { Image } from 'react-bootstrap';
import MinhaFoto from '../../assets/me.png';
import { Grid } from '@mui/material';


const Experience = () => {

    return (
        <div className='experience'>
            <Grid container spacing={2} justifyContent='center'>
                <Grid item xs={12} sm={5}>
                    <Image src={MinhaFoto} width={325} height={277} />
                </Grid>
                <Grid item xs={12} sm={7}>
                    <div className='description'>
                        <SectionTitle text='Desenvolvedor Front-end' />
                        <p>Sou um Engenheiro de Software com um desejo insaciável de crescimento e inovação. Com uma sólida base em tecnologias web e um olhar aguçado para detalhes, estou pronto para mergulhar de cabeça em projetos desafiadores que me permitirão crescer ainda mais no mundo da engenharia de software. </p>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Experience;