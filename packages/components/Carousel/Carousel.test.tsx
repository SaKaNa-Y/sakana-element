import { rAF } from '@sakana-element/utils';
import { mount, type VueWrapper } from '@vue/test-utils';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { nextTick, ref } from 'vue';
import Carousel from './Carousel.vue';
import CarouselItem from './CarouselItem.vue';

describe('Carousel.vue', () => {
  let wrapper: VueWrapper;
  const onChange = vi.fn();
  const onUpdateModelValue = vi.fn();

  beforeEach(() => {
    onChange.mockClear();
    onUpdateModelValue.mockClear();
  });

  // --- Basic Render ---
  describe('basic render', () => {
    test('should render carousel with items', () => {
      wrapper = mount(
        () => (
          <Carousel>
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
            <CarouselItem>Slide 3</CarouselItem>
          </Carousel>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      expect(wrapper.find('.px-carousel').exists()).toBeTruthy();
      const items = wrapper.findAll('.px-carousel-item');
      expect(items.length).toBe(3);
      expect(items[0].classes()).toContain('is-active');
      expect(items[1].classes()).not.toContain('is-active');
      expect(items[2].classes()).not.toContain('is-active');
    });

    test('should render indicators by default', async () => {
      wrapper = mount(
        () => (
          <Carousel>
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
          </Carousel>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      await nextTick();
      const indicators = wrapper.findAll('.px-carousel__indicator');
      expect(indicators.length).toBe(2);
      expect(indicators[0].classes()).toContain('is-active');
    });
  });

  // --- Navigation Methods ---
  describe('navigation methods', () => {
    test('next() should advance to next slide', async () => {
      const modelValue = ref(0);
      wrapper = mount(
        () => (
          <Carousel
            modelValue={modelValue.value}
            onUpdate:modelValue={(v: number) => {
              modelValue.value = v;
              onUpdateModelValue(v);
            }}
            onChange={onChange}
          >
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
            <CarouselItem>Slide 3</CarouselItem>
          </Carousel>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      const carousel = wrapper.findComponent(Carousel);
      carousel.vm.next();
      await nextTick();
      await rAF();

      expect(onUpdateModelValue).toHaveBeenCalledWith(1);
    });

    test('prev() should go to previous slide', async () => {
      const modelValue = ref(1);
      wrapper = mount(
        () => (
          <Carousel
            modelValue={modelValue.value}
            onUpdate:modelValue={(v: number) => {
              modelValue.value = v;
              onUpdateModelValue(v);
            }}
            onChange={onChange}
          >
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
            <CarouselItem>Slide 3</CarouselItem>
          </Carousel>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      const carousel = wrapper.findComponent(Carousel);
      carousel.vm.prev();
      await nextTick();
      await rAF();

      expect(onUpdateModelValue).toHaveBeenCalledWith(0);
    });

    test('goTo(index) should navigate to specific slide', async () => {
      const modelValue = ref(0);
      wrapper = mount(
        () => (
          <Carousel
            modelValue={modelValue.value}
            onUpdate:modelValue={(v: number) => {
              modelValue.value = v;
              onUpdateModelValue(v);
            }}
            onChange={onChange}
          >
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
            <CarouselItem>Slide 3</CarouselItem>
          </Carousel>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      const carousel = wrapper.findComponent(Carousel);
      carousel.vm.goTo(2);
      await nextTick();
      await rAF();

      expect(onUpdateModelValue).toHaveBeenCalledWith(2);
    });
    test('next() at last slide should be no-op', async () => {
      const modelValue = ref(2);
      wrapper = mount(
        () => (
          <Carousel
            modelValue={modelValue.value}
            onUpdate:modelValue={(v: number) => {
              modelValue.value = v;
              onUpdateModelValue(v);
            }}
          >
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
            <CarouselItem>Slide 3</CarouselItem>
          </Carousel>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      const carousel = wrapper.findComponent(Carousel);
      carousel.vm.next();
      await nextTick();
      await rAF();

      expect(onUpdateModelValue).not.toHaveBeenCalled();
    });

    test('prev() at first slide should be no-op', async () => {
      const modelValue = ref(0);
      wrapper = mount(
        () => (
          <Carousel
            modelValue={modelValue.value}
            onUpdate:modelValue={(v: number) => {
              modelValue.value = v;
              onUpdateModelValue(v);
            }}
          >
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
            <CarouselItem>Slide 3</CarouselItem>
          </Carousel>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      const carousel = wrapper.findComponent(Carousel);
      carousel.vm.prev();
      await nextTick();
      await rAF();

      expect(onUpdateModelValue).not.toHaveBeenCalled();
    });

    test('goTo() with out-of-range index should be no-op', async () => {
      const modelValue = ref(0);
      wrapper = mount(
        () => (
          <Carousel
            modelValue={modelValue.value}
            onUpdate:modelValue={(v: number) => {
              modelValue.value = v;
              onUpdateModelValue(v);
            }}
          >
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
            <CarouselItem>Slide 3</CarouselItem>
          </Carousel>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      const carousel = wrapper.findComponent(Carousel);
      carousel.vm.goTo(-1);
      await nextTick();
      carousel.vm.goTo(99);
      await nextTick();
      await rAF();

      expect(onUpdateModelValue).not.toHaveBeenCalled();
    });
  });

  // --- v-model Binding ---
  describe('v-model binding', () => {
    test('modelValue should set initial active slide', () => {
      wrapper = mount(
        () => (
          <Carousel modelValue={1}>
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
            <CarouselItem>Slide 3</CarouselItem>
          </Carousel>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      const items = wrapper.findAll('.px-carousel-item');
      expect(items[0].classes()).not.toContain('is-active');
      expect(items[1].classes()).toContain('is-active');
    });
  });

  // --- Change Event ---
  describe('change event', () => {
    test('should emit change with current and previous index', async () => {
      const modelValue = ref(0);
      wrapper = mount(
        () => (
          <Carousel
            modelValue={modelValue.value}
            onUpdate:modelValue={(v: number) => {
              modelValue.value = v;
            }}
            onChange={onChange}
          >
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
            <CarouselItem>Slide 3</CarouselItem>
          </Carousel>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      const carousel = wrapper.findComponent(Carousel);
      carousel.vm.next();
      await nextTick();
      await rAF();

      expect(onChange).toHaveBeenCalledWith(1, 0);
    });
  });

  // --- Arrow Visibility ---
  describe('arrow visibility', () => {
    test('showArrow="always" should render arrows', () => {
      wrapper = mount(
        () => (
          <Carousel showArrow="always">
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
          </Carousel>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      expect(wrapper.find('.px-carousel__arrow--prev').exists()).toBeTruthy();
      expect(wrapper.find('.px-carousel__arrow--next').exists()).toBeTruthy();
    });

    test('showArrow="never" should not render arrows', () => {
      wrapper = mount(
        () => (
          <Carousel showArrow="never">
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
          </Carousel>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      expect(wrapper.find('.px-carousel__arrow--prev').exists()).toBeFalsy();
      expect(wrapper.find('.px-carousel__arrow--next').exists()).toBeFalsy();
    });

    test('showArrow="hover" should have hover class', () => {
      wrapper = mount(
        () => (
          <Carousel showArrow="hover">
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
          </Carousel>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      expect(wrapper.find('.px-carousel__arrows').classes()).toContain('is-hover');
    });
  });

  // --- Indicators ---
  describe('indicators', () => {
    test('click on indicator should navigate', async () => {
      const modelValue = ref(0);
      wrapper = mount(
        () => (
          <Carousel
            modelValue={modelValue.value}
            onUpdate:modelValue={(v: number) => {
              modelValue.value = v;
              onUpdateModelValue(v);
            }}
            onChange={onChange}
          >
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
            <CarouselItem>Slide 3</CarouselItem>
          </Carousel>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      await nextTick();
      const indicators = wrapper.findAll('.px-carousel__indicator');
      await indicators[2].trigger('click');
      await nextTick();
      await rAF();

      expect(onUpdateModelValue).toHaveBeenCalledWith(2);
    });

    test('hover trigger on indicator should navigate', async () => {
      const modelValue = ref(0);
      wrapper = mount(
        () => (
          <Carousel
            modelValue={modelValue.value}
            onUpdate:modelValue={(v: number) => {
              modelValue.value = v;
              onUpdateModelValue(v);
            }}
            indicatorTrigger="hover"
          >
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
            <CarouselItem>Slide 3</CarouselItem>
          </Carousel>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      await nextTick();
      const indicators = wrapper.findAll('.px-carousel__indicator');
      await indicators[1].trigger('mouseenter');
      await nextTick();
      await rAF();

      expect(onUpdateModelValue).toHaveBeenCalledWith(1);
    });

    test('showIndicators=false should hide indicators', () => {
      wrapper = mount(
        () => (
          <Carousel showIndicators={false}>
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
          </Carousel>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      expect(wrapper.find('.px-carousel__indicators').exists()).toBeFalsy();
    });
  });

  // --- Vertical Direction ---
  describe('vertical direction', () => {
    test('should add is-vertical class', () => {
      wrapper = mount(
        () => (
          <Carousel direction="vertical" height="200px">
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
          </Carousel>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      expect(wrapper.find('.px-carousel').classes()).toContain('is-vertical');
    });
  });

  // --- Keyboard Navigation ---
  describe('keyboard navigation', () => {
    test('ArrowRight should go to next slide (horizontal)', async () => {
      const modelValue = ref(0);
      wrapper = mount(
        () => (
          <Carousel
            modelValue={modelValue.value}
            onUpdate:modelValue={(v: number) => {
              modelValue.value = v;
              onUpdateModelValue(v);
            }}
          >
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
            <CarouselItem>Slide 3</CarouselItem>
          </Carousel>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      await wrapper.find('.px-carousel').trigger('keydown', { key: 'ArrowRight' });
      await nextTick();
      await rAF();

      expect(onUpdateModelValue).toHaveBeenCalledWith(1);
    });

    test('ArrowLeft should go to previous slide (horizontal)', async () => {
      const modelValue = ref(1);
      wrapper = mount(
        () => (
          <Carousel
            modelValue={modelValue.value}
            onUpdate:modelValue={(v: number) => {
              modelValue.value = v;
              onUpdateModelValue(v);
            }}
          >
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
            <CarouselItem>Slide 3</CarouselItem>
          </Carousel>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      await wrapper.find('.px-carousel').trigger('keydown', { key: 'ArrowLeft' });
      await nextTick();
      await rAF();

      expect(onUpdateModelValue).toHaveBeenCalledWith(0);
    });

    test('ArrowDown should go to next slide (vertical)', async () => {
      const modelValue = ref(0);
      wrapper = mount(
        () => (
          <Carousel
            modelValue={modelValue.value}
            onUpdate:modelValue={(v: number) => {
              modelValue.value = v;
              onUpdateModelValue(v);
            }}
            direction="vertical"
            height="200px"
          >
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
            <CarouselItem>Slide 3</CarouselItem>
          </Carousel>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      await wrapper.find('.px-carousel').trigger('keydown', { key: 'ArrowDown' });
      await nextTick();
      await rAF();

      expect(onUpdateModelValue).toHaveBeenCalledWith(1);
    });

    test('ArrowUp should go to previous slide (vertical)', async () => {
      const modelValue = ref(1);
      wrapper = mount(
        () => (
          <Carousel
            modelValue={modelValue.value}
            onUpdate:modelValue={(v: number) => {
              modelValue.value = v;
              onUpdateModelValue(v);
            }}
            direction="vertical"
            height="200px"
          >
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
            <CarouselItem>Slide 3</CarouselItem>
          </Carousel>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      await wrapper.find('.px-carousel').trigger('keydown', { key: 'ArrowUp' });
      await nextTick();
      await rAF();

      expect(onUpdateModelValue).toHaveBeenCalledWith(0);
    });
  });

  // --- Accessibility ---
  describe('accessibility', () => {
    test('should have correct ARIA attributes', async () => {
      wrapper = mount(
        () => (
          <Carousel>
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
          </Carousel>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      const carousel = wrapper.find('.px-carousel');
      expect(carousel.attributes('role')).toBe('region');
      expect(carousel.attributes('aria-roledescription')).toBe('carousel');

      await nextTick();
      const indicators = wrapper.findAll('.px-carousel__indicator');
      expect(indicators[0].attributes('aria-selected')).toBe('true');
      expect(indicators[1].attributes('aria-selected')).toBe('false');
    });
  });

  // --- Color Variants ---
  describe('color variants', () => {
    test('preset color should add class', () => {
      wrapper = mount(
        () => (
          <Carousel color="primary">
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
          </Carousel>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      expect(wrapper.find('.px-carousel').classes()).toContain('px-carousel--primary');
    });

    test('custom hex color should apply style', () => {
      wrapper = mount(
        () => (
          <Carousel color="#e91e63">
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
          </Carousel>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      const carousel = wrapper.find('.px-carousel');
      const style = carousel.attributes('style') ?? '';
      expect(style).toContain('--px-carousel-border-color');
    });
  });

  // --- Arrow Click ---
  describe('arrow click navigation', () => {
    test('clicking next arrow should advance slide', async () => {
      const modelValue = ref(0);
      wrapper = mount(
        () => (
          <Carousel
            modelValue={modelValue.value}
            onUpdate:modelValue={(v: number) => {
              modelValue.value = v;
              onUpdateModelValue(v);
            }}
            showArrow="always"
          >
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
            <CarouselItem>Slide 3</CarouselItem>
          </Carousel>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      await nextTick();
      await wrapper.find('.px-carousel__arrow--next').trigger('click');
      await nextTick();
      await rAF();

      expect(onUpdateModelValue).toHaveBeenCalledWith(1);
    });

    test('clicking prev arrow should go back', async () => {
      const modelValue = ref(1);
      wrapper = mount(
        () => (
          <Carousel
            modelValue={modelValue.value}
            onUpdate:modelValue={(v: number) => {
              modelValue.value = v;
              onUpdateModelValue(v);
            }}
            showArrow="always"
          >
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
            <CarouselItem>Slide 3</CarouselItem>
          </Carousel>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      await wrapper.find('.px-carousel__arrow--prev').trigger('click');
      await nextTick();
      await rAF();

      expect(onUpdateModelValue).toHaveBeenCalledWith(0);
    });
  });
});
