import * as React from 'react'
import { useRef, useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import DatePicker, { DatePickerOptions } from 'tui-date-picker'
import 'tui-date-picker/dist/tui-date-picker.css'

interface Props extends DatePickerOptions {
  date: Date
  format: string
}

export const ExampleComponent = (props: Props) => {
  const { date, format, showAlways, timePicker } = props
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
          timePicker: timePicker || false
        })
      )
    }
    return () => {
      if (tui !== undefined) {
        tui.destroy()
      }
    }
  })
  return (
    <div>
      <div className='tui-datepicker-input tui-datetime-input tui-has-focus'>
        <input type='text' ref={tuiInputRef} id='datepicker-input' />
        <span className='tui-ico-date' />
      </div>
      <div id='wrapper' ref={tuiWrapperRef} />
    </div>
  )
}
