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
] as Plugin[]; //通过插件机制，可以一次性注册所有组件

describe('components/index', () => {
  it.each(map(comps, (c) => [get(c, 'name') ?? '', c]))(
    '%s should be exported',
    (_, component) => {
      expect(component).toBeDefined();
      expect(component.install).toBeDefined();
    }
  );
});
