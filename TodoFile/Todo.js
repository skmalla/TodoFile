import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import "./Todo.css";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Scroll from "./ScrollToTop";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: 0,
    padding: "10px",
  },
}));

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Nunito",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    button: {
      textTransform: "none",
      border: 0,
    },
  },
});

const Todo = (props) => {
  const processes = [
    { processName: "Regulator", processForm: "Regulator Process Form" },
    {
      processName: "Financial Institution",
      processForm: "Financial Institution Process Form",
    },
    {
      processName: "Document Listing",
      processForm: "Document Listing Process Form",
    },
    {
      processName: "Internal Process",
      processForm: "Internal Process Process Form",
    },
    {
      processName: "Outsourced Process",
      processForm: "Outsourced Process Process Form",
    },
    { processName: "Products", processForm: "Products Process Form" },
    {
      processName: "Business Units",
      processForm: "Business Units Process Form",
    },
  ];

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function getHCComponents() {
    return (
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'
            variant='scrollable'
            scrollButtons='auto'
            aria-label='scrollable auto tabs example'
            TabIndicatorProps={{
              style: {
                background: "#30c7ed",
              },
            }}
          >
            {processes.map((row, index) => (
              <Tab
                label={row.processName}
                key={row.processName}
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
          {processes.map((row, index) => (
            <TabPanel value={value} index={index} key={row.processName}>
              {/* Tab Data comes over here {props.header} and {row.processName} */}
              <Scroll>
                <form
                  method='post'
                  style={{ width: "100%" }}
                  name='userRegistrationForm'
                  //onSubmit={this.submituserRegistrationForm}
                >
                  <div className='row1'>
                    <div className='col-12'>
                      <div className='form-group'>
                        <label>
                          Code <b>*</b>
                        </label>
                        <input type='text' className='form-control mandatory' />
                      </div>
                      <div className='form-group'>
                        <label>Country</label>
                        <select className='form-control list1'>
                          <option>Select</option>
                          <option>India</option>
                          <option>jordan</option>
                          <option>UK</option>
                        </select>
                      </div>
                      <div className='form-group'>
                        <label>View/Upload Documents</label>
                        <input type='file' className='form-control ' />
                      </div>
                      <div className='form-group'>
                        <label>View/Upload Documents</label>
                        <input type='file' className='form-control ' />
                      </div>
                      <div className='form-group'>
                        <label>View/Upload Documents</label>
                        <input type='file' className='form-control ' />
                      </div>
                      <div className='form-group'>
                        <label>View/Upload Documents</label>
                        <input type='file' className='form-control ' />
                      </div>
                      <div className='form-group'>
                        <label>View/Upload Documents</label>
                        <input type='file' className='form-control ' />
                      </div>
                      <div className='form-group'>
                        <label>View/Upload Documents</label>
                        <input type='file' className='form-control ' />
                      </div>
                      <div className='form-group'>
                        <label>View/Upload Documents</label>
                        <input type='file' className='form-control ' />
                      </div>
                      <div className='form-group'>
                        <label>View/Upload Documents</label>
                        <input type='file' className='form-control ' />
                      </div>
                      <div className='form-group'>
                        <label>View/Upload Documents</label>
                        <input type='file' className='form-control ' />
                      </div>
                      <div className='form-group'>
                        <label>View/Upload Documents</label>
                        <input type='file' className='form-control ' />
                      </div>

                      <div className='form-group'>
                        <label>Country Risk Rating</label>
                        <select className='form-control'>
                          <option>Select</option>
                          <option>Good</option>
                          <option>Average</option>
                          <option>Low</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
              </Scroll>
            </TabPanel>
          ))}
        </ThemeProvider>
      </div>
    );
  }

  return (
    <div className='outer-tabs'>
      <span className='panel-heading'>{props.header}</span>
      <div className='tabs-page'>
        <div>{getHCComponents()}</div>
      </div>
    </div>
  );
};

export default Todo;
