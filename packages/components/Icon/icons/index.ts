// Pixel Art Icons - SVG exports from pixelarticons
// All icons are 24x24 grid based

export { default as alert } from './alert';
export { default as arrowLeft } from './arrow-left';
export { default as arrowRight } from './arrow-right';
export { default as bookmark } from './bookmark';
export { default as check } from './check';
export { default as chevronDown } from './chevron-down';
export { default as chevronLeft } from './chevron-left';
export { default as chevronRight } from './chevron-right';
export { default as chevronUp } from './chevron-up';
export { default as circle } from './circle';
export { default as close } from './close';
export { default as closeBox } from './close-box';
export { default as coffee } from './coffee';
export { default as edit } from './edit';
export { default as externalLink } from './external-link';
export { default as eye } from './eye';
export { default as eyeClosed } from './eye-closed';
export { default as gift } from './gift';
export { default as heart } from './heart';
export { default as home } from './home';
export { default as infoBox } from './info-box';
export { default as link } from './link';
export { default as loader } from './loader';
export { default as message } from './message';
export { default as moonStar } from './moon-star';
export { default as music } from './music';
export { default as notification } from './notification';
export { default as search } from './search';
export { default as sliders } from './sliders';
export { default as trash } from './trash';
export { default as upload } from './upload';
export { default as user } from './user';
export { default as warningBox } from './warning-box';
export { default as zap } from './zap';

// Hand-curated custom icon imports (may override same-named pixelarticons)
import alert from './alert';
import arrowLeft from './arrow-left';
import arrowRight from './arrow-right';
import bookmark from './bookmark';
import check from './check';
import chevronDown from './chevron-down';
import chevronLeft from './chevron-left';
import chevronRight from './chevron-right';
import chevronUp from './chevron-up';
import circle from './circle';
import close from './close';
import closeBox from './close-box';
import coffee from './coffee';
import edit from './edit';
import externalLink from './external-link';
import eye from './eye';
import eyeClosed from './eye-closed';
import gift from './gift';
import heart from './heart';
import home from './home';
import infoBox from './info-box';
import link from './link';
import loader from './loader';
import message from './message';
import moonStar from './moon-star';
import music from './music';
import notification from './notification';
// Bulk import: all 486 pixelarticons
import { pixelarticonsMap } from './pixelarticons-all';
import search from './search';
import sliders from './sliders';
import trash from './trash';
import upload from './upload';
import user from './user';
import warningBox from './warning-box';
import zap from './zap';

// Icon map for registration (name -> SVG string)
// All 486 pixelarticons are available; custom icons override same-named entries
export const defaultPixelIcons: Record<string, string> = {
  ...pixelarticonsMap,
  // Custom overrides below take priority (hand-curated SVGs)
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
