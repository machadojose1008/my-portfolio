import UsFlag from '../../assets/us.jpg';
import BrFlag from '../../assets/brasil.png';
import './experience.styles.scss';
import SectionTitle from '../sectionTitle/sectionTitle';
const Experience = () => {

    return (
        <div className='experience'>
            <SectionTitle text='Experience' />
            <p>Text</p>
            <div className='experience-time'>

            </div>
            <div className='infos'>
                <h3>Languages</h3>
                <div className='language-infos'>
                    <span>
                        <img src={UsFlag} height={12} />
                        EN - Fluent
                    </span>
                    <span>
                        <img src={BrFlag} height={12} />
                        PT-BR - Native Speaker
                    </span>
                </div>
                <h3>Education</h3>
            </div>
        </div>
    )
}

export default Experience;