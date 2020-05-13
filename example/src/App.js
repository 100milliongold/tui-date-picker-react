import React from 'react'

import { TuiDatePicker } from 'tui.date-picker-react'
// import 'tui.date-picker-react/dist/index.css'

const App = () => {
  return (
    <TuiDatePicker
      date={new Date()}
      format='yyyy/MM/dd HH:mm'
      timePicker={{
        layoutType: 'tab',
        inputType: 'spinbox'
      }}
      onChange={e => console.log(e)}
      language="ko"
    />
  )
}

export default App
