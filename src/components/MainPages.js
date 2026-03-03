import ServicesScreen from './ServicesScreen/ServicesScreen.jsx'
import FormsScreen from './FormsScreen/FormsScreen.jsx';
import CybersecurityScreen from './CybersecurityScreen/CybersecurityScreen.jsx';
import HelpScreen from './HelpScreen/HelpScreen.jsx';
import NewsScreen from './NewsScreen/NewsScreen.jsx';
import LinksScreen from './LinksScreen/LinksScreen.jsx';

import services from './ServicesScreen/Services.js';
import forms from './FormsScreen/Forms.js';
import news from './NewsScreen/News.js';
import cybersecurity from './CybersecurityScreen/Cybersecurity.js';
import links from './LinksScreen/Links.js'

const pages = [
  {id: 0, title: 'Services', path: 'services', element: <ServicesScreen services={services} />},
  {id: 1, title: 'Forms', path: 'forms', element: <FormsScreen forms={forms} />},
  // {id: 2, title: 'Projects', path: 'projects', element: <ProjectsScreen />},
  {id: 5, title: 'News', path: 'news', element: <NewsScreen news={news}/>},
  {id: 3, title: 'Cybersecurity', path: 'cybersecurity', element: <CybersecurityScreen cybersecurity={cybersecurity} />},
  {id: 4, title: 'Help', path: 'help', element: <HelpScreen />},
  {id: 6, title: 'Links', path: 'links', element: <LinksScreen links={links} />}
]

export default pages