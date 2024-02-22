import website from '../assets/website.png';
import instagram from '../assets/instagram.png';
import youtube from '../assets/youtube.jpeg';
import dribbble from '../assets/dribbble.png';
import telegram from '../assets/telegram.png';
import twitter from '../assets/twitter.png';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import { CHANNEL_TYPES } from '../constants';

export const CHANNEL_TYPE_VS_COVER_IMAGE = {
  [CHANNEL_TYPES.WEBSITE]: website,
  [CHANNEL_TYPES.INSTAGRAM]: instagram,
  [CHANNEL_TYPES.LINKEDIN]: faLinkedin,
  [CHANNEL_TYPES.YOUTUBE]: youtube,
  [CHANNEL_TYPES.DRIBBLE]: dribbble,
  [CHANNEL_TYPES.GITHUB]: faGithub,
  [CHANNEL_TYPES.TELEGRAM]: telegram,
  [CHANNEL_TYPES.TWITTER]: twitter,
};
