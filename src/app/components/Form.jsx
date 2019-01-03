import React, { Component } from 'react';

// style
import '../../scss/components/form.scss'

class Form extends Component {

  constructor(props) {
    super(props)
  }
  render () {
    return (
      <form>
        <input type="text" className="g_border"></input>
        <button type="reset">X</button>
      </form >
    )
  }
}

export default Form;
