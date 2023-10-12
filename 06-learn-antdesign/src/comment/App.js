import React, { PureComponent } from 'react'

import CommentInput from './components/CommentInput';
import CommentItem from '@/comment/components/CommentItem';

export default class App extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      commentList: []
    }
  }

  render() {
    return (
      <div style={{ "width": "50px", "padding": "20px" }}>
        {
          this.state.commentList.map((item, index) => {
            return <CommentItem comment={item} key={item.id} />
          })
        }
        <CommentInput submitCommemnt={info => this.submitCommemnt(info)} />
      </div>
    )
  }

  submitCommemnt(info) {
    const commentList = [info, ...this.state.commentList]

    this.setState({
      commentList: commentList
    })
  }
}
