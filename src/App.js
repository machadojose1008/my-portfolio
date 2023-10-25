import './App.scss';
import { Fragment } from 'react';
import Header from './components/header/header';
import './styles/home.scss';
import Experience from './components/experience/experience';
import Information from './components/information/information';
import EmailIcon from './components/icons/email-icon';



function App() {
  return (
    <Fragment>
      <main className='container'>
        <Header />
        <Experience />
        <Information />
        <div className='buttons'>
          <div className='social'></div>
          <button className='primary-btn'>
            contact me! 
           <EmailIcon />
          </button>
        </div>


      </main>




    </Fragment>


  );
}

export default App;
