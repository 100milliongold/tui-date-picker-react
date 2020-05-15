# TOAST UI React Component : Date Picker

> Made with create-react-library for [TOAST UI Component : Date Picker](https://github.com/nhn/tui.date-picker#readme)

[![NPM](https://img.shields.io/npm/v/tui-date-picker-react.svg)](https://www.npmjs.com/package/tui-date-picker-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



## Install

```bash
npm install --save tui-date-picker-react
```

## Usage

### Date Picker

```tsx
import React, { Component } from 'react'
import { TuiDateRangePicker } from 'tui-date-picker-react'

class Example extends Component {
  render() {
    return <TuiDatePicker
      date={new Date()}
      format='yyyy/MM/dd HH:mm'
      timePicker={{
        layoutType: 'tab',
        inputType: 'spinbox'
      }}
      onChange={e => console.log(e)}
      language="ko"
    />
  }
}
```

### Date Range Picker

```tsx
import React, { Component } from 'react'
import { TuiDateRangePicker } from 'tui-date-picker-react'

const App = () => {
  return (
    <TuiDateRangePicker
      onChange={([startDate, endDate]) =>
        console.log(startDate, endDate)}
      language='ko'
      format='yyyy/MM/dd HH:mm'
      timePicker={{
        layoutType: 'tab',
        inputType: 'spinbox'
      }}
    />
  )
}
```

## License

MIT © [100milliongold](https://github.com/100milliongold)
