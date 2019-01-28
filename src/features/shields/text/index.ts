/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from '../../../components/style/themes'
import palette from '../../../components/style/color/colorPalette'
import { setValueBasedOnSize } from '../../../helpers'

interface LabelProps {
  size: 'large' | 'medium' | 'small'
  children: React.ReactNode
}

export const Label = styled<LabelProps, 'label'>('label')`
  box-sizing: border-box;
  font-family: ${p => p.theme.fontFamily.heading};
  font-size: ${p => setValueBasedOnSize(p.size, '16px', '12px', '18px')};
  font-weight: ${p => setValueBasedOnSize(p.size, 'normal', '500', '500')};
  line-height: ${p => setValueBasedOnSize(p.size, '1', '18px', '27px')};
  color: ${p =>
    setValueBasedOnSize(
      p.size,
      palette.grey200,
      palette.grey300,
      palette.grey300
    )};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

interface HighlightProps {
  size?: 'large' | 'small'
  enabled: boolean
}

export const Highlight = styled<HighlightProps, 'em'>('em')`
  box-sizing: border-box;
  font-family: ${p => p.theme.fontFamily.heading};
  color: ${p => (p.enabled ? p.theme.color.primaryColor : palette.grey400)};
  font-size: ${p => (p.size === 'large' ? '22px' : 'inherit')};
  font-weight: 600;
  text-transform: uppercase;
  font-style: normal;
`

export const UnHighlight = styled<{}, 'span'>('span')`
  box-sizing: border-box;
  color: ${palette.grey500};
  font-weight: 300;
`

interface DescriptionProps {
  enabled: boolean
}

export const Description = styled<DescriptionProps, 'p'>('p')`
  box-sizing: border-box;
  color: ${p => (p.enabled ? palette.grey500 : palette.grey600)};
  font-size: ${p => (p.enabled ? '11px' : '12px')};
  font-family: ${p => p.theme.fontFamily.body};
  font-weight: normal;
  line-height: 18px;
  padding: 0;
  margin: ${p => (p.enabled ? '0 0 10px' : '0')};
  text-align: left;
`

export const ResourcesListAllowedLink = styled<{}, 'span'>('span')`
  box-sizing: border-box;
  font-size: 13px;
  color: ${palette.green500};
  vertical-align: middle;
  line-height: 1;
`

export const ResourcesListBlockedLink = styled(ResourcesListAllowedLink)`
  color: ${palette.red500};
`

export const Link = styled<{}, 'a'>('a')`
  box-sizing: border-box;
  color: ${palette.blue200};
  font-family: ${p => p.theme.fontFamily.heading};
  font-size: 13px;
  font-weight: normal;
  text-decoration: underline;
  cursor: pointer;
  line-height: 1;

  &:hover {
    color: ${palette.white};
  }
`

export const ResourcesListItem = styled<{}, 'span'>('span')`
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  margin: 0 10px;
  vertical-align: middle;
  line-height: 1.5;
`

interface ResourcesSwitchLabelProps {
  disabled?: boolean
}

export const ResourcesSwitchLabel = styled<ResourcesSwitchLabelProps, 'span'>(
  'span'
)`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  padding: 0 11px;
  user-select: none;
  pointer-events: ${p => (p.disabled ? 'none' : null)};
`

export const ResourcesStatusTitle = styled<{}, 'span'>('span')`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  padding: 0;
  font-size: 14px;
`

export const ResourcesListText = styled<{}, 'div'>('div')`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  line-height: 1;
  color: ${palette.grey600};
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  padding: 9px 25px;

  &:first-of-type {
    margin-top: 10px;
  }
`

interface ResourcesLabelScriptsProps {
  accent?: 'blocked' | 'allowed'
}

export const ResourcesSubTitle = styled<ResourcesLabelScriptsProps, 'span'>(
  'span'
)`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  padding: 0 5px;
  color: ${p => (p.accent === 'blocked' ? palette.red500 : palette.green500)};
`
