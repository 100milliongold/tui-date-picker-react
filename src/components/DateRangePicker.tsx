import React, { useRef, useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import DatePicker, { DateRangePicker } from 'tui-date-picker'
import 'tui-date-picker/dist/tui-date-picker.css'
import 'tui-time-picker/dist/tui-time-picker.css'
const TuiDateRangePicker = (props: TuiDateRangePickerProps) => {
  const { today, tomorrow, to, style, onChange } = props
  const [rangePicker, setRangePicker] = useState<DateRangePicker>()
  const startPickerContainerRef = useRef(null)
  const startPickerInputRef = useRef(null)
  const endPickerContainerRef = useRef(null)
  const endPickerInputRef = useRef(null)

  useEffect(() => {
    if (rangePicker === undefined) {
      setRangePicker(
        DatePicker.createRangePicker({
          ...props,
          startpicker: {
            date: today || new Date(),
            input: startPickerInputRef.current || '#startpicker-input',
            container:
              startPickerContainerRef.current || '#startpicker-container'
          },
          endpicker: {
            date: tomorrow || new Date(),
            input: endPickerInputRef.current || '#endpicker-input',
            container: endPickerContainerRef.current || '#endpicker-container'
          }
        })
      )
    } else {
      rangePicker.on('change:start', () =>
        typeof onChange === 'function'
          ? onChange([rangePicker.getStartDate(), rangePicker.getEndDate()])
          : undefined
      )
      rangePicker.on('change:end', () =>
        typeof onChange === 'function'
          ? onChange([rangePicker.getStartDate(), rangePicker.getEndDate()])
          : undefined
      )
    }

    return () => {
      if (rangePicker !== undefined) {
        rangePicker.destroy()
      }
    }
  })

  return (
    <div style={style}>
      <div className='tui-datepicker-input tui-datetime-input tui-has-focus'>
        <input
          id='startpicker-input'
          type='text'
          aria-label='Date'
          ref={startPickerInputRef}
        />
        <span className='tui-ico-date' />
        <div id='startpicker-container' ref={startPickerContainerRef} />
      </div>
      {to || <span>to</span>}
      <div className='tui-datepicker-input tui-datetime-input tui-has-focus'>
        <input
          id='endpicker-input'
          type='text'
          aria-label='Date'
          ref={endPickerInputRef}
        />
        <span className='tui-ico-date' />
        <div id='endpicker-container' ref={endPickerContainerRef} />
      </div>
    </div>
  )
}

export default TuiDateRangePicker
