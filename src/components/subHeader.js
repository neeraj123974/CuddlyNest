import React from 'react';
import { makeStyles  } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import DatetimeRangePicker from 'react-datetime-range-picker';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export default function CustomizedInputBase() {
  const classes = useStyles();
   const [currency] = React.useState('EUR');
   const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Paper component="form" className={classes.root}>
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="Search Google Maps"
            inputProps={{ 'aria-label': 'Search your destination here...' }}
          />
        </Paper>
        }
        label=""
      />
      <FormControlLabel
        control={
          <DatetimeRangePicker dateFormat="DD-MMM-YYYY" closeOnSelect = {true} timeFormat={false}/>
        }
        label=""
      />
      <FormControlLabel
        control={
          <TextField
          //label="Size"
          id="outlined-size-small"
          defaultValue="10 guests"
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: <InputAdornment position="start">+</InputAdornment>,
            endAdornment: <InputAdornment position="end">-</InputAdornment>,
          }}
        />
        }
        label=""
      />
       <FormControlLabel
        control={
          <TextField
          //label="Size"
          id="outlined-size-small"
          defaultValue="10 rooms"
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: <InputAdornment position="start">+</InputAdornment>,
            endAdornment: <InputAdornment position="end">-</InputAdornment>,
          }}
        />
        }
        label=""
      />
      <FormControlLabel
        control={
         <TextField
          id="outlined-select-currency-native"
          label="Filter"
          size="small"
          select
          value={currency}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        }
        label=""
      />
      
    </FormGroup>
  );
}