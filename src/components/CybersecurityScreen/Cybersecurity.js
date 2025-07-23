import RenderMarkdown from '../util/RenderMarkdown.jsx';

import { phishing_md, phishing_info } from './Cybersecurity/Phishing.js';
import { safeBrowsing_md, safeBrowsing_info } from './Cybersecurity/SafeBrowsing.js';
import { bestPasswordPractices_md, bestPasswordPractices_info } from './Cybersecurity/BestPasswordPractices.js';
import { protectingLovedOnes_md, protectingLovedOnes_info } from './Cybersecurity/ProtectingLovedOnes.js';

const cybersecurity_manifest = {
    phishing: {
        md: phishing_md,
        info: phishing_info
    },
    safeBrowsing: {
        md: safeBrowsing_md,
        info: safeBrowsing_info
    },
    bestPasswordPractices: {
        md: bestPasswordPractices_md,
        info: bestPasswordPractices_info
    },
    protectingLovedOnes: {
        md: protectingLovedOnes_md,
        info: protectingLovedOnes_info
    },
}

const cybersecurity = [
    {id: 0, headline: 'Phishing', path: 'cybersecurity/phishing', element: <RenderMarkdown markdown={cybersecurity_manifest.phishing.md} />, info: cybersecurity_manifest.phishing.info},
    {id: 1, headline: 'Safe Browsing', path: 'cybersecurity/safe_browsing', element: <RenderMarkdown markdown={cybersecurity_manifest.safeBrowsing.md} />, info: cybersecurity_manifest.safeBrowsing.info},
    {id: 2, headline: 'Best Password Practices', path: 'cybersecurity/best_password_practices', element: <RenderMarkdown markdown={cybersecurity_manifest.bestPasswordPractices.md} />, info: cybersecurity_manifest.bestPasswordPractices.info},
    {id: 3, headline: 'Protecting Less Tech-Savvy Loved Ones', path: 'cybersecurity/protecting_loved_ones', element: <RenderMarkdown markdown={cybersecurity_manifest.protectingLovedOnes.md} />, info: cybersecurity_manifest.protectingLovedOnes.info},
]

export default cybersecurity