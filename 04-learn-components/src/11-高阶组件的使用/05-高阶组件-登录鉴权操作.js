import React, { PureComponent } from 'react'

class LoginPage extends PureComponent {
  render() {
    return (
      <div>
        <h2>LoginPage</h2>
      </div>
    )
  }
}

function withAuth(WrappedComponent) {
  return props => {
    const { isLogin } = props
    if (isLogin) {
      return <WrappedComponent {...props} />
    } else {
      return <LoginPage />
    }
  }
}

// 购物车组件
class CartPage extends PureComponent {
  render() {
    return (
      <div>
        <h2>CaetPage</h2>
      </div>
    )
  }
}

const AuthCartPage = withAuth(CartPage)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <AuthCartPage isLogin={false} />
      </div>
    )
  }
}
