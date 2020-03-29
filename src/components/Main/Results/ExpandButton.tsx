import React from 'react'
import { Button } from 'reactstrap'
import { FaExpandArrowsAlt } from 'react-icons/fa'

import './ExpandButton.scss'

export interface ExpandButtonProps {
  className?: string
  disabled?: boolean
  onClick: () => void
}

export default function ExpandButton({ className, disabled, onClick }: ExpandButtonProps) {
  return (
    <Button
      className={`expandButton ${className}`}
      outline
      disabled={disabled}
      color="secondary"
      aria-label="Expand"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        onClick()
      }}
    >
      <FaExpandArrowsAlt />
    </Button>
  )
}
