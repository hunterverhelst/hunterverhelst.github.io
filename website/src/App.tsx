import { CHANNEL_TYPES } from './packages/Linkees/src/constants'
import Linkees from './packages/Linkees/src/index';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import './App.css';
import { ItemType } from './packages/Linkees/src/ts';

const linkedin_pfp = 'https://media.licdn.com/dms/image/C4D03AQHfzWPLpThM5Q/profile-displayphoto-shrink_400_400/0/1605864337297?e=1714003200&v=beta&t=T7VRGZjGSQixAox9HbN8Uczi0O6AmyGopMQfaCUwtOU';

const cards: ItemType[] = [
  {
    title: 'GitHub',
    subtitle: 'github.com/hunterverhelst',
    type: CHANNEL_TYPES.GITHUB,
    link: 'https://github.com/hunterverhelst',
  },
  {
    title: 'LinkedIn',
    subtitle: 'in/hunterverhelst/',
    type: CHANNEL_TYPES.LINKEDIN,
    link: 'https://www.linkedin.com/in/hunterverhelst/'
  },
  {
    title: 'Resume',
    subtitle: 'Resume.pdf',
    type: CHANNEL_TYPES.OTHER,
    image: faFilePdf,
    link: process.env.PUBLIC_URL + '/Resume.pdf'
  },
]

function App() {
  return (
      <Linkees name="Hunter Ver Helst" cardItems={cards} headerAvatar={linkedin_pfp}/>
  );
}

export default App;
