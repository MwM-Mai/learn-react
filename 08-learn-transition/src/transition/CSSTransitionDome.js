import React, { PureComponent } from 'react'

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

import { CSSTransition } from 'react-transition-group'


const { Meta } = Card;


export default class CSSTransitionDome extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      isShow: true
    }
  }

  render() {
    const { isShow } = this.state

    return (
      <div>
        <button onClick={e => { this.setState({ isShow: !isShow }) }}>显示/隐藏</button>
        <CSSTransition in={isShow}
          classNames="card"  // 根据 classNames 属性会 组件会在不同状态里面添加好几个关于 card 拼接的 class 属性 打开控制台可见
          timeout={300}
          unmountOnExit={true}
          appear // 刷新时也进行动画 需要在 css 添加 .*-appear 等样式
          onEnter={el => { console.log("开始进入") }}
          onEntering={el => { console.log("正在进入") }}
          onEntered={el => { console.log("进入完成") }}
          onExit={el => { console.log("开始退出") }}
          onExiting={el => { console.log("正在退出") }}
          onExited={el => { console.log("退出完成") }}
        >
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </CSSTransition>
      </div >
    )
  }
}
