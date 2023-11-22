import './App.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Fragment } from 'react';
import './styles/home.scss';
import Experience from './components/experience/experience';
import NavigationBar from './components/nav-bar/nav-bar';
import Tecnologies from './components/tecnologies/tecnologies';
import Projects from './components/projects-list/projects';
import { Grid } from '@mui/material';
import BottomBar from './components/nav-bar/bottom-bar';
import Formation from './components/about-me/formation';



function App() {



  return (
    <Fragment>
      <NavigationBar />
      <main className='container'>

        <Grid  spacing={4} >
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

          <div className='divider-container'>
            <div className='divider'></div>
          </div>

          <Formation />
        </Grid>


      </main>

      <BottomBar />


    </Fragment>


  );
}

export default App;
