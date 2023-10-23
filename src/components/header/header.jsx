import './header.styles.scss';
import MinhaFoto from '../../assets/me.png';

const Header = () => {

    return (
        <div className='header'>
            <div>
                <h1>Hi i´m José!</h1>
                <h2>Software Engineer</h2>
            </div>
            <img src={MinhaFoto} alt='me' style={{width:'100', height:'24'}}/>
        </div>
    );


}

export default Header;