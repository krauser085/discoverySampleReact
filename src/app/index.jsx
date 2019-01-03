import React from 'react';
import { render } from 'react-dom';

// components
import SearchForm from './components/Form.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        <header>
          <h2 className="g_container">Search Documents</h2>
        </header>
        <div class="g_container">
          <SearchForm query="this is test"/>
        </div >
      </div >
    );
  }
}

render(<App />, document.getElementById('app'));
