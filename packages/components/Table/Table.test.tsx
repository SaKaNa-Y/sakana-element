import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { PxTable } from './index';
import Table from './Table.vue';

const basicTable = `
<table>
  <thead><tr><th>Name</th><th>Age</th></tr></thead>
  <tbody>
    <tr><td>Alice</td><td>25</td></tr>
    <tr><td>Bob</td><td>30</td></tr>
  </tbody>
</table>
`;

describe('Table', () => {
  // ─── Rendering ───
  test('renders wrapper with px-table class', () => {
    const wrapper = mount(Table, { slots: { default: basicTable } });
    expect(wrapper.classes()).toContain('px-table');
  });

  test('renders inner wrapper with px-table__inner class', () => {
    const wrapper = mount(Table, { slots: { default: basicTable } });
    const inner = wrapper.find('.px-table__inner');
    expect(inner.exists()).toBe(true);
    expect(inner.find('table').exists()).toBe(true);
  });

  test('renders slot content', () => {
    const wrapper = mount(Table, { slots: { default: basicTable } });
    expect(wrapper.find('table').exists()).toBe(true);
    expect(wrapper.find('th').text()).toBe('Name');
    expect(wrapper.findAll('td').length).toBe(4);
  });

  test('has correct component name', () => {
    expect(Table.name).toBe('PxTable');
  });

  // ─── Size Variants ───
  test('applies default md size class', () => {
    const wrapper = mount(Table, { slots: { default: basicTable } });
    expect(wrapper.classes()).toContain('px-table--md');
  });

  test('applies xs size class', () => {
    const wrapper = mount(Table, { props: { size: 'xs' }, slots: { default: basicTable } });
    expect(wrapper.classes()).toContain('px-table--xs');
  });

  test('applies sm size class', () => {
    const wrapper = mount(Table, { props: { size: 'sm' }, slots: { default: basicTable } });
    expect(wrapper.classes()).toContain('px-table--sm');
  });

  test('applies lg size class', () => {
    const wrapper = mount(Table, { props: { size: 'lg' }, slots: { default: basicTable } });
    expect(wrapper.classes()).toContain('px-table--lg');
  });

  test('applies xl size class', () => {
    const wrapper = mount(Table, { props: { size: 'xl' }, slots: { default: basicTable } });
    expect(wrapper.classes()).toContain('px-table--xl');
  });

  // ─── Type Variants ───
  test('applies type class when type is set', () => {
    const wrapper = mount(Table, { props: { type: 'primary' }, slots: { default: basicTable } });
    expect(wrapper.classes()).toContain('px-table--primary');
  });

  test('does not apply type class when type is not set', () => {
    const wrapper = mount(Table, { slots: { default: basicTable } });
    expect(wrapper.classes()).not.toContain('px-table--primary');
    expect(wrapper.classes()).not.toContain('px-table--success');
  });

  test('applies each type variant', () => {
    const types = ['primary', 'success', 'info', 'warning', 'danger'] as const;
    for (const type of types) {
      const wrapper = mount(Table, { props: { type }, slots: { default: basicTable } });
      expect(wrapper.classes()).toContain(`px-table--${type}`);
    }
  });

  // ─── Boolean Flags ───
  test('applies zebra class', () => {
    const wrapper = mount(Table, { props: { zebra: true }, slots: { default: basicTable } });
    expect(wrapper.classes()).toContain('is-zebra');
  });

  test('applies hover class', () => {
    const wrapper = mount(Table, { props: { hover: true }, slots: { default: basicTable } });
    expect(wrapper.classes()).toContain('is-hover');
  });

  test('applies border class', () => {
    const wrapper = mount(Table, { props: { border: true }, slots: { default: basicTable } });
    expect(wrapper.classes()).toContain('is-border');
  });

  test('stripe is alias for zebra', () => {
    const wrapper = mount(Table, { props: { stripe: true }, slots: { default: basicTable } });
    expect(wrapper.classes()).toContain('is-zebra');
  });

  test('applies pinRows class', () => {
    const wrapper = mount(Table, { props: { pinRows: true }, slots: { default: basicTable } });
    expect(wrapper.classes()).toContain('is-pin-rows');
  });

  test('applies pinCols class', () => {
    const wrapper = mount(Table, { props: { pinCols: true }, slots: { default: basicTable } });
    expect(wrapper.classes()).toContain('is-pin-cols');
  });

  test('showHeader defaults to true (no hide class)', () => {
    const wrapper = mount(Table, { slots: { default: basicTable } });
    expect(wrapper.classes()).not.toContain('is-hide-header');
  });

  test('showHeader false adds hide class', () => {
    const wrapper = mount(Table, { props: { showHeader: false }, slots: { default: basicTable } });
    expect(wrapper.classes()).toContain('is-hide-header');
  });

  // ─── Combined ───
  test('stripe and zebra both resolve to is-zebra', () => {
    const wrapper = mount(Table, {
      props: { stripe: true, zebra: true },
      slots: { default: basicTable },
    });
    expect(wrapper.classes()).toContain('is-zebra');
  });

  test('pinRows and pinCols together', () => {
    const wrapper = mount(Table, {
      props: { pinRows: true, pinCols: true },
      slots: { default: basicTable },
    });
    expect(wrapper.classes()).toContain('is-pin-rows');
    expect(wrapper.classes()).toContain('is-pin-cols');
  });

  test('all features combined', () => {
    const wrapper = mount(Table, {
      props: {
        zebra: true,
        hover: true,
        border: true,
        pinRows: true,
        pinCols: true,
        size: 'lg',
      },
      slots: { default: basicTable },
    });
    expect(wrapper.classes()).toContain('px-table');
    expect(wrapper.classes()).toContain('px-table--lg');
    expect(wrapper.classes()).toContain('is-zebra');
    expect(wrapper.classes()).toContain('is-hover');
    expect(wrapper.classes()).toContain('is-border');
    expect(wrapper.classes()).toContain('is-pin-rows');
    expect(wrapper.classes()).toContain('is-pin-cols');
  });

  // ─── Boolean flags default to false ───
  test('boolean flags default to false', () => {
    const wrapper = mount(Table, { slots: { default: basicTable } });
    expect(wrapper.classes()).not.toContain('is-zebra');
    expect(wrapper.classes()).not.toContain('is-hover');
    expect(wrapper.classes()).not.toContain('is-border');
    expect(wrapper.classes()).not.toContain('is-pin-rows');
    expect(wrapper.classes()).not.toContain('is-pin-cols');
  });

  // ─── Empty slot ───
  test('renders without slot content', () => {
    const wrapper = mount(Table);
    expect(wrapper.classes()).toContain('px-table');
    expect(wrapper.find('table').exists()).toBe(false);
  });

  // ─── Export ───
  test('withInstall export', () => {
    expect(PxTable).toBeDefined();
    expect(PxTable.install).toBeDefined();
    expect(typeof PxTable.install).toBe('function');
  });
});
