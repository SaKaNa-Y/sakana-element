import { get, map } from 'lodash-es';
import { describe, expect, it } from 'vitest';
import type { Plugin } from 'vue';
import {
  PxAlert,
  PxButton,
  PxButtonGroup,
  PxCollapse,
  PxCollapseItem,
  PxConfigProvider,
  PxDropdown,
  PxDropdownItem,
  PxForm,
  PxFormItem,
  PxIcon,
  PxInput,
  PxLoading,
  PxMessageBox,
  PxOption,
  PxPopconfirm,
  PxSelect,
  PxSwitch,
  PxTooltip,
} from '..';

const comps = [
  PxAlert,
  PxButton,
  PxButtonGroup,
  PxCollapse,
  PxCollapseItem,
  PxIcon,
  PxTooltip,
  PxPopconfirm,
  PxDropdown,
  PxDropdownItem,
  PxConfigProvider,
  PxInput,
  PxSwitch,
  PxSelect,
  PxOption,
  PxForm,
  PxFormItem,
] as Plugin[];

describe('components/index', () => {
  it.each(map(comps, (c) => [get(c, 'name') ?? '', c]))('%s should be exported', (_, component) => {
    expect(component).toBeDefined();
    expect(component.install).toBeDefined();
  });

  it('PxLoading should be exported with install', () => {
    expect(PxLoading).toBeDefined();
    expect(PxLoading.install).toBeDefined();
  });

  it('PxMessageBox should be exported', () => {
    expect(PxMessageBox).toBeDefined();
    expect(PxMessageBox.install).toBeDefined();
  });
});
