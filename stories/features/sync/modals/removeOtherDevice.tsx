/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Components
import Button from '../../../../src/components/buttonsIndicators/button'
import Modal from '../../../../src/components/popupModals/modal'

// Feature-specific components
import {
  Paragraph,
  ModalHeader,
  ModalTitle,
  ModalContent,
  TwoColumnButtonGrid,
  OneColumnButtonGrid
} from '../../../../src/features/sync'

// Utils
import { getLocale } from '../page/fakeLocale'

interface Props {
  otherDeviceName: string
  onClose: () => void
}

export default class RemoveMainDeviceModal extends React.PureComponent<Props, {}> {
  render () {
    const { onClose, otherDeviceName } = this.props
    return (
      <Modal id='removeMainDeviceModal' onClose={onClose} size='small'>
        <ModalHeader>
          <ModalTitle level={1}>{getLocale('remove')} “{otherDeviceName}” {getLocale('thisSyncChain')}</ModalTitle>
        </ModalHeader>
        <ModalContent>
        <Paragraph>{getLocale('otherDeviceRemovalDescription')}</Paragraph>
        </ModalContent>
        <TwoColumnButtonGrid>
          <OneColumnButtonGrid>
            <Button
              level='secondary'
              type='subtle'
              size='medium'
              onClick={onClose}
              text={getLocale('cancel')}
            />
          </OneColumnButtonGrid>
          <Button
            level='primary'
            type='warn'
            size='medium'
            onClick={onClose}
            text={getLocale('remove')}
          />
        </TwoColumnButtonGrid>
      </Modal>
    )
  }
}
