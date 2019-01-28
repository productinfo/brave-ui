/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import RewardsButton from './index'
import { TestThemeProvider } from '../../../components/style/themes'

describe('TipButton tests', () => {
  const baseComponent = (props?: object) => <TestThemeProvider><RewardsButton id='tipbutton' {...props} /></TestThemeProvider>

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = baseComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(baseComponent())
      const assertion = wrapper.find('#tipbutton').length
      expect(assertion).toBe(1)
    })
  })
})
