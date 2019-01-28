/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from '../../../components/style/themes'

import { ComponentType } from 'react'
import {
  ShieldAlertIcon,
  OpenNewIcon,
  CaratDownIcon,
  CaratUpIcon,
  CloseStrokeIcon,
  CloseCircleIcon,
  CheckCircleIcon
} from '../../../components/icons'
import palette from '../../../components/style/color/colorPalette'

export const LinkIcon = styled(OpenNewIcon as ComponentType)`
  width: 24px;
  height: 24px;
  color: ${palette.blue200};
`

export const ShieldIcon = styled(ShieldAlertIcon as ComponentType)`
  width: 48px;
  height: 48px;
  color: ${palette.grey700};
`

export const ShowMoreIcon = styled(CaratDownIcon as ComponentType)`
  width: 16px;
  height: 16px;
  color: ${palette.blue200};
`

export const ShowLessIcon = styled(CaratUpIcon as ComponentType)`
  width: 16px;
  height: 16px;
  color: ${palette.blue200};
`

export const CloseIcon = styled(CloseStrokeIcon as ComponentType)`
  width: 16px;
  height: 16px;
  color: ${palette.blue200};
`

export const BlockedScriptsIcon = styled(CloseCircleIcon as ComponentType)`
  width: 16px;
  height: 16px;
  color: ${palette.red500};
`

export const AllowedScriptsIcon = styled(CheckCircleIcon as ComponentType)`
  width: 16px;
  height: 16px;
  color: ${palette.green500};
`
