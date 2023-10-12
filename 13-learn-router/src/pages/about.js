// import React, { PureComponent } from 'react'

import {
  NavLink,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useSearchParams,
  useParams,
  useLocation
} from 'react-router-dom'

function AboutHisotry() {
  return (
    <h2>企业成立于2000年</h2>
  )
}

function AboutCulture() {
  return (
    <h2>创新/发展/共赢</h2>
  )
}

function AboutContact() {
  const [search] = useSearchParams()

  // console.log(search);
  console.log(useParams());
  console.log(useLocation());

  return (
    <h2>联系电话: 020-188888888</h2>
  )
}

function AboutJoinus() {
  return (
    <h2>投递简历到aaaa.@qq.com</h2>
  )
}

function About() {
  const navigate = useNavigate()

  const info = { name: "coderwhy", age: "18" }

  function jumpToJoin() {

    navigate("joinus")
  }

  return (
    <div>
      <h2>About</h2>
      <NavLink to="/about/hisotry" className={({ isActive }) => isActive ? "about-isActive" : undefined}>企业历史</NavLink>
      <NavLink to="/about/culture" className={({ isActive }) => isActive ? "about-isActive" : undefined}>企业文化</NavLink>
      <NavLink to={{
        pathname: "/about/contact",
        search: "?/name=123" // ? 后面的参数
      }}
        state={{ name: "coderwhy" }}  // 复杂参数
        className={({ isActive }) => isActive ? "about-isActive" : undefined}>
        联系我们
      </NavLink>
      <button onClick={jumpToJoin}>加入我们</button>

      <Routes>
        <Route path='/' element={<Navigate to="/about/hisotry" />} />
        <Route path='/hisotry' element={<AboutHisotry />} />
        <Route path='/culture' element={<AboutCulture />} />
        <Route path='/contact' element={<AboutContact />} />
        <Route path='/joinus' element={<AboutJoinus />} />
      </Routes>
    </div >
  )
}


export default About
