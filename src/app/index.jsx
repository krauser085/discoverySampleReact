import React from 'react';
import { render } from 'react-dom';

// components
import SearchForm from './components/Form.jsx'

class App extends React.Component {
  render () {
    return (
      // <div className="home">
      //   <User />
      //   <p>Welcome to the ReactJS and ExpressJS generator</p>
      //   <p>Check out the <a href="https://github.com/kevin-wynn/reactjs-express-generator/wiki">documentation</a> to get started.</p>
      // </div>
      <div>
        <header>
          <h2 className="g_container">Search Documents</h2>
        </header>
        <div class="g_container">
          <SearchForm />
        </div >
      </div >
    );
  }
}

render(<App />, document.getElementById('app'));
