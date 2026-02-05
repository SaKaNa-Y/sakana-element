// Pixel Art Icons - SVG exports from pixelarticons
// All icons are 24x24 grid based

export { default as check } from './check';
export { default as close } from './close';
export { default as closeBox } from './close-box';
export { default as infoBox } from './info-box';
export { default as warningBox } from './warning-box';
export { default as loader } from './loader';
export { default as eye } from './eye';
export { default as eyeClosed } from './eye-closed';
export { default as chevronDown } from './chevron-down';
export { default as chevronUp } from './chevron-up';
export { default as chevronRight } from './chevron-right';
export { default as chevronLeft } from './chevron-left';
export { default as home } from './home';
export { default as user } from './user';
export { default as search } from './search';
export { default as moonStar } from './moon-star';
export { default as heart } from './heart';
export { default as circle } from './circle';
export { default as sliders } from './sliders';
export { default as notification } from './notification';
export { default as alert } from './alert';
export { default as bookmark } from './bookmark';
export { default as zap } from './zap';
export { default as gift } from './gift';
export { default as music } from './music';
export { default as coffee } from './coffee';
export { default as edit } from './edit';
export { default as trash } from './trash';
export { default as upload } from './upload';
export { default as message } from './message';
export { default as externalLink } from './external-link';
export { default as link } from './link';
export { default as arrowLeft } from './arrow-left';
export { default as arrowRight } from './arrow-right';

// Icon map for registration (name -> SVG string)
import check from './check';
import close from './close';
import closeBox from './close-box';
import infoBox from './info-box';
import warningBox from './warning-box';
import loader from './loader';
import eye from './eye';
import eyeClosed from './eye-closed';
import chevronDown from './chevron-down';
import chevronUp from './chevron-up';
import chevronRight from './chevron-right';
import chevronLeft from './chevron-left';
import home from './home';
import user from './user';
import search from './search';
import moonStar from './moon-star';
import heart from './heart';
import circle from './circle';
import sliders from './sliders';
import notification from './notification';
import alert from './alert';
import bookmark from './bookmark';
import zap from './zap';
import gift from './gift';
import music from './music';
import coffee from './coffee';
import edit from './edit';
import trash from './trash';
import upload from './upload';
import message from './message';
import externalLink from './external-link';
import link from './link';
import arrowLeft from './arrow-left';
import arrowRight from './arrow-right';

export const defaultPixelIcons: Record<string, string> = {
  check,
  close,
  'close-box': closeBox,
  'info-box': infoBox,
  'warning-box': warningBox,
  loader,
  eye,
  'eye-closed': eyeClosed,
  'chevron-down': chevronDown,
  'chevron-up': chevronUp,
  'chevron-right': chevronRight,
  'chevron-left': chevronLeft,
  home,
  user,
  search,
  'moon-star': moonStar,
  heart,
  circle,
  sliders,
  notification,
  alert,
  bookmark,
  zap,
  gift,
  music,
  coffee,
  edit,
  trash,
  upload,
  message,
  'external-link': externalLink,
  link,
  'arrow-left': arrowLeft,
  'arrow-right': arrowRight,
};
