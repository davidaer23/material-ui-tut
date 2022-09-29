import React from 'react'
import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import { Typography,FormControl, Button, ButtonGroup, TextField ,Container, makeStyles ,
          FormLabel, FormControlLabel, Radio, RadioGroup} from '@material-ui/core'
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'violet',
    '&:hover': {
      background: 'blue'
    },
  },
  title: {
    textDecoration: 'underline',
    marginBottom: 20,
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})


export default function Create() {
  const classes = useStyles()
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('money')

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if (title === '') {
      setTitleError(true)
    }
    if (details === '') {
      setDetailsError(true)
    }
    if (title && details) {
      console.log(title, details, category)
    } 
    if (title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ title, details, category })
      }).then(() => history.push('/'))
    } 
  }

  return (
    <Container size="sm">
      {/* <Typography 
      className={classes.title}
      variant='h6'
      component='h2'
      color='textSecondary'
      gutterBottom
      >
        Create a New Note
      </Typography>

      <Button 
      className={classes.btn}
      onClick={()=>console.log('Clicked')} 
      type='submit' 
      color='secondary' 
      variant='contained'   
      endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>

      <Button>
        Ok
      </Button> */}

      {/* <ButtonGroup variant='contained' color='secondary'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}

      {/* Icons */}

      <br />
      {/* <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon color="secondary" fontSize="large" />
      <AcUnitOutlinedIcon color="secondary" fontSize="small" />
      <AcUnitOutlinedIcon color="action" fontSize="small" />
      <AcUnitOutlinedIcon color="error" fontSize="small" />
      <AcUnitOutlinedIcon color="disabled" fontSize="small" /> */}

       {/* <Radio value="hello" />
        <Radio value="goodbye" /> */}

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label="Note Title" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
          error={titleError}
        />
        <TextField className={classes.field}
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />

        {/* <Radio value="hello" />
        <Radio value="goodbye" /> */}

        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit" 
          color="secondary" 
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}>
          Submit
        </Button>
      </form>
      
    </Container>
  )
}
