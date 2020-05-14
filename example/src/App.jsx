import React from 'react'

import TuiDatePicker from 'tui-date-picker-react'
import {TuiDateRangePicker} from 'tui-date-picker-react'
import { Container, CssBaseline, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  }
}))

const App = () => {
  const classes = useStyles()

  return (
    <Container component='main' maxWidth='xl'>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          TOAST UI React Component : Date Picker
        </Typography>
        <div className={classes.paper}>
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
        </div>
        <div className={classes.paper}>
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
      </div>
    </Container>
  )
}

export default App
