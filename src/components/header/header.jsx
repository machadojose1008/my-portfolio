import './header.styles.scss';
import MinhaFoto from '../../assets/me.png';
import { Image } from 'react-bootstrap';

const Header = () => {

    return (
        <div className='header'>
            <div>
                <h1>Hi i´m José! 👋</h1>
                <h2>Software Engineer</h2>
            </div>
            <Image src={MinhaFoto} width={325} height={277}/>
           
        </div>
    );


}

export default Header;