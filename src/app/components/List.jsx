import React, { Component } from 'react';

// style
import '../../scss/components/list.scss'

const tag = '[ListComponent]'

class Form extends Component {

  constructor(props) {
    super(props)
    this.renderList = this.renderList.bind(this)
  }
  render () {
    return this.props.documents.length ? (
      <div className="g_border">
        <ul>
          {this.renderList()}
        </ul>
      </div>
    ) : this.props.submitted ? (
      <div>
        「{ this.props.query }」 に関連するドキュメントがありません。
      </div>
    ) : null
  }
  renderList () {
    if (this.props.documents.length) {
      let list = this.props.documents.map((document, i) => {
        return (
          <li key={document.id}>
            {i > 0 ? <hr></hr> : ''}
            <div>
              <b>Document ID :</b> {document.id}
            </div>
            <div>
              <b>Text :</b> {document.text}
            </div>
          </li>
        )
      })
      return list
    }
  }
}

export default Form;
