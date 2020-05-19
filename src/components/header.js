import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
}));

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className= 'imageWidth'>
      <div className={'tabWidth paddingBottom '+ (classes.root)}>
        <div className={classes.demo1}>
          <div className="hpv2_logo">
            <a href="https://www.cuddlynest.com/">
              <img id="logo-image1" src="https://www.cuddlynest.com/images/logo/cn_logo_hpv2_clor_en.png?v=4" alt="Logo"/>
            </a>
          </div>
          <AntTabs value={value} onChange={handleChange} aria-label="ant example">
            <AntTab label="Hotels" />
            <AntTab label="Vacation rentals" />
          </AntTabs>
        </div>
      </div>
      <div className='loginMenu'>
        <div className="hpv2_logo">
          <div>{'USD'}</div>
        </div>
        <div className="hpv2_logo">
          <div>{'Log In'}</div>
        </div>
        <div className="hpv2_logo">
          <div>{'Help'}</div>
        </div>
        <div className="hpv2_logo">
          <div>{'List your property'}</div>
        </div>
      </div>
    </div>
  );
}