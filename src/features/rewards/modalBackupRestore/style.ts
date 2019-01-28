/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */
import { ComponentType } from 'react'
import styled from '../../../components/style/themes'
import Button, { Props as ButtonProps } from '../../../components/buttonsIndicators/button'

interface StyleProps {
  isError?: boolean
  error?: boolean
}

export const StyledContent = styled<{}, 'div'>('div')`
  font-size: 14px;
  font-family: Muli, sans-serif;
  letter-spacing: 0;
  font-weight: 200;
  line-height: 26px;
  margin-top: 40px;
`

export const StyledImport = styled<{}, 'label'>('label')`
  color: #4c54d2;
  cursor: pointer;
`

export const StyleButtonWrapper = styled<{}, 'div'>('div')`
  display: flex;
  margin-top: 20px;
  justify-content: center;
`

export const GroupedButton = styled(Button as ComponentType<ButtonProps>)`
  margin: 0 4px;

  @media (max-width: 410px) {
    min-width: 74px;
    font-size: 9px;
  }
  @media (max-width: 370px) {
    min-width: 65px;
    font-size: 9px;
  }
`

export const StyledDoneWrapper = styled<{}, 'div'>('div')`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`

export const StyledStatus = styled<StyleProps, 'div'>('div')`
  margin: ${p => p.isError ? 0 : -16}px 0 16px;
  border-radius: 6px;
  overflow: hidden;
`

export const StyledActionsWrapper = styled<{}, 'div'>('div')`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`

export const ActionButton = styled(Button as ComponentType<ButtonProps>)`
  margin: 0 8px;
`

export const StyledTitleWrapper = styled<{}, 'div'>('div')`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`

export const StyledTitle = styled<{}, 'span'>('span')`
  font-size: 22px;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 40px;
  font-family: ${p => p.theme.fontFamily.heading};
`

export const StyledSafe = styled<{}, 'span'>('span')`
  font-weight: 700;
  margin-right: 3px;
  color: ${p => p.theme.color.brandBatInteracting};
`

export const StyledTabWrapper = styled<{}, 'div'>('div')`
  margin: 0 auto;
  max-width: 400px;
`

export const StyledControlWrapper = styled<{}, 'div'>('div')`
  width: 100%;
  margin-bottom: 30px;
`

export const StyledText = styled<{}, 'p'>('p')`
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 0;
  line-height: 26px;
  font-family: Muli, sans-serif;
`

export const StyledTextWrapper = styled<{}, 'div'>('div')`
  margin-bottom: 25px;
`
