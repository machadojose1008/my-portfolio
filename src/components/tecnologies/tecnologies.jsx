import './tecnologies.styles.scss';
import HtmlIcon from '../icons/html5-icon';
import JavascriptIcon from '../icons/javascript-icon';
import GitIcon from '../icons/git-icon';
import CssIcon from '../icons/css-icon';
import ReactIcon from '../icons/react-icon';
import SassIcon from '../icons/sass-icon';
import FigmaIcon from '../icons/figma-icon';
const Tecnologies = () => {

    return (
        <div className='tecnologies-container'>
            <p>Principais Tecnlogias:</p>
            <div className='icons'>
                <div className='icon'>
                    <HtmlIcon />
                    <p>Html 5</p>
                </div>
                <div className='icon'>
                    <JavascriptIcon />
                    <p>JavaScript</p>
                </div>
                <div className='icon'>
                    <GitIcon />
                    <p>Git</p>
                </div>
                <div className='icon'>
                    <CssIcon />
                    <p>Css 3</p>
                </div>
                <div className='icon'>
                    <ReactIcon />
                    <p>React.JS</p>
                </div>
                <div className='icon'>
                    <SassIcon />
                    <p>Sass</p>
                </div>
                <div className='icon'>
                    <FigmaIcon />
                    <p>Figma</p>
                </div>

            </div>

        </div>
    );
}

export default Tecnologies;