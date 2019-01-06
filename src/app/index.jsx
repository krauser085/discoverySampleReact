import React from 'react';
import { render } from 'react-dom';

// components
import SearchForm from './components/Form.jsx'
import List from './components/List.jsx'

// models
import SearchModel from './models/SearchModel.js'

const tag = '[App]'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      documents: [],
      submitted: false
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
          <SearchForm handleSubmit={this.handleSubmit} />
          <List documents={this.state.documents}
            query={this.state.query}
            submitted={this.state.submitted} />
        </div >
      </div >
    );
  }
  handleSubmit (query) {
    console.log(tag, 'handleSubmit()', query)
    this.setState({ query })
    this.setState({ submitted: false })
    this.search(query)
  }
  search (query) {
    return SearchModel.list(query)
      .then(documents => this.setState({ documents }))
      .then(() => this.setState({ submitted: true }))
  }
}

render(<App />, document.getElementById('app'));
