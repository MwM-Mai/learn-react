import React, { Suspense } from 'react'
// react-router v6 不再支持 react-router-config 用 useRoutes 代替
import { HashRouter } from 'react-router-dom'


import RouteElement from './router'
import MwMAppHeader from '@/components/app-header'
import MwMAppFooter from '@/components/app-footer'

export default function App() {
  return (
    <HashRouter>
      <MwMAppHeader />
      <Suspense fallback="loading....">
        {/* 路由懒加载需要加上 <Suspense fallback="loading...."> 包裹 */}
        <RouteElement />
      </Suspense>
      <MwMAppFooter />
    </HashRouter>
  )
}
