import React from 'react';
import { render } from 'react-dom';

// components
import SearchForm from './components/Form.jsx'

const tag = '[App.jsx]'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  render () {
    return (
      <div>
        <header>
          <h2 className="g_container">Search Documents</h2>
        </header>
        <div class="g_container">
          <SearchForm query="this is test"
            handleSubmit={this.handleSubmit}
          />
        </div >
      </div >
    );
  }
  handleSubmit (query) {
    console.log(tag, 'handleSubmit()', query)
    this.setState({ query })
  }
}

render(<App />, document.getElementById('app'));
