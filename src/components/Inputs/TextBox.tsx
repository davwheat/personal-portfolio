import React from 'react'

import styles from './TextBox.module.scss'

interface TextBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: boolean
  errorMessage?: string
}

const TextBox: React.ForwardRefRenderFunction<HTMLInputElement, TextBoxProps> = ({ label, error, errorMessage, ...props }, ref) => {
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <input ref={ref} type="text" className={styles.input} {...props} />
      {error && errorMessage && <span style={{ color: 'red', fontSize: '0.875em' }}>{errorMessage}</span>}
    </div>
  )
}

export default React.forwardRef(TextBox)
