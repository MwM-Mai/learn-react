// react-router v6 不再支持 react-router-config 用 useRoutes 代替
import { lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

// import MwMDiscover from '@/pages/discover'
// import MwMMine from '@/pages/mine'
// import MwMFriend from '@/pages/friend'

const MwMDiscover = lazy(() => import("@/pages/discover"))
const MwMMine = lazy(() => import("@/pages/mine"))
const MwMFriend = lazy(() => import("@/pages/friend"))
const MWMRcommend = lazy(() => import("../pages/discover/c-pages/recommend"))
const MWMAlbum = lazy(() => import("../pages/discover/c-pages/album"))
const MWMDjradio = lazy(() => import("../pages/discover/c-pages/djradio"))
const MWMRanking = lazy(() => import("../pages/discover/c-pages/ranking"))
const MWMSinger = lazy(() => import("../pages/discover/c-pages/singer"))
const MWMSongs = lazy(() => import("../pages/discover/c-pages/songs"))

const routes = [
  {
    path: "/",
    element: <Navigate to="/discover" />
  },
  {
    path: "/discover",
    element: <MwMDiscover />,
    children: [
      {
        path: "/discover",
        element: <Navigate to="/discover/recommend" />
      }, {
        path: "/discover/recommend",
        element: <MWMRcommend></MWMRcommend>
      },
      {
        path: "/discover/album",
        element: <MWMAlbum></MWMAlbum>
      },
      {
        path: "/discover/djradio",
        element: <MWMDjradio></MWMDjradio>
      },
      {
        path: "/discover/ranking",
        element: <MWMRanking></MWMRanking>
      },
      {
        path: "/discover/singer",
        element: <MWMSinger></MWMSinger>
      }, {
        path: "/discover/songs",
        element: <MWMSongs></MWMSongs>
      }]
  },
  {
    path: "/mine",
    element: <MwMMine />
  },
  {
    path: "/friend",
    element: <MwMFriend />
  },
]

function RouteElement() {
  const element = useRoutes(routes)
  return element
}

export default RouteElement