import React, { useMemo, useState } from 'react'

import { nanoid } from 'nanoid'
import styles from './Checkbox.module.scss'

interface Props {
  label: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  /**
   * If provided, the `checked` state will be managed by the parent component.
   */
  checked?: boolean
  /**
   * Only used in uncontrolled mode.
   * @default false
   */
  defaultChecked?: boolean
}

const Checkbox: React.ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { label, onChange, checked, defaultChecked = false, ...props },
  ref,
) => {
  const id = useMemo(() => nanoid(), [])
  const [uncontrolledChecked, setUncontrolledChecked] = useState(defaultChecked)

  const isControlled = checked !== undefined

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setUncontrolledChecked(e.target.checked)
    }

    onChange?.(e)
  }

  return (
    <div className={styles.container}>
      <input
        ref={ref}
        id={id}
        type="checkbox"
        checked={isControlled ? checked : uncontrolledChecked}
        onChange={handleChange}
        className={styles.input}
        {...props}
      />
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  )
}

export default React.forwardRef(Checkbox)
