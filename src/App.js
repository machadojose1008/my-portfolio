import './App.scss';
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
        <Grid container spacing={2} >
          <Grid item xs={12} display='flex' justifyContent='center' >
            <Experience />
          </Grid>
          <Grid item xs={12}>
            <Tecnologies />
          </Grid>


          <Projects />
        </Grid>



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
