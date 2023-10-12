import React, { memo, Suspense } from 'react';
import { Outlet } from 'react-router-dom';


import NavBar from './c-cpns/nav-bar';

export default memo(function MwMDiscover() {
  return (
    <div>
      <NavBar />
      <Suspense fallback="loading....">
        <Outlet /> {/* 子路由占位 */}
      </Suspense>
    </div>
  )
})
