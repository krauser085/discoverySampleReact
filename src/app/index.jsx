import React from 'react';
import { render } from 'react-dom';

// components
import SearchForm from './components/Form.jsx'

// models
import SearchModel from './models/SearchModel.js'

const tag = '[App]'

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
    this.search(query)
  }
  search (query) {
    return SearchModel.list(query)
      .then(documents => {
        console.log(tag, 'search', documents)
      })
  }
}

render(<App />, document.getElementById('app'));
