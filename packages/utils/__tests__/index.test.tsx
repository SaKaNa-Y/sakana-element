import { describe, it, expect } from 'vitest'
import { debugWarn, throwError, withInstall, typeIconMap } from '..'
import { each } from 'lodash-es'

describe('utils/index', () => {
  //it应该做某事，test做某事应该是什么结果
  //被定义时触发提示
  it('debugWarn should be exported', () => {
    expect(debugWarn).toBeDefined()
  })
  it('throwError should be exported', () => {
    expect(throwError).toBeDefined()
  })
  it('withInstall should be exported', () => {
    expect(withInstall).toBeDefined()
  })
  it('typeIconMap should be worked', () => {
    expect(typeIconMap).toBeDefined()
    each(
      [
        ['info', 'info-box'],
        ['success', 'check'],
        ['warning', 'warning-box'],
        ['danger', 'close-box'],
        ['error', 'close-box']
      ],
      ([type, icon]) => {
        expect(typeIconMap.get(type)).toBe(icon)
      }
    )
  })
})
