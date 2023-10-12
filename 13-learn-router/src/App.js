import React, { PureComponent } from 'react'

import {
  HashRouter,
  BrowserRouter,
  Link,
  Route,
  Routes,
  NavLink
} from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'
import Profile from './pages/profile'
import User from './pages/user'
import Login from './pages/login'
import Product from './pages/product'

import './App.css'

// eslint-disable-next-line react-hooks/rules-of-hooks
// const _navigate = useNavigate()
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <BrowserRouter>
          {/* <Link to="/">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/profile">我的</Link> */}

          {/* NavLink 的使用 内联样式 */}
          {/* <NavLink to="/" style={({ isActive }) => isActive ? { "color": "red" } : undefined}>首页</NavLink>
          <NavLink to="/about" style={({ isActive }) => isActive ? { "color": "red" } : undefined}>关于</NavLink>
          <NavLink to="/profile" style={({ isActive }) => isActive ? { "color": "red" } : undefined}>我的</NavLink> */}

          {/* 选择器 */}
          <NavLink to="/" className={({ isActive }) => isActive ? "activeClassName" : undefined}>首页</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "activeClassName" : undefined}>关于</NavLink>
          <NavLink to="/profile" className={({ isActive }) => isActive ? "activeClassName" : undefined}>我的</NavLink>
          <NavLink to="/user" className={({ isActive }) => isActive ? "activeClassName" : undefined}>用户</NavLink>
          <button onClick={e => this.jumpToProduct()}>商品</button>

          <Routes>
            <Route path='/' excat element={<Home />} />
            <Route path='/about/*' element={<About />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/user' element={<User />} />
            <Route path='/login' element={<Login />} />
            <Route path='/product' element={<Product />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }

  jumpToProduct() {
    // _navigate("/product")
  }
}
