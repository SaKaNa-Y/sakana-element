import { withInstall } from '@sakana-element/utils';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ChatBubble from './ChatBubble.vue';
import { PxChatBubble } from './index';
import type { ChatBubblePlacement, ChatBubbleType } from './types';

describe('ChatBubble.vue', () => {
  it('should render with default props', () => {
    const wrapper = mount(ChatBubble, {
      slots: { default: 'Hello!' },
    });
    expect(wrapper.find('.px-chat').exists()).toBe(true);
    expect(wrapper.find('.px-chat--start').exists()).toBe(true);
  });

  it('should render default slot content in bubble', () => {
    const wrapper = mount(ChatBubble, {
      slots: { default: 'Hello World' },
    });
    expect(wrapper.find('.px-chat__bubble').text()).toBe('Hello World');
  });

  // Placement variants
  it.each([['start'], ['end']] as [
    ChatBubblePlacement,
  ][])('should apply correct class for placement %s', (placement) => {
    const wrapper = mount(ChatBubble, {
      props: { placement },
      slots: { default: 'Hi' },
    });
    expect(wrapper.find('.px-chat').classes()).toContain(`px-chat--${placement}`);
  });

  // Type variants
  it.each([['primary'], ['success'], ['info'], ['warning'], ['danger']] as [
    ChatBubbleType,
  ][])('should apply correct class for type %s', (type) => {
    const wrapper = mount(ChatBubble, {
      props: { type },
      slots: { default: 'Hi' },
    });
    expect(wrapper.find('.px-chat').classes()).toContain(`px-chat--${type}`);
  });

  // Name prop
  it('should render name in header', () => {
    const wrapper = mount(ChatBubble, {
      props: { name: 'Alice' },
      slots: { default: 'Hi' },
    });
    expect(wrapper.find('.px-chat__header').exists()).toBe(true);
    expect(wrapper.find('.px-chat__name').text()).toBe('Alice');
  });

  // Time prop
  it('should render time in header', () => {
    const wrapper = mount(ChatBubble, {
      props: { time: '12:30' },
      slots: { default: 'Hi' },
    });
    expect(wrapper.find('.px-chat__header').exists()).toBe(true);
    expect(wrapper.find('.px-chat__time').text()).toBe('12:30');
  });

  // Status prop
  it('should render status in footer', () => {
    const wrapper = mount(ChatBubble, {
      props: { status: 'Delivered' },
      slots: { default: 'Hi' },
    });
    expect(wrapper.find('.px-chat__footer').exists()).toBe(true);
    expect(wrapper.find('.px-chat__footer').text()).toBe('Delivered');
  });

  // Avatar slot
  it('should render avatar slot', () => {
    const wrapper = mount(ChatBubble, {
      slots: {
        default: 'Hi',
        avatar: '<img src="avatar.png" />',
      },
    });
    expect(wrapper.find('.px-chat__avatar').exists()).toBe(true);
  });

  // Header slot overrides name/time
  it('should render header slot overriding name and time', () => {
    const wrapper = mount(ChatBubble, {
      props: { name: 'Alice', time: '12:30' },
      slots: {
        default: 'Hi',
        header: '<span class="custom-header">Custom Header</span>',
      },
    });
    expect(wrapper.find('.px-chat__header').exists()).toBe(true);
    expect(wrapper.find('.custom-header').exists()).toBe(true);
    expect(wrapper.find('.px-chat__name').exists()).toBe(false);
    expect(wrapper.find('.px-chat__time').exists()).toBe(false);
  });

  // Footer slot overrides status
  it('should render footer slot overriding status', () => {
    const wrapper = mount(ChatBubble, {
      props: { status: 'Delivered' },
      slots: {
        default: 'Hi',
        footer: '<span class="custom-footer">Custom Footer</span>',
      },
    });
    expect(wrapper.find('.px-chat__footer').exists()).toBe(true);
    expect(wrapper.find('.custom-footer').exists()).toBe(true);
  });

  // Custom color
  it('should apply custom color CSS variables when color prop is provided', () => {
    const wrapper = mount(ChatBubble, {
      props: { color: '#ff6600' },
      slots: { default: 'Hi' },
    });
    const style = wrapper.find('.px-chat').attributes('style');
    expect(style).toContain('--px-chat-bubble-bg-color');
    expect(style).toContain('--px-chat-bubble-border-color');
    expect(style).toContain('--px-chat-bubble-text-color');
  });

  it('should not apply custom color style when no color prop is provided', () => {
    const wrapper = mount(ChatBubble, {
      slots: { default: 'Hi' },
    });
    const style = wrapper.find('.px-chat').attributes('style') || '';
    expect(style).not.toContain('--px-chat-bubble-bg-color');
  });

  // Absent sections
  it('should not render header when no name, time, or header slot', () => {
    const wrapper = mount(ChatBubble, {
      slots: { default: 'Hi' },
    });
    expect(wrapper.find('.px-chat__header').exists()).toBe(false);
  });

  it('should not render footer when no status or footer slot', () => {
    const wrapper = mount(ChatBubble, {
      slots: { default: 'Hi' },
    });
    expect(wrapper.find('.px-chat__footer').exists()).toBe(false);
  });

  it('should not render avatar when no avatar slot', () => {
    const wrapper = mount(ChatBubble, {
      slots: { default: 'Hi' },
    });
    expect(wrapper.find('.px-chat__avatar').exists()).toBe(false);
  });

  // Typing indicator
  it('should show typing indicator when typing is true', () => {
    const wrapper = mount(ChatBubble, {
      props: { typing: true },
      slots: { default: 'Hi' },
    });
    expect(wrapper.find('.px-chat__typing').exists()).toBe(true);
    const dots = wrapper.findAll('.px-chat__typing-dot');
    expect(dots).toHaveLength(3);
  });

  it('should not show typing indicator when typing is false', () => {
    const wrapper = mount(ChatBubble, {
      props: { typing: false },
      slots: { default: 'Hi' },
    });
    expect(wrapper.find('.px-chat__typing').exists()).toBe(false);
  });

  it('should hide slot content when typing is true', () => {
    const wrapper = mount(ChatBubble, {
      props: { typing: true },
      slots: { default: 'Hello World' },
    });
    // The default slot content should not be visible in the main bubble
    const bubble = wrapper.find('.px-chat__bubble');
    expect(bubble.text()).not.toContain('Hello World');
  });

  // Combination test
  it('should handle placement + type + name + time together', () => {
    const wrapper = mount(ChatBubble, {
      props: {
        placement: 'end',
        type: 'primary',
        name: 'Bob',
        time: '14:00',
      },
      slots: { default: 'Hi' },
    });
    const classes = wrapper.find('.px-chat').classes();
    expect(classes).toContain('px-chat--end');
    expect(classes).toContain('px-chat--primary');
    expect(wrapper.find('.px-chat__name').text()).toBe('Bob');
    expect(wrapper.find('.px-chat__time').text()).toBe('14:00');
  });
});

describe('ChatBubble/index', () => {
  it('should be exported with withInstall()', () => {
    expect(PxChatBubble.install).toBeDefined();
  });

  it('component should be exported', () => {
    expect(PxChatBubble).toBe(ChatBubble);
  });

  it('should enhance ChatBubble component', () => {
    const enhancedChatBubble = withInstall(ChatBubble);
    expect(enhancedChatBubble).toBe(PxChatBubble);
  });

  it('should apply specific enhance', () => {
    const enhancedChatBubble = withInstall(ChatBubble);
    expect(enhancedChatBubble).toHaveProperty('install');
  });
});
