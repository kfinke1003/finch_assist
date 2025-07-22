import RenderMarkdown from '../util/RenderMarkdown.jsx';

import { duo_md, duo_info } from '../ServicesScreen/Services/DUO.js';
import { watchguard_vpn_info, watchguard_vpn_md } from '../ServicesScreen/Services/WatchGuardMobileVPN.js';
import { m365_info, m365_md } from '../ServicesScreen/Services/Microsoft365.js';
import { ringcentral_info, ringcentral_md } from '../ServicesScreen/Services/RingCentral.js';
import { teams_info, teams_md } from '../ServicesScreen/Services/M365Teams.js';
import { groups_info, groups_md } from '../ServicesScreen/Services/M365Groups.js';
import { companyCalendar_info, companyCalendar_md } from '../ServicesScreen/Services/CompanyCalendar.js';
import { word_info, word_md } from '../ServicesScreen/Services/M365Word.js';
import { excel_info, excel_md } from '../ServicesScreen/Services/M365Excel.js';
import { powerpoint_info, powerpoint_md } from '../ServicesScreen/Services/M365PowerPoint.js';
import { outlook_info, outlook_md } from '../ServicesScreen/Services/M365Outlook.js';
import { onedrive_info, onedrive_md } from '../ServicesScreen/Services/M365OneDrive.js';
import { access_info, access_md } from '../ServicesScreen/Services/M365Access.js';
import { powerautomate_info, powerautomate_md } from '../ServicesScreen/Services/PowerAutomate.js';

const services_manifest = {
    duo: {
        md: duo_md,
        info: duo_info
    },
    watchguard: {
        md: watchguard_vpn_md,
        info: watchguard_vpn_info
    },
    m365: {
        md: m365_md,
        info: m365_info
    },
    ringcentral: {
        md: ringcentral_md,
        info: ringcentral_info
    },
    teams: {
        md: teams_md,
        info: teams_info
    },
    groups: {
        md: groups_md,
        info: groups_info
    },
    calendar: {
        md: companyCalendar_md,
        info: companyCalendar_info
    },
    word: {
        md: word_md,
        info: word_info
    },
    excel: {
        md: excel_md,
        info: excel_info
    },
    powerpoint: {
        md: powerpoint_md,
        info: powerpoint_info
    },
    outlook: {
        md: outlook_md,
        info: outlook_info
    },
    onedrive: {
        md: onedrive_md,
        info: onedrive_info
    },
    access: {
        md: access_md,
        info: access_info
    },
    powerautomate: {
        md: powerautomate_md,
        info: powerautomate_info
    }

}

const services = [
  {id: 0, service: 'WatchGuard Mobile VPN', path: 'services/vpn', element: <RenderMarkdown markdown={services_manifest.watchguard.md} />, info: services_manifest.watchguard.info},
  // {id: 1, service: 'Legitronic Labeling Software', path: 'services/legi', element: <TestScreen />, info: 'Temp data.'},
  // {id: 2, service: 'TCM', path: 'services/tcm', element: <TestScreen />, info: 'Temp data.'},
  {id: 3, service: 'Duo MFA', path: 'services/duo', element: <RenderMarkdown markdown={services_manifest.duo.md} />, info: services_manifest.duo.info},
  // {id: 4, service: 'Dash', path: 'services/dash', element: <TestScreen />, info: 'Temp data.'},
  {id: 5, service: 'Microsoft 365', path: 'services/m365', element: <RenderMarkdown markdown={services_manifest.m365.md} />, info: services_manifest.m365.info},
  {id: 6, service: 'Microsoft OneDrive', path: 'services/onedrive', element: <RenderMarkdown markdown={services_manifest.onedrive.md} />, info: services_manifest.onedrive.info},
  {id: 7, service: 'Microsoft PowerPoint', path: 'services/powerpoint', element: <RenderMarkdown markdown={services_manifest.powerpoint.md} />, info: services_manifest.powerpoint.info},
  {id: 8, service: 'Microsoft Outlook', path: 'services/outlook', element: <RenderMarkdown markdown={services_manifest.outlook.md} />, info: services_manifest.outlook.info},
  {id: 9, service: 'Microsoft Teams', path: 'services/teams', element: <RenderMarkdown markdown={services_manifest.teams.md} />, info: services_manifest.teams.info},
  {id: 10, service: 'Microsoft Word', path: 'services/word', element: <RenderMarkdown markdown={services_manifest.word.md} />, info: services_manifest.word.info},
  {id: 11, service: 'Microsoft Excel', path: 'services/excel', element: <RenderMarkdown markdown={services_manifest.excel.md} />, info: services_manifest.excel.info},
  {id: 12, service: 'Microsoft Access', path: 'services/access', element: <RenderMarkdown markdown={services_manifest.access.md} />, info: services_manifest.access.info},
  {id: 13, service: 'Microsoft 365 Groups', path: 'services/groups', element: <RenderMarkdown markdown={services_manifest.groups.md} />, info: services_manifest.groups.info},
  {id: 14, service: 'Company Calendar', path: 'services/company_calendar', element: <RenderMarkdown markdown={services_manifest.calendar.md} />, info: services_manifest.calendar.info},
  // {id: 15, service: 'MDC', path: 'services/mdc', element: <TestScreen />, info: 'Temp data.'},
  // {id: 16, service: 'SOLIDWORKS', path: 'services/solidworks', element: <TestScreen />, info: 'Temp data.'},
  // {id: 17, service: 'AutoCAD', path: 'services/autocad', element: <TestScreen />, info: 'Temp data.'},
  // {id: 18, service: 'PDM', path: 'services/pdm', element: <TestScreen />, info: 'Temp data.'},
  {id: 19, service: 'RingCentral', path: 'services/ringcentral', element: <RenderMarkdown markdown={services_manifest.ringcentral.md} />, info: services_manifest.ringcentral.info},
  {id: 20, service: 'Power Automate', path: 'services/powerautomate', element: <RenderMarkdown markdown={services_manifest.powerautomate.md} />, info: services_manifest.powerautomate.info},
  // {id: 21, service: 'Sales Reports', path: 'services/salesreports', element: <TestScreen />, info: 'Temp data.'},
  // {id: 22, service: 'Printing', path: 'services/printing', element: <TestScreen />, info: 'Temp data.'},
  // {id: 23, service: 'Modula WMS', path: 'services/modula', element: <TestScreen />, info: 'Temp data.'},
]

export default services