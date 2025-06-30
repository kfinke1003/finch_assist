import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'

import Header from './Header.jsx';
import TopNav from './TopNav.jsx';
import BreadcrumbNav from './BreadcrumbNav.jsx';
import Footer from './Footer.jsx';

import HomeScreen from '../HomeScreen/HomeScreen.jsx'
import ServicesScreen from '../ServicesScreen/ServicesScreen.jsx'

import VPNServiceScreen from "../ServicesScreen/Services/VPNServiceScreen.jsx"

import PageNotFound from './PageNotFound.jsx';
import TestScreen from '../TestScreen.jsx'

const services = [
  {id: 0, service: 'VPN', path: 'services/vpn', element: <VPNServiceScreen />, info: 'WatchGuard Mobile VPN allows you to access company resources from almost anywhere—provided you have an internet connection.'},
  {id: 1, service: 'Legitronic Labeling Software', path: null, element: <TestScreen />, info: 'Temp data.'},
  {id: 2, service: 'TCM', path: null, element: <TestScreen />, info: 'Temp data.'},
  {id: 3, service: 'DUO', path: null, element: <TestScreen />, info: 'Temp data.'},
]

const pages = [
  {id: 0, title: 'Services', path: 'services', element: <ServicesScreen services={services}/>},
  {id: 1, title: 'Forms', path: null, element: <TestScreen />},
  {id: 2, title: 'Projects', path: null, element: <TestScreen />},
  {id: 3, title: 'Cybersecurity', path: null, element: <TestScreen />},
]
export default function Router() {
  return (
    <BrowserRouter>

      <Header />
      <TopNav pages={pages}/>
      <BreadcrumbNav />
      {/* <Footer/> */}
      
      <Routes>
        <Route index element={<HomeScreen/>} />

        {/* In order to give routes their own page, they must be at the parent level - even if they are of the for parent/child */}

        {pages.map(page => <Route key={page.id} path={page.path} element={page.element} />)}

        {services.map(service => <Route key={service.id} path={service.path} element={service.element}/>)}
          
        <Route path='*' element={<PageNotFound />}/>
      </Routes>

    </BrowserRouter>
  )
}