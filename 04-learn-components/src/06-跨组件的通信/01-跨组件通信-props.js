import React, { Component } from 'react'

function ProfileHeader(props) {
  const { nickname, level } = props

  return (
    <div>
      <h2>用户昵称: {nickname}</h2>
      <h2>用户等级: {level}</h2>
    </div>
  )
}

function Profile(props) {
  const { nickname, level } = props

  return (
    <div>
      {/* {<ProfileHeader nickname={nickname} level={level} />} */}
      <ProfileHeader {...props} />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  )
}

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      nickname: 'james',
      level: 99
    }
  }

  render() {
    const { nickname, level } = this.state

    return (
      <div>
        {/* {<Profile nickname={nickname} level={level} />} */}
        <Profile {...this.state} />
      </div>
    )
  }
}
