import GithubIcon from "../icons/github-icon";
import InstaIcon from "../icons/insta-icon";
import LinkedinIcon from "../icons/linkedin-icon";
import './social-btns.styles.scss';
const SocialBtns = () => {

    return (
        <div className='social'>
            <a href="https://www.instagram.com/machado_josee/">
                <InstaIcon />
            </a>
            <a href="https://www.linkedin.com/in/jos%C3%A9-guilherme-benites-machado-a905b4170/">
                <LinkedinIcon />
            </a>
            <a href="https://github.com/machadojose1008">
                <GithubIcon />
            </a>
            

        </div>
    )
}

export default SocialBtns;