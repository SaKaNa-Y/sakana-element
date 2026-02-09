import { each } from 'lodash-es';
import { describe, expect, it } from 'vitest';
import {
  addUnit,
  clearPixelIconRegistry,
  debugWarn,
  getIconNameMap,
  getPixelIcon,
  getRegisteredIconNames,
  hasPixelIcon,
  RenderVnode,
  rAF,
  registerPixelIcon,
  registerPixelIcons,
  resolveIconName,
  throwError,
  typeIconMap,
  withInstall,
  withInstallFunction,
} from '..';

describe('utils/index', () => {
  //it应该做某事，test做某事应该是什么结果
  //被定义时触发提示
  it('debugWarn should be exported', () => {
    expect(debugWarn).toBeDefined();
  });
  it('throwError should be exported', () => {
    expect(throwError).toBeDefined();
  });
  it('withInstall should be exported', () => {
    expect(withInstall).toBeDefined();
  });
  it('typeIconMap should be worked', () => {
    expect(typeIconMap).toBeDefined();
    each(
      [
        ['info', 'info-box'],
        ['success', 'check'],
        ['warning', 'warning-box'],
        ['danger', 'close-box'],
        ['error', 'close-box'],
      ],
      ([type, icon]) => {
        expect(typeIconMap.get(type)).toBe(icon);
      },
    );
  });
  it('withInstallFunction should be exported', () => {
    expect(withInstallFunction).toBeDefined();
  });
  it('addUnit should be exported', () => {
    expect(addUnit).toBeDefined();
  });
  it('rAF should be exported', () => {
    expect(rAF).toBeDefined();
  });
  it('RenderVnode should be exported', () => {
    expect(RenderVnode).toBeDefined();
  });
  it('registerPixelIcon should be exported', () => {
    expect(registerPixelIcon).toBeDefined();
  });
  it('registerPixelIcons should be exported', () => {
    expect(registerPixelIcons).toBeDefined();
  });
  it('getPixelIcon should be exported', () => {
    expect(getPixelIcon).toBeDefined();
  });
  it('hasPixelIcon should be exported', () => {
    expect(hasPixelIcon).toBeDefined();
  });
  it('getRegisteredIconNames should be exported', () => {
    expect(getRegisteredIconNames).toBeDefined();
  });
  it('clearPixelIconRegistry should be exported', () => {
    expect(clearPixelIconRegistry).toBeDefined();
  });
  it('resolveIconName should be exported', () => {
    expect(resolveIconName).toBeDefined();
  });
  it('getIconNameMap should be exported', () => {
    expect(getIconNameMap).toBeDefined();
  });
});
