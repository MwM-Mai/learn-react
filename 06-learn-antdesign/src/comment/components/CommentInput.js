import React, { PureComponent } from 'react'
import styled from 'styled-components'

import dayjs from 'dayjs'

import { Input, Button } from 'antd'

const { TextArea } = Input;

const ButtonWrapper = styled.div`
  margin-top: 10px;
`

export default class CommentInput extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      content: ""
    }
  }

  render() {
    return (
      <div style={{ "width": "500px", "height": "400px" }}>
        <TextArea role={10} value={this.state.content} onChange={e => this.changeContent(e)} />
        <ButtonWrapper>
          <Button type='primary' onClick={e => this.addComemnt()}>添加评论</Button>
        </ButtonWrapper>
      </div>
    )
  }

  addComemnt() {
    const commentInfo = {
      id: Date.now(),
      avatar: "https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp",
      nikename: "coderwhy",
      datetime: dayjs().format("YYYY-DD-MM"),
      content: this.state.content
    }

    this.props.submitCommemnt(commentInfo)

    this.setState({
      content: ""
    })
  }

  changeContent(e) {
    this.setState({
      content: e.target.value
    })
  }
}
