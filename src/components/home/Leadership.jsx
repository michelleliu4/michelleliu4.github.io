// https://mui.com/material-ui/react-tabs/
import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TabContainer } from 'react-bootstrap';
import { Jumbotron } from './migration';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Leadership({ heading, leadershipList }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Jumbotron fluid id="leadership" className="bg-white m-0">
        <h2 className="display-4 mb-5 text-center">
          {heading}
        </h2>
        <TabContainer>
          <Box
            sx={{ width:'80%', height:'200%', alignItems:'center', justifyContent:'center', margin:'auto', flexGrow: 1, bgcolor: 'background.paper', display: 'flex', flexDirection: 'row'}} //orig height: 224
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              scrollbuttons="auto"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs"
              sx={{ borderRight: 1, borderColor: 'divider' }}
            >
            {
              leadershipList.map((data, index) => {
                return <Tab label={data.company} {...a11yProps(index)} />
              })
            }
            </Tabs>
            {
              leadershipList.map((data, index) => {
                return <TabPanel value={value} index={index}>
                    <div style={{fontSize: '20px', marginBottom: '2px'}}>
                      <strong>{data.company}</strong> - {data.role}
                    </div>
                    <div style={{fontSize: '14px', marginBottom: '13px'}}>
                      {data.date}
                    </div>
                    <div style={{}}>
                      {data.description}
                    </div>
                </TabPanel>
              })
            }
          </Box>
        </TabContainer>
    </Jumbotron>
  );
}