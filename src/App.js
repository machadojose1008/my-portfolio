import './App.scss';
import { Fragment } from 'react';
import './styles/home.scss';
import Experience from './components/experience/experience';
import Information from './components/about-me/information';
import EmailIcon from './components/icons/email-icon';
import SocialBtns from './components/social-btns/social-btns';
import NavigationBar from './components/nav-bar/nav-bar';
import Tecnologies from './components/tecnologies/tecnologies';
import Projects from './components/projects-list/projects';




function App() {
  return (
    <Fragment>
      <NavigationBar />
      <main className='container'>

        <Experience />
        <Tecnologies />
        
        <Projects />


        <div className='buttons'>
          <SocialBtns />
          <a className='primary-btn' href='mailto:jgbm81@hotmail.com'>
            contact me!
            <EmailIcon />
          </a>
        </div>


      </main>




    </Fragment>


  );
}

export default App;
