import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Contact from '../contactform/contact';
import './fournisseur.css'
import { Card } from 'react-bootstrap';


function TabPanel(props) {
  const { children, value, index, ...other } = props;
    
  return (
      
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Fournisseur() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const [state, setState] = React.useState({
  //   columns: [
  //     { title: 'Name', field: 'name' },
  //     { title: 'Surname', field: 'surname' },
  //     { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
  //     {
  //       title: 'Birth Place',
  //       field: 'birthCity',
  //       lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
  //     },
  //   ],
  //   data: [
  //     { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
  //     {
  //       name: 'Zerya Betül',
  //       surname: 'Baran',
  //       birthYear: 2017,
  //       birthCity: 34,
  //     },
  //   ],
  // });
   
  return (
  
   
    <div className=" fournisseur">
  <Card className="four-card">
      <Card.Body>
      <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"  variant="fullWidth">
          
              <Tab label="Item One" {...a11yProps(0)}  />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
              <Tab label="Item four" {...a11yProps(3)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <Contact />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item four
          </TabPanel>
        </div>
      </Card.Body>
</Card>
          
    </div>
    
    
  );
}