import React from 'react'

import { ExampleComponent } from 'tui.date-picker-react'
import 'tui.date-picker-react/dist/index.css'

const App = () => {
  return <ExampleComponent date={new Date()} format='yyyy/MM/dd HH:mm' timePicker={true} />
}

export default App
