/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

interface SvgrComponent
  extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const svgUrl: string
  const svgComponent: SvgrComponent
  export default svgUrl
  export { svgComponent as ReactComponent }
}

/**
 * tui.date-picker props
 */
interface TuiDatePickerProps extends DatePickerOptions {
  date: Date
  format: string
  style: React.CSSProperties
  timePicker?: TimePickerOption | boolean = false
  showAlways: boolean = false
  language: string = 'en'
  type: 'date' | 'month' | 'year' = 'date'
  onClose: Function
  onDraw: Function
  onOpen: Function
  onChange: Function
}

interface TuiDateRangePickerProps extends DateRangePickerOptions {
  today: Date | undefined = new Date()
  tomorrow: Date | undefined = new Date()
  to: React.Component
  language: string = 'en'
  style: React.CSSProperties
  onChange: Function
}

interface TimePickerOption {
  layoutType: 'tab' | undefined
  inputType: 'spinbox' | 'selectbox'
  language: string | 'en' | 'ko' = 'en'
  initialHour: number = 0
  initialMinute: number = 0
  hourStep: number = 1
  minuteStep: number = 1
  meridiemPosition: 'left' | 'right' = 'right'
  format: string = 'h:m'
  showMeridiem: boolean = true
  disabledHours: Array<number> = []
  usageStatistics: boolean = true
}
