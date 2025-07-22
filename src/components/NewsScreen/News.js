import RenderMarkdown from '../util/RenderMarkdown.jsx';

import { utwiit_info, utwiit_md } from '../NewsScreen/News/UTWIIT.js';
import { windows10EOL_info, windows10EOL_md } from '../NewsScreen/News/Windows10EOL.js';
import { verified_duo_push_info, verified_duo_push_md } from '../NewsScreen/News/VerifiedDuoPush.js';

const news_manifest = {
    utwiIT: {
        md: utwiit_md,
        info: utwiit_info
    },
    windows10EOL: {
        md: windows10EOL_md,
        info: windows10EOL_info
    },
    verifiedDuoPush: {
        md: verified_duo_push_md,
        info: verified_duo_push_info
    }
}

const news = [
  // {id: 5, headline: 'Headline', path: null, element: <RenderMarkdown markdown={'# Headline'} />, info: 'Desc'},
  // {id: 4, headline: 'Headline', path: null, element: <RenderMarkdown markdown={'# Headline'} />, info: 'Desc'},
  // {id: 3, headline: 'Headline', path: null, element: <RenderMarkdown markdown={'# Headline'} />, info: 'Desc'},
  {id: 2, headline: 'Introducing Verified Duo Push', path: 'news/verified_duo_push', element: <RenderMarkdown markdown={news_manifest.verifiedDuoPush.md} />, info: news_manifest.verifiedDuoPush.info},
  {id: 1, headline: 'Windows 10 Sunsets on October 2025', path: 'news/windows10_eol', element: <RenderMarkdown markdown={news_manifest.windows10EOL.md} />, info: news_manifest.windows10EOL.info},
  {id: 0, headline: 'Welcome to it.bockwaterheaters.com!', path: 'news/utwi_it', element: <RenderMarkdown markdown={news_manifest.utwiIT.md} />, info: news_manifest.utwiIT.info}
]

export default news