# tui.date-picker-react

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/tui.date-picker-react.svg)](https://www.npmjs.com/package/tui.date-picker-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save tui.date-picker-react
```

## Usage

```tsx
import React, { Component } from 'react'

import TuiDatePicker from 'tui.date-picker-react'

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

## License

MIT © [100milliongold](https://github.com/100milliongold)
