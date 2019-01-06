import React, { Component } from 'react'

// style
import '../../scss/components/form.scss'

const tag = '[FormComponent]'

class Form extends Component {

  constructor(props) {
    super(props)
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" className="g_border"
          onChange={this.handleChange}
          placeholder="検索文を入力して下さい"
        ></input>
        <button type="reset" onClick={this.handleReset}>X</button>
      </form >
    )
  }
  handleChange (e) {
    this.setState({ value: e.target.value })
    if (!e.target.value) this.handleReset()
  }
  handleSubmit (e) {
    e.preventDefault()
    console.log(tag, 'handleSubmit()', this.state.value)
    this.props.handleSubmit(this.state.value)
  }
  handleReset () {
    console.log(tag, 'handleReset()')
  }
}

export default Form
