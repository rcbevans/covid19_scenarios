import React, { ReactNode } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'

export interface ExpandedContentProps {
  isOpen: boolean
  renderHeaderContent: () => string | React.ReactNode
  renderContent: () => ReactNode
  toggle: () => void
}
export default function ExpandedContent({ isOpen, renderHeaderContent, renderContent, toggle }: ExpandedContentProps) {
  return (
    <Modal centered size="xl" isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{renderHeaderContent()}</ModalHeader>
      <ModalBody>{renderContent()}</ModalBody>
    </Modal>
  )
}
