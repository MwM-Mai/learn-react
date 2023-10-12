import React, { PureComponent } from 'react'

import { Button, Space, DatePicker, ConfigProvider } from 'antd'  // 导入组件库
import { PoweroffOutlined } from '@ant-design/icons' // 图标库

import dayjs from 'dayjs';

export default class App extends PureComponent {
  render() {
    const dateFormat = 'YYYY-MM-DD';

    return (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00b96b',
          },
        }}
      >
        <>
          <Space direction="vertical">
            <Space wrap>
              <Button type="primary" loading>
                Loading
              </Button>
              <Button type="primary" size="small" loading>
                Loading
              </Button>
              <Button type="primary" icon={<PoweroffOutlined />} loading />
            </Space>

            <DatePicker defaultValue={dayjs('2015-06-06', dateFormat)} />
          </Space>
        </>
      </ConfigProvider>
    )
  }
}


// 知识点： classnams 工具库的使用

// import classNames from 'classnames'


// export default class App extends PureComponent {
//   constructor (props) {
//     super(props)

//     this.state = {
//       isActive: true
//     }
//   }

//   render() {
//     const { isActive } = this.state

//     const isBar = false
//     const errClass = 'error'
//     const wranClass = null

//     return (
//       <div>
//         {/* 原生react中添加class方法 */}
//         <h2 className='foo bar baz active'>我是标题1</h2>
//         <h2 className={"title " + (isActive ? 'active' : '')}>我是标题2</h2>
//         <h2 className={['title', (isActive ? 'active' : '')].join(" ")}>我是标题3</h2>

//         {/* classnames库添加class */}
//         <hr />
//         <h2 className={classNames("foo", "bar", "baz")}>我是标题4</h2>
//         <h2 className={classNames({ "active": isActive, "bar": isBar }, 'baz')}>我是标题5</h2>
//         <h2 className={classNames("foo", errClass, wranClass, { "active": isActive })}>我是标题6</h2>
//         <h2 className={classNames(["foo", "bar", "baz"])}>我是标题7</h2>
//         <h2 className={classNames(["foo", { "active": isActive }])}>我是标题8</h2>
//       </div>
//     )
//   }
// }
