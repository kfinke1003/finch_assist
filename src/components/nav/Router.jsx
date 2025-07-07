import React from 'react'
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router'
import Box  from '@mui/material/Box';

import Header from './Header.jsx';
import TopNav from './TopNav.jsx';
import BreadcrumbNav from './BreadcrumbNav.jsx';
import Footer from './Footer.jsx';

import HomeScreen from '../HomeScreen/HomeScreen.jsx'
import ServicesScreen from '../ServicesScreen/ServicesScreen.jsx'
import FormsScreen from '../FormsScreen/FormsScreen.jsx';

import VPNServiceScreen from "../ServicesScreen/Services/VPNServiceScreen.jsx"

import PageNotFound from './PageNotFound.jsx';
import TestScreen from '../TestScreen.jsx'

const services = [
  {id: 0, service: 'VPN', path: 'services/vpn', element: <VPNServiceScreen />, info: 'WatchGuard Mobile VPN allows you to access company resources from almost anywhere—provided you have an internet connection.'},
  {id: 1, service: 'Legitronic Labeling Software', path: 'services/legi', element: <TestScreen />, info: 'Temp data.'},
  {id: 2, service: 'TCM', path: 'services/tcm', element: <TestScreen />, info: 'Temp data.'},
  {id: 3, service: 'DUO', path: 'services/duo', element: <TestScreen />, info: 'Temp data.'},
  {id: 4, service: 'Dash', path: 'services/dash', element: <TestScreen />, info: 'Temp data.'},
  {id: 5, service: 'Microsoft 365', path: 'services/m365', element: <TestScreen />, info: 'Temp data.'},
  {id: 6, service: 'OneDrive', path: 'services/onedrive', element: <TestScreen />, info: 'Temp data.'},
  {id: 7, service: 'SharePoint', path: 'services/sharepoint', element: <TestScreen />, info: 'Temp data.'},
  {id: 8, service: 'Outlook', path: 'services/outlook', element: <TestScreen />, info: 'Temp data.'},
  {id: 9, service: 'Teams', path: 'services/teams', element: <TestScreen />, info: 'Temp data.'},
  {id: 10, service: 'Word', path: 'services/word', element: <TestScreen />, info: 'Temp data.'},
  {id: 11, service: 'Excel', path: 'services/excel', element: <TestScreen />, info: 'Temp data.'},
  {id: 12, service: 'Access', path: 'services/access', element: <TestScreen />, info: 'Temp data.'},
  {id: 13, service: 'Word', path: 'services/word', element: <TestScreen />, info: 'Temp data.'},
  {id: 14, service: 'Company Calendar', path: 'services/company_calendar', element: <TestScreen />, info: 'Temp data.'},
  {id: 15, service: 'MDC', path: 'services/mdc', element: <TestScreen />, info: 'Temp data.'},
  {id: 16, service: 'SOLIDWORKS', path: 'services/solidworks', element: <TestScreen />, info: 'Temp data.'},
  {id: 17, service: 'AutoCAD', path: 'services/autocad', element: <TestScreen />, info: 'Temp data.'},
  {id: 18, service: 'PDM', path: 'services/pdm', element: <TestScreen />, info: 'Temp data.'},
  {id: 19, service: 'RingCentral', path: 'services/ringcentral', element: <TestScreen />, info: 'Temp data.'},
  {id: 20, service: 'Power Automate', path: 'services/powerautomate', element: <TestScreen />, info: 'Temp data.'},
  {id: 21, service: 'Sales Reports', path: 'services/salesreports', element: <TestScreen />, info: 'Temp data.'},
  {id: 22, service: 'Printing', path: 'services/printing', element: <TestScreen />, info: 'Temp data.'},
  {id: 23, service: 'Modula WMS', path: 'services/modula', element: <TestScreen />, info: 'Temp data.'},
]

const forms = [
  {id: 0, form: 'IT Purchase Request', path: 'https://forms.cloud.microsoft/r/SyBtDxyaiq', info: 'Use this form to request a purchase from IT.'},
  {id: 1, form: 'IT On-boarding & Account Creation', path: 'https://forms.cloud.microsoft/r/i7t9ys7hqH', info: 'Use this form to request an account be created on behalf of someone.'},
]

const pages = [
  {id: 0, title: 'Services', path: 'services', element: <ServicesScreen services={services} />},
  {id: 1, title: 'Forms', path: 'forms', element: <FormsScreen forms={forms} />},
  {id: 2, title: 'Projects', path: 'projects', element: <TestScreen />},
  {id: 3, title: 'Cybersecurity', path: 'cybersecurity', element: <TestScreen />},
  {id: 4, title: 'Help', path: 'help', element: <TestScreen />},
]
export default function Router() {
  return (
    <HashRouter>

      <Header />
      <TopNav pages={pages}/>
      <BreadcrumbNav />
      
      <Box sx={{mb: '120px'}}>
        <Routes>
          <Route index element={<TestScreen/>} />

          {/* In order to give routes their own page, they must be at the parent level - even if they are of the for parent/child */}

          {pages.map(page => <Route key={page.id} path={page.path} element={page.element} />)}

          {services.map(service => <Route key={service.id} path={service.path} element={service.element}/>)}

          <Route path='*' element={<PageNotFound />}/>
        </Routes>
      </Box>

      <Footer/>
    </HashRouter>
  )
}