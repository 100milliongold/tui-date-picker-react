import * as React from 'react'
import { useRef, useEffect, useState } from 'react'
import DatePicker from 'tui-date-picker'
import 'tui-date-picker/dist/tui-date-picker.css'
import 'tui-time-picker/dist/tui-time-picker.css'

export const TuiDatePicker = (props: TuiDatePickerProps) => {
  const {
    date,
    format,
    showAlways,
    timePicker,
    style,
    language,
    type,
    onChange,
    onClose,
    onDraw,
    onOpen
  } = props
  const tuiWrapperRef = useRef(null)
  const tuiInputRef = useRef(null)
  const [tui, setTui] = useState<DatePicker>()
  useEffect(() => {
    if (tui === undefined) {
      setTui(
        new DatePicker(tuiWrapperRef.current || '#wrapper', {
          ...props,
          date: date,
          input: {
            element: tuiInputRef.current || '#datepicker-input',
            format: format || 'yyyy-MM-dd'
          },
          showAlways: showAlways || false,
          timePicker: timePicker || false,
          language: language,
          type: type || 'date'
        })
      )
    } else {
      tui.on('change', () =>
        typeof onChange === 'function' ? onChange(tui.getDate()) : undefined
      )
      tui.on('close', () =>
        typeof onClose === 'function' ? onClose() : undefined
      )
      tui.on('draw', (event: HTMLElement) =>
        typeof onDraw === 'function' ? onDraw(event) : undefined
      )
      tui.on('open', () =>
        typeof onOpen === 'function' ? onOpen() : undefined
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

export default TuiDatePicker
