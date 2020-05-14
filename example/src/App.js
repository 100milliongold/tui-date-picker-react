import React from 'react'

import TuiDatePicker from 'tui.date-picker-react'
import {TuiDateRangePicker} from 'tui.date-picker-react'
// import 'tui.date-picker-react/dist/index.css'

const App = () => {
  return (
    <div>
      <TuiDatePicker
        date={new Date()}
        format='yyyy/MM/dd HH:mm'
        timePicker={{
          layoutType: 'tab',
          inputType: 'spinbox'
        }}
        onChange={(e) => console.log(e)}
        language='ko'
      />
      <TuiDateRangePicker
        onChangeEndDate={([startDate, endDate]) =>
          console.log(startDate, endDate)
        }
        onChangeStartDate={([startDate, endDate]) =>
          console.log(startDate, endDate)
        }
        language='ko'
        format='yyyy/MM/dd HH:mm'
        timePicker={{
          layoutType: 'tab',
          inputType: 'spinbox'
        }}
      />
    </div>
  )
}

export default App
