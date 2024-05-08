import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AlgsTypes from '../AlgsTypes.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(AlgsTypes, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
