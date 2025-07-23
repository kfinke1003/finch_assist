import React from 'react'
import { HashRouter, Routes, Route } from 'react-router'

import Header from './Header.jsx';
import TopNav from './TopNav.jsx';
import BreadcrumbNav from './BreadcrumbNav.jsx';
// import Footer from './Footer.jsx';

import HomeScreen from '../HomeScreen/HomeScreen.jsx'

import pages from '../MainPages.js';
import services from '../ServicesScreen/Services.js';
import news from '../NewsScreen/News.js';
import cybersecurity from '../CybersecurityScreen/Cybersecurity.js';

import PageNotFound from './PageNotFound.jsx';
import TestScreen from '../util/TestScreen.jsx'

export default function Router() {
  return (
    <HashRouter>
      <Header />
      <TopNav pages={pages}/>
      <BreadcrumbNav />

      <Routes>
          <Route index element={<HomeScreen news={news.filter( (news, index) => index < 6)}/>} />

          {/* In order to give routes their own page, they must be at the parent level - even if they are of the .../parent/child format */}

          {pages.map(page => <Route key={page.id} path={page.path} element={page.element} />)}

          {services.map(service => <Route key={service.id} path={service.path} element={service.element}/>)}

          {news.map(news => <Route key={news.id} path={news.path} element={news.element}/>)}

          {cybersecurity.map(cybersecurity => <Route key={cybersecurity.id} path={cybersecurity.path} element={cybersecurity.element}/>)}

          <Route path='*' element={<PageNotFound />}/>
        </Routes>
      {/* <Footer/> */}
    </HashRouter>
  )
}