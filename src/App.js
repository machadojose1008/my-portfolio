import './App.scss';
import { Fragment } from 'react';
import Header from './components/header/header';
import './styles/home.scss';
import Experience from './components/experience/experience';

function App() {
  return (
    <Fragment>
      <main className='container'>
        <Header />
        <Experience />
        <div className='educational-div'>
          <span>Image</span>
          <span>Software Engineer Bachelors Degree - Centro Universitário da Grande Dourados</span>
        </div>
        <div className='buttons'>
          <div className='social'></div>
          <button>contact me!</button>
        </div>


      </main>




    </Fragment>


  );
}

export default App;
