import React from 'react'
import DatePicker from './components/DatePicker'
import DateRangePicker from './components/DateRangePicker'

export const TuiDatePicker = (props: TuiDatePickerProps) => (
  <DatePicker {...props} />
)

export const TuiDateRangePicker = (props: TuiDateRangePickerProps) => (
  <DateRangePicker {...props} />
)

export default DatePicker
