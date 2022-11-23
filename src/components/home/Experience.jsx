// https://mui.com/material-ui/react-tabs/
import * as React from 'react';
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
        <Box sx={{ p: 3 }}>
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

export default function Experience(experiences) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="section">
      <TabContainer>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {experiences.heading}
          </h2>
          <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: 'divider' }}
              centered
            >
            {
              experiences.data.map((data, index) => {
                return <Tab label={data.company} {...a11yProps(index)} />
              })
            }
            </Tabs>
            {
              experiences.data.map((data, index) => {
                return <TabPanel value={value} index={index}>
                    <div style={{fontSize: '20px', marginBottom: '3px'}}>
                      {data.role} <strong>@ {data.company}</strong>
                    </div>
                    <div style={{fontSize: '15px', marginBottom: '15px'}}>
                      {data.date}
                    </div>
                    <div style={{}}>
                      {data.description}
                    </div>
                </TabPanel>
              })
            }
          </Box>
        </Jumbotron>
      </TabContainer>
    </section>
  );
}