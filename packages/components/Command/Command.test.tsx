import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { h, nextTick } from 'vue';
import Command from './Command.vue';
import CommandDialog from './CommandDialog.vue';
import CommandEmpty from './CommandEmpty.vue';
import CommandGroup from './CommandGroup.vue';
import CommandInput from './CommandInput.vue';
import CommandItem from './CommandItem.vue';
import CommandList from './CommandList.vue';
import CommandSeparator from './CommandSeparator.vue';
import {
  PxCommand,
  PxCommandDialog,
  PxCommandEmpty,
  PxCommandGroup,
  PxCommandInput,
  PxCommandItem,
  PxCommandList,
  PxCommandSeparator,
} from './index';
import '@sakana-element/theme/index.css';

// Helper: mount a basic command palette
function mountCommand(
  options: {
    items?: { value: string; label: string; disabled?: boolean; keywords?: string[] }[];
    filter?: (value: string, search: string, keywords?: string[]) => boolean;
    groups?: { heading: string; items: { value: string; label: string; disabled?: boolean }[] }[];
    showEmpty?: boolean;
  } = {},
) {
  const {
    items = [
      { value: 'calendar', label: 'Calendar' },
      { value: 'search', label: 'Search' },
      { value: 'settings', label: 'Settings' },
    ],
    filter,
    groups,
    showEmpty = false,
  } = options;

  return mount(Command, {
    props: { filter },
    slots: {
      default: () => [
        h(CommandInput, { placeholder: 'Type a command...' }),
        h(CommandList, null, {
          default: () => {
            const children: any[] = [];
            if (showEmpty) {
              children.push(h(CommandEmpty, null, { default: () => 'No results found.' }));
            }
            if (groups) {
              for (const group of groups) {
                children.push(
                  h(
                    CommandGroup,
                    { heading: group.heading },
                    {
                      default: () =>
                        group.items.map((item) =>
                          h(
                            CommandItem,
                            { value: item.value, disabled: item.disabled },
                            {
                              default: () => item.label,
                            },
                          ),
                        ),
                    },
                  ),
                );
              }
            } else {
              for (const item of items) {
                children.push(
                  h(
                    CommandItem,
                    { value: item.value, disabled: item.disabled, keywords: item.keywords },
                    { default: () => item.label },
                  ),
                );
              }
            }
            return children;
          },
        }),
      ],
    },
  });
}

describe('Command exports/install', () => {
  it.each([
    ['PxCommand', PxCommand],
    ['PxCommandDialog', PxCommandDialog],
    ['PxCommandEmpty', PxCommandEmpty],
    ['PxCommandGroup', PxCommandGroup],
    ['PxCommandInput', PxCommandInput],
    ['PxCommandItem', PxCommandItem],
    ['PxCommandList', PxCommandList],
    ['PxCommandSeparator', PxCommandSeparator],
  ])('%s should have .install', (_name, component) => {
    expect(component.install).toBeDefined();
  });

  it('PxCommand should be the Command component', () => {
    expect(PxCommand).toBe(Command);
  });
});

describe('Command basic rendering', () => {
  it('should render the command container with correct class', () => {
    const wrapper = mountCommand();
    expect(wrapper.find('.px-command').exists()).toBe(true);
  });

  it('should render input with placeholder', () => {
    const wrapper = mountCommand();
    const input = wrapper.find('.px-command-input__input');
    expect(input.exists()).toBe(true);
    expect(input.attributes('placeholder')).toBe('Type a command...');
  });

  it('should render the list container', () => {
    const wrapper = mountCommand();
    expect(wrapper.find('.px-command-list').exists()).toBe(true);
  });

  it('should render items with correct classes', () => {
    const wrapper = mountCommand();
    const items = wrapper.findAll('.px-command-item');
    expect(items.length).toBe(3);
  });

  it('should render item text content', () => {
    const wrapper = mountCommand();
    const items = wrapper.findAll('.px-command-item');
    expect(items[0].text()).toContain('Calendar');
    expect(items[1].text()).toContain('Search');
    expect(items[2].text()).toContain('Settings');
  });
});

describe('Command search/filter', () => {
  it('should filter items by search input', async () => {
    const wrapper = mountCommand();
    const input = wrapper.find('.px-command-input__input');
    await input.setValue('cal');
    await nextTick();

    const visibleItems = wrapper.findAll('.px-command-item:not(.is-hidden)');
    const hiddenItems = wrapper.findAll('.px-command-item.is-hidden');
    expect(visibleItems.length).toBe(1);
    expect(visibleItems[0].text()).toContain('Calendar');
    expect(hiddenItems.length).toBe(2);
  });

  it('should show all items when search is empty', async () => {
    const wrapper = mountCommand();
    const input = wrapper.find('.px-command-input__input');
    await input.setValue('cal');
    await nextTick();
    await input.setValue('');
    await nextTick();

    const items = wrapper.findAll('.px-command-item:not(.is-hidden)');
    expect(items.length).toBe(3);
  });

  it('should filter by keywords', async () => {
    const wrapper = mountCommand({
      items: [
        { value: 'calendar', label: 'Calendar', keywords: ['date', 'schedule'] },
        { value: 'search', label: 'Search' },
      ],
    });
    const input = wrapper.find('.px-command-input__input');
    await input.setValue('schedule');
    await nextTick();

    const visibleItems = wrapper.findAll('.px-command-item:not(.is-hidden)');
    expect(visibleItems.length).toBe(1);
    expect(visibleItems[0].text()).toContain('Calendar');
  });
});

describe('Command custom filter', () => {
  it('should use custom filter function', async () => {
    const customFilter = vi.fn((value: string, search: string) => {
      return value === search;
    });

    const wrapper = mountCommand({ filter: customFilter });
    const input = wrapper.find('.px-command-input__input');
    await input.setValue('search');
    await nextTick();

    expect(customFilter).toHaveBeenCalled();
    const visibleItems = wrapper.findAll('.px-command-item:not(.is-hidden)');
    expect(visibleItems.length).toBe(1);
    expect(visibleItems[0].text()).toContain('Search');
  });
});

describe('Command keyboard navigation', () => {
  it('should highlight first item on ArrowDown', async () => {
    const wrapper = mountCommand();
    const input = wrapper.find('.px-command-input__input');
    await input.trigger('keydown', { key: 'ArrowDown' });
    await nextTick();

    const items = wrapper.findAll('.px-command-item');
    expect(items[0].classes()).toContain('is-highlighted');
  });

  it('should move highlight down with ArrowDown', async () => {
    const wrapper = mountCommand();
    const input = wrapper.find('.px-command-input__input');
    await input.trigger('keydown', { key: 'ArrowDown' });
    await nextTick();
    await input.trigger('keydown', { key: 'ArrowDown' });
    await nextTick();

    const items = wrapper.findAll('.px-command-item');
    expect(items[0].classes()).not.toContain('is-highlighted');
    expect(items[1].classes()).toContain('is-highlighted');
  });

  it('should move highlight up with ArrowUp', async () => {
    const wrapper = mountCommand();
    const input = wrapper.find('.px-command-input__input');
    await input.trigger('keydown', { key: 'ArrowDown' });
    await nextTick();
    await input.trigger('keydown', { key: 'ArrowDown' });
    await nextTick();
    await input.trigger('keydown', { key: 'ArrowUp' });
    await nextTick();

    const items = wrapper.findAll('.px-command-item');
    expect(items[0].classes()).toContain('is-highlighted');
  });

  it('should wrap around to last item from first on ArrowUp', async () => {
    const wrapper = mountCommand();
    const input = wrapper.find('.px-command-input__input');
    await input.trigger('keydown', { key: 'ArrowDown' });
    await nextTick();
    await input.trigger('keydown', { key: 'ArrowUp' });
    await nextTick();

    const items = wrapper.findAll('.px-command-item');
    expect(items[items.length - 1].classes()).toContain('is-highlighted');
  });

  it('should wrap around to first item from last on ArrowDown', async () => {
    const wrapper = mountCommand();
    const input = wrapper.find('.px-command-input__input');
    // press down 4 times (3 items + wrap)
    for (let i = 0; i < 4; i++) {
      await input.trigger('keydown', { key: 'ArrowDown' });
      await nextTick();
    }

    const items = wrapper.findAll('.px-command-item');
    expect(items[0].classes()).toContain('is-highlighted');
  });

  it('should emit select on Enter when item is highlighted', async () => {
    const wrapper = mountCommand();
    const input = wrapper.find('.px-command-input__input');
    await input.trigger('keydown', { key: 'ArrowDown' });
    await nextTick();
    await input.trigger('keydown', { key: 'Enter' });
    await nextTick();

    expect(wrapper.emitted('select')).toBeTruthy();
    expect(wrapper.emitted('select')![0]).toEqual(['calendar']);
  });

  it('should skip disabled items during keyboard navigation', async () => {
    const wrapper = mountCommand({
      items: [
        { value: 'a', label: 'A' },
        { value: 'b', label: 'B', disabled: true },
        { value: 'c', label: 'C' },
      ],
    });
    const input = wrapper.find('.px-command-input__input');
    await input.trigger('keydown', { key: 'ArrowDown' });
    await nextTick();
    await input.trigger('keydown', { key: 'ArrowDown' });
    await nextTick();

    const items = wrapper.findAll('.px-command-item');
    expect(items[1].classes()).toContain('is-disabled');
    expect(items[2].classes()).toContain('is-highlighted');
  });
});

describe('CommandGroup', () => {
  it('should render group heading', () => {
    const wrapper = mountCommand({
      groups: [
        {
          heading: 'Navigation',
          items: [{ value: 'home', label: 'Home' }],
        },
      ],
    });
    expect(wrapper.find('.px-command-group__heading').text()).toBe('Navigation');
  });

  it('should hide group when all children filtered out', async () => {
    const wrapper = mountCommand({
      groups: [
        {
          heading: 'Navigation',
          items: [{ value: 'home', label: 'Home' }],
        },
        {
          heading: 'Settings',
          items: [{ value: 'profile', label: 'Profile' }],
        },
      ],
    });
    const input = wrapper.find('.px-command-input__input');
    await input.setValue('profile');
    await nextTick();
    await nextTick();

    const hiddenGroups = wrapper.findAll('.px-command-group.is-hidden');
    expect(hiddenGroups.length).toBe(1);
  });
});

describe('CommandSeparator', () => {
  it('should render separator', () => {
    const wrapper = mount(Command, {
      slots: {
        default: () => [
          h(CommandList, null, {
            default: () => [
              h(CommandItem, { value: 'a' }, { default: () => 'A' }),
              h(CommandSeparator),
              h(CommandItem, { value: 'b' }, { default: () => 'B' }),
            ],
          }),
        ],
      },
    });
    expect(wrapper.find('.px-command-separator').exists()).toBe(true);
  });
});

describe('CommandEmpty', () => {
  it('should show when no results', async () => {
    const wrapper = mountCommand({ showEmpty: true });
    const input = wrapper.find('.px-command-input__input');
    await input.setValue('zzzzzzz');
    await nextTick();

    const empty = wrapper.find('.px-command-empty');
    expect(empty.exists()).toBe(true);
    expect(empty.classes()).not.toContain('is-hidden');
  });

  it('should hide when results exist', async () => {
    const wrapper = mountCommand({ showEmpty: true });
    await nextTick();
    const empty = wrapper.find('.px-command-empty');
    expect(empty.exists()).toBe(true);
    expect(empty.classes()).toContain('is-hidden');
  });
});

describe('Disabled items', () => {
  it('should apply is-disabled class', () => {
    const wrapper = mountCommand({
      items: [{ value: 'a', label: 'A', disabled: true }],
    });
    expect(wrapper.find('.px-command-item').classes()).toContain('is-disabled');
  });

  it('should not emit select when clicking disabled item', async () => {
    const wrapper = mountCommand({
      items: [{ value: 'a', label: 'A', disabled: true }],
    });
    await wrapper.find('.px-command-item').trigger('click');
    await nextTick();
    expect(wrapper.emitted('select')).toBeFalsy();
  });
});

describe('CommandItem with icon and shortcut', () => {
  it('should render icon', () => {
    const wrapper = mount(Command, {
      slots: {
        default: () =>
          h(CommandList, null, {
            default: () =>
              h(CommandItem, { value: 'test', icon: 'search' }, { default: () => 'Test' }),
          }),
      },
    });
    expect(wrapper.find('.px-command-item__icon').exists()).toBe(true);
  });

  it('should render shortcut labels', () => {
    const wrapper = mount(Command, {
      slots: {
        default: () =>
          h(CommandList, null, {
            default: () =>
              h(CommandItem, { value: 'test', shortcut: ['Ctrl', 'K'] }, { default: () => 'Test' }),
          }),
      },
    });
    const kbds = wrapper.findAll('.px-command-item__shortcut kbd');
    expect(kbds.length).toBe(2);
    expect(kbds[0].text()).toBe('Ctrl');
    expect(kbds[1].text()).toBe('K');
  });
});

describe('CommandDialog', () => {
  const dialogStubs = { global: { stubs: { teleport: true } } };

  it('should render overlay when open', () => {
    const wrapper = mount(CommandDialog, {
      props: { modelValue: true },
      ...dialogStubs,
      slots: {
        default: () =>
          h(Command, null, {
            default: () => h(CommandInput, { placeholder: 'Search...' }),
          }),
      },
    });
    expect(wrapper.find('.px-command-dialog__overlay').exists()).toBe(true);
  });

  it('should not render overlay when closed', () => {
    const wrapper = mount(CommandDialog, {
      props: { modelValue: false },
      ...dialogStubs,
      slots: {
        default: () =>
          h(Command, null, {
            default: () => h(CommandInput, { placeholder: 'Search...' }),
          }),
      },
    });
    expect(wrapper.find('.px-command-dialog__overlay').exists()).toBe(false);
  });

  it('should close on Escape', async () => {
    const wrapper = mount(CommandDialog, {
      props: { modelValue: true },
      ...dialogStubs,
      slots: {
        default: () =>
          h(Command, null, {
            default: () => h(CommandInput, { placeholder: 'Search...' }),
          }),
      },
    });
    await wrapper.find('.px-command-dialog').trigger('keydown', { key: 'Escape' });
    await nextTick();
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([false]);
  });

  it('should close when clicking overlay', async () => {
    const wrapper = mount(CommandDialog, {
      props: { modelValue: true },
      ...dialogStubs,
      slots: {
        default: () =>
          h(Command, null, {
            default: () => h(CommandInput, { placeholder: 'Search...' }),
          }),
      },
    });
    await wrapper.find('.px-command-dialog__overlay').trigger('click');
    await nextTick();
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([false]);
  });
});

describe('Command accessibility', () => {
  it('should have role="listbox" on list', () => {
    const wrapper = mountCommand();
    expect(wrapper.find('.px-command-list').attributes('role')).toBe('listbox');
  });

  it('should have role="option" on items', () => {
    const wrapper = mountCommand();
    const items = wrapper.findAll('.px-command-item');
    for (const item of items) {
      expect(item.attributes('role')).toBe('option');
    }
  });

  it('should set aria-selected on highlighted item', async () => {
    const wrapper = mountCommand();
    const input = wrapper.find('.px-command-input__input');
    await input.trigger('keydown', { key: 'ArrowDown' });
    await nextTick();

    const items = wrapper.findAll('.px-command-item');
    expect(items[0].attributes('aria-selected')).toBe('true');
    expect(items[1].attributes('aria-selected')).toBe('false');
  });

  it('should set aria-disabled on disabled items', () => {
    const wrapper = mountCommand({
      items: [
        { value: 'a', label: 'A', disabled: true },
        { value: 'b', label: 'B' },
      ],
    });
    const items = wrapper.findAll('.px-command-item');
    expect(items[0].attributes('aria-disabled')).toBe('true');
    expect(items[1].attributes('aria-disabled')).toBe('false');
  });

  it('should have aria-label on the command root', () => {
    const wrapper = mount(Command, {
      props: { label: 'Command menu' },
      slots: {
        default: () => h(CommandList, null, { default: () => [] }),
      },
    });
    expect(wrapper.find('.px-command').attributes('aria-label')).toBe('Command menu');
  });
});

describe('Command theme styles', () => {
  it('should use light highlight tokens by default', async () => {
    const wrapper = mount(Command, {
      attachTo: document.body,
      slots: {
        default: () => [
          h(CommandInput, { placeholder: 'Type a command...' }),
          h(CommandList, null, {
            default: () => [
              h(CommandItem, { value: 'calendar' }, { default: () => 'Calendar' }),
              h(CommandItem, { value: 'search' }, { default: () => 'Search' }),
            ],
          }),
        ],
      },
    });

    const input = wrapper.find('.px-command-input__input');
    await input.trigger('keydown', { key: 'ArrowDown' });
    await nextTick();

    const item = wrapper.find('.px-command-item.is-highlighted').element as HTMLElement;
    const style = getComputedStyle(item);

    expect(style.backgroundColor).toBe('rgb(238, 241, 254)');
    expect(style.color).toBe('rgb(76, 79, 105)');

    wrapper.unmount();
  });

  it('should use dark highlight tokens inside a dark preview scope', async () => {
    const host = document.createElement('div');
    host.className = 'px-dark';
    document.body.appendChild(host);

    const wrapper = mount(Command, {
      attachTo: host,
      slots: {
        default: () => [
          h(CommandInput, { placeholder: 'Type a command...' }),
          h(CommandList, null, {
            default: () => [
              h(CommandItem, { value: 'calendar' }, { default: () => 'Calendar' }),
              h(CommandItem, { value: 'search' }, { default: () => 'Search' }),
            ],
          }),
        ],
      },
    });

    const input = wrapper.find('.px-command-input__input');
    await input.trigger('keydown', { key: 'ArrowDown' });
    await nextTick();

    const item = wrapper.find('.px-command-item.is-highlighted').element as HTMLElement;
    const style = getComputedStyle(item);

    expect(style.backgroundColor).toBe('rgb(35, 40, 69)');
    expect(style.color).toBe('rgb(255, 255, 255)');

    wrapper.unmount();
    host.remove();
  });
});
