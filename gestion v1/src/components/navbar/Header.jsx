import React from 'react'
import './header.css';
import clsx from 'clsx';
// import {Nav,Navbar,NavDropdown} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

//import { Avatar } from '@material-ui/core';
import { deepOrange, blue, green } from '@material-ui/core/colors';

import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import MailIcon from '@material-ui/icons/Mail';
import { Badge, CssBaseline, useTheme } from '@material-ui/core';
import { FilterNone } from '@material-ui/icons';

// Style for content 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  
  title: {
    flexGrow: 1,
    color: theme.palette.getContrastText(blue[500]),
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    margin: theme.spacing(1),
  },
}));

const Header = () =>  {
 
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const classes = useStyles();
        return (
          
    <div>
     <CssBaseline />
      {/* <AppBar 
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton 
          edge="start" 
          aria-label="open drawer"
          className={clsx(classes.menuButton, open && classes.hide)} 
           color="inherit" 
           onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" className={classes.title} noWrap>
            News
          </Typography>
          
          
          <Button color="inherit"><Badge badgeContent={25} color="error"><NotificationsIcon color="inherit"/></Badge></Button>
          <Button color="inherit"><Badge badgeContent={4} color="secondary"><ChatIcon color="inherit" /></Badge></Button>
          <Button color="inherit"><Badge badgeContent={10} color="secondary"><MailIcon color="inherit" /></Badge></Button>
        </Toolbar>
      </AppBar> */}
           <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
           
        )
    }


export default Header





