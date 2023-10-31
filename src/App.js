import './App.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Fragment } from 'react';
import './styles/home.scss';
import Experience from './components/experience/experience';
import EmailIcon from './components/icons/email-icon';
import SocialBtns from './components/social-btns/social-btns';
import NavigationBar from './components/nav-bar/nav-bar';
import Tecnologies from './components/tecnologies/tecnologies';
import Projects from './components/projects-list/projects';
import { Grid } from '@mui/material';



function App() {


  return (
    <Fragment>
      <NavigationBar />
      <main className='container'>
     
        <Grid container spacing={4} >
          <Grid item xs={12} display='flex' justifyContent='center' >
            <Experience />
          </Grid>
          <Grid item xs={12} display='flex' justifyContent='center'>
            <Tecnologies />
          </Grid>
        <div className='divider-container'>
          <div className='divider'></div>
        </div>
          
          <Projects />
        </Grid>



        {/* <div className='buttons'>
          <SocialBtns />
          <a className='primary-btn' href='mailto:jgbm81@hotmail.com'>
            contact me!
            <EmailIcon />
          </a>
        </div>
 */}

      </main>




    </Fragment>


  );
}

export default App;
