import { withInstall } from '@sakana-element/utils';
import Carousel from './Carousel.vue';
import CarouselItem from './CarouselItem.vue';

export const PxCarousel = withInstall(Carousel);
export const PxCarouselItem = withInstall(CarouselItem);

export * from './types';
