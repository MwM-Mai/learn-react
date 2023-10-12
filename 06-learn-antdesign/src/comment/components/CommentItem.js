import React, { PureComponent } from 'react'

import { Comment } from '@ant-design/compatible';


export default class CommentItem extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Comment />
        {this.props.comment.content}
      </div>
    )
  }
}
