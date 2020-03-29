import React from 'react'

import FormHelpButton from './FormHelpButton'

export interface HelpLabelProps {
  identifier: string
  label: string | React.ReactNode
  help?: string | React.ReactNode
}

export default function HelpLabel({ identifier, label, help }: HelpLabelProps) {
  return (
    <div className="d-flex flex-fill align-items-center">
      <FormHelpButton identifier={`${identifier}_help`} label={label} help={help} />
      <div className="ml-2 my-auto text-truncate flex-fill">{label}</div>
    </div>
  )
}
