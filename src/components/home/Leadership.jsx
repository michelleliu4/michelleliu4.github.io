// https://mui.com/material-ui/react-tabs/
import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TabContainer } from "react-bootstrap";
import { Jumbotron } from "./migration";

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
      {value === index && <Box sx={{ p: 4 }}>{children}</Box>}
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
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Leadership({ heading, leadershipList }) {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Jumbotron fluid id="leadership" className="bg-white m-0">
      <h2 className="display-4 mb-5 text-center">{heading}</h2>
      <TabContainer>
        <Box
          sx={{
            width: { xs: "100%", md: "80%" }, // Wider on mobile
            height: "100%", // Fit content better
            alignItems: "flex-start", // align top instead of center
            justifyContent: "flex-start",
            margin: "auto",
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <Tabs
            orientation={isMobile ? "horizontal" : "vertical"}
            variant="scrollable"
            scrollbuttons="auto"
            value={value}
            onChange={handleChange}
            aria-label={isMobile ? "Horizontal tabs" : "Vertical tabs"}
            sx={
              isMobile
                ? { borderBottom: 1, borderColor: "divider", mb: 3 }
                : { borderRight: 1, borderColor: "divider", minWidth: 200 }
            }
          >
            {leadershipList.map((data, index) => {
              return (
                <Tab
                  key={`tab-${index}`}
                  label={data.company}
                  {...a11yProps(index)}
                  sx={
                    isMobile
                      ? { whiteSpace: "normal", wordWrap: "break-word" }
                      : { alignItems: "flex-start", textAlign: "left" }
                  }
                />
              );
            })}
          </Tabs>
          <Box sx={{ width: "100%" }}>
            {leadershipList.map((data, index) => {
              return (
                <TabPanel key={`panel-${index}`} value={value} index={index}>
                  <div style={{ fontSize: "20px", marginBottom: "2px" }}>
                    <strong>{data.company_full || data.company}</strong> -{" "}
                    {data.role}
                  </div>
                  <div style={{ fontSize: "14px", marginBottom: "13px" }}>
                    {data.date}
                  </div>
                  <div>{data.description}</div>
                </TabPanel>
              );
            })}
          </Box>
        </Box>
      </TabContainer>
    </Jumbotron>
  );
}
