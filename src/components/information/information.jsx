import SectionTitle from "../sectionTitle/sectionTitle";
import UsFlag from '../../assets/us.jpg';
import BrFlag from '../../assets/brasil.png';
import './information.styles.scss';
const Information = () => {


    return (
        <div>
            <div className='infos'>
                <SectionTitle text='Languages' />
                <div className='language-infos'>
                    <p>
                        <img src={UsFlag} height={12} />
                        EN  Fluent
                    </p>
                    <p>
                        <img src={BrFlag} height={15} />
                        PT-BR  Native Speaker
                    </p>

                </div>
                <SectionTitle text="Education" />

                <div className='educational-info'>
                    <span>Image</span>
                    <span>Software Engineer Bachelors Degree - Centro Universitário da Grande Dourados</span>
                </div>
            </div>
        </div>
    )
}

export default Information;