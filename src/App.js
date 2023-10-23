import logo from './logo.svg';
import './App.scss';
import { Fragment } from 'react';
import UsFlag from './assets/us.jpg';
import BrFlag from './assets/brasil.png';
import Header from './components/header/header';


function App() {
  return (
    <Fragment>
        <Header />
        <div className='experience'>
          <h3>Experience</h3>
          <p>Text</p>
          <div className='experience-time'>

          </div>
          <div className='infos'>
            <h3>Languages</h3>
            <div className='language-infos'>
              <span>
                <img src={UsFlag} height={12} />
                EN - Fluent
              </span>
              <span>
                <img src={BrFlag} height={12} />
                PT-BR - Native Speaker
              </span>
            </div>
            <h3>Education</h3>
            <div className='educational-div'>
              <span>Image</span>
              <span>Software Engineer Bachelors Degree - Centro Universitário da Grande Dourados</span>
            </div>
            <div className='buttons'>
              <div className='social'></div>
              <button>contact me!</button>
            </div>
          </div>
        </div>

     

    </Fragment>


  );
}

export default App;
