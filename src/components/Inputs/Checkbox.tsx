import React, { useState } from 'react'

import { nanoid } from 'nanoid'
import { makeStyles } from '@material-ui/core'
import generateTransitions from '../../functions/generateTransitions'

interface Props {
  label: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  /**
   * If provided, the `checked` state will be managed by the parent component.
   */
  checked?: boolean
}

const SIZE = 24
const BORDER_SIZE = 2
const INNER_PADDING = 4
const TICK_WEIGHT = 4

const useStyles = makeStyles({
  checkbox: {
    verticalAlign: 'middle',
    position: 'relative',
    cursor: 'pointer',
    zIndex: 2,
    visibility: 'hidden',
    height: SIZE,
    width: SIZE,
    marginRight: 8,
    '&::before, &::after': {
      visibility: 'visible',
    },
    '&::before': {
      content: '""',
      display: 'inline-block',
      border: `${BORDER_SIZE}px solid currentColor`,
      height: SIZE,
      width: SIZE,
    },
    '&::after': {
      content: '""',
      display: 'inline-block',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, calc(-50% - 1px)) rotate(45deg)',
      transformOrigin: 'center',
      width: (SIZE - BORDER_SIZE - INNER_PADDING - TICK_WEIGHT) * (3 / 5),
      height: SIZE - BORDER_SIZE - INNER_PADDING - TICK_WEIGHT,
      borderRight: `${TICK_WEIGHT}px solid currentColor`,
      borderBottom: `${TICK_WEIGHT}px solid currentColor`,
      opacity: 0,
      ...generateTransitions('opacity', 'short'),
    },
    '&:checked::after': {
      opacity: 1,
    },
  },
  label: {
    cursor: 'pointer',
    verticalAlign: 'middle',
  },
})

const Checkbox: React.FC<Props> = ({ label, onChange, checked }) => {
  const [id] = useState(() => nanoid())
  const classes = useStyles()

  return (
    <>
      <input
        className={classes.checkbox}
        id={id}
        checked={typeof checked !== 'undefined' ? checked : undefined}
        onChange={onChange}
        type="checkbox"
      />
      <label className={classes.label} htmlFor={id}>
        {label}
      </label>
    </>
  )
}

export default React.memo(Checkbox)
