import React from 'react'

import { useMemo, useState } from 'react'
import { nanoid } from 'nanoid'
import SearchIcon from 'mdi-react/SearchIcon'
import { makeStyles } from '@material-ui/styles'
import generateTransitions from '@functions/generateTransitions'
import clsx from 'clsx'
import Colors from '@data/colors.json'

interface IProps {
  type?: 'text' | 'email' | 'password' | 'search'
  className?: string
  defaultValue?: string
  label: string
  onInput: (val: string) => void
  placeholder?: string
  helpText?: React.ReactChild
}

const useStyles = makeStyles({
  inputLabel: {
    '& > span': {
      display: 'block',
    },
  },
  inputWrapper: {
    marginTop: 8,
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    left: 8,
    top: 8,
  },
  input: {
    padding: '6px 8px',

    '&[type="search"]': {
      paddingLeft: 36,
    },

    font: 'inherit',
    border: '2px solid black',

    width: '100%',

    '&:focus': {
      borderColor: Colors.primaryRed,
      outline: 'none',

      '& + $searchIcon': {
        color: Colors.primaryRed,
      },
    },

    '&::-webkit-search-cancel-button': {
      WebkitAppearance: 'none',
      height: 24,
      width: 24,
      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23777'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>")`,
      cursor: 'pointer',
    },
  },
  helpText: {
    marginTop: 4,
    marginBottom: 0,
  },
})

export default function TextBox({ label, onInput, type = 'text', className, defaultValue = '', placeholder, helpText }: IProps) {
  const [value, setValue] = useState(defaultValue)
  const id = useMemo(() => nanoid(), [])
  const helpTextId = useMemo(() => nanoid(), [])
  const classes = useStyles()

  return (
    <label htmlFor={id} className={clsx(classes.inputLabel, className)}>
      <span className="text-speak-up">{label}</span>

      <div className={classes.inputWrapper}>
        <input
          type={type}
          id={id}
          className={classes.input}
          onInput={e => {
            const v = (e.target as HTMLInputElement).value
            setValue(v)
            onInput(v)
          }}
          value={value}
          placeholder={placeholder}
          aria-describedby={helpText ? helpTextId : undefined}
        />
        {type === 'search' && <SearchIcon className={classes.searchIcon} />}
      </div>

      {helpText && (
        <p id={helpTextId} className={clsx('text-whisper', classes.helpText)}>
          {helpText}
        </p>
      )}
    </label>
  )
}
