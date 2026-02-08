import type { Plugin } from 'vue';
import { describe, it, expect } from 'vitest';
import {
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
  PxLoading,
  PxMessageBox,
} from '..';
import { get, map } from 'lodash-es';

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
  it.each(map(comps, (c) => [get(c, 'name') ?? '', c]))(
    '%s should be exported',
    (_, component) => {
      expect(component).toBeDefined();
      expect(component.install).toBeDefined();
    }
  );

  it('PxLoading should be exported with install', () => {
    expect(PxLoading).toBeDefined();
    expect(PxLoading.install).toBeDefined();
  });

  it('PxMessageBox should be exported', () => {
    expect(PxMessageBox).toBeDefined();
    expect(PxMessageBox.install).toBeDefined();
  });
});
