import React, { type ReactNode } from 'react'
import {
  Modal,
  type ModalProps,
  Pressable,
  type GestureResponderEvent,
} from 'react-native'

import { styles } from './styles'

export interface MyModalProps extends ModalProps {
  closeModal: () => void
  open: boolean
  children: ReactNode
}

export function MyModal({ open, closeModal, children }: MyModalProps) {
  const handleClick = (event: GestureResponderEvent) => {
    if (event.target === event.currentTarget) {
      closeModal()
    }
  }

  return (
    <Modal visible={open} transparent>
      <Pressable onPress={handleClick} style={styles.container}>
        {children}
      </Pressable>
    </Modal>
  )
}
