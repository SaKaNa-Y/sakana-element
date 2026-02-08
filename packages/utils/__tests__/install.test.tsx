import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, createApp } from 'vue'

import { withInstall, withInstallFunction } from '../install'

const AppComp = defineComponent({
  setup() {
    return () => <div>App</div>
  }
})

const compA = withInstall(
  defineComponent({
    name: 'CompA',
    setup() {
      return () => <div>CompA</div>
    }
  })
)

const compB = withInstall(
  defineComponent({
    name: 'CompB',
    setup() {
      return () => <div>CompB</div>
    }
  })
)

describe('install', () => {
  it('withInstall should be worked', () => {
    const wrapper = mount(() => <div id="app"></div>)
    const app = createApp(AppComp)

    app.use(compA).mount(wrapper.element)

    expect(compA.install).toBeDefined()
    expect(compB.install).toBeDefined()
    expect(app._context.components['CompA']).toBeTruthy()
    expect(app._context.components['CompB']).toBeFalsy()
  })
})

describe('withInstallFunction', () => {
  it('should add an install method to the function', () => {
    const myFn = () => 'hello'
    const wrapped = withInstallFunction(myFn, '$myFn')
    expect(wrapped.install).toBeDefined()
  })

  it('install should register function on app.config.globalProperties', () => {
    const myFn = () => 'hello'
    const wrapped = withInstallFunction(myFn, '$myFn')

    const app = createApp(AppComp)
    app.use(wrapped)

    expect(app.config.globalProperties.$myFn).toBe(myFn)
  })
})
