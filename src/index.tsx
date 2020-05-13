/* eslint-disable no-unused-vars */
import * as React from 'react'
import { useRef, useEffect, useState } from 'react'
import DatePicker, { DatePickerOptions } from 'tui-date-picker'
import 'tui-date-picker/dist/tui-date-picker.css'
import 'tui-time-picker/dist/tui-time-picker.css'

interface Props extends DatePickerOptions {
  date: Date
  format: string
  onChange: Function
  style: React.CSSProperties
}

export const TuiDatePicker = (props: Props) => {
  const {
    date,
    format,
    showAlways,
    timePicker,
    onChange,
    style,
    language
  } = props
  const tuiWrapperRef = useRef(null)
  const tuiInputRef = useRef(null)
  const [tui, setTui] = useState<DatePicker>()
  useEffect(() => {
    if (tui === undefined) {
      setTui(
        new DatePicker(tuiWrapperRef.current || '#wrapper', {
          date: date,
          input: {
            element: tuiInputRef.current || '#datepicker-input',
            format: format || 'yyyy-MM-dd'
          },
          showAlways: showAlways || false,
          timePicker: timePicker || false,
          language: language
        })
      )
    } else {
      tui.on('change', () =>
        typeof onChange === 'function' ? onChange(tui.getDate()) : undefined
      )
    }
    return () => {
      if (tui !== undefined) {
        tui.destroy()
      }
    }
  })
  return (
    <div style={style}>
      <div className='tui-datepicker-input tui-datetime-input tui-has-focus'>
        <input
          type='text'
          ref={tuiInputRef}
          id='datepicker-input'
          aria-label='Date-Time'
        />
        <span className='tui-ico-date' />
      </div>
      <div id='wrapper' ref={tuiWrapperRef} />
    </div>
  )
}
