import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'

import Header from './Header.jsx';
import ResponsiveAppBar from './ResponsiveAppBar.jsx'
import BreadcrumbNav from './BreadcrumbNav.jsx';
import Footer from './Footer.jsx';

import HomeScreen from '../HomeScreen/HomeScreen.jsx'
import ServicesScreen from '../ServicesScreen/ServicesScreen.jsx'

const pages = [
  {title: 'Services', path: '/services', element: <ServicesScreen/>, id: 0},
]

// TODO: https://www.robinwieruch.de/react-router-nested-routes/

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <ResponsiveAppBar pages={pages}/>
      {/* TODO: bread crumb section */}
      <BreadcrumbNav />
      <Routes>
        <Route path={'/'} element={<HomeScreen/>} />
        {pages.map(page => <Route key={page.id} path={page.path} element={page.element}/>)}
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  )
}