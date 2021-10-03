import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRangeIcon from "@material-ui/icons/DateRange";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import SettingsIcon from "@material-ui/icons/Settings";
import "./AdminPanel.css";
import DashBoard from "./DashBoard/DashBoard";
import Bookings from "./Bookings/Bookings";
import ManageRooms from "./ManageRooms/ManageRooms";
import EditRoom from "./EditRoom/EditRoom";
import UploadRoom from "./UploadRooms/UploadRoom";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: "100%" }}
    >
      {value === index && <Box p={3}>{children}</Box>}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    display: "flex",
    minHeight: "100%",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: "#11d0db",
  },
}));

export default function AdminPanel() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab icon={<DashboardIcon />} label="DashBoard" {...a11yProps(0)}></Tab>
        <Tab icon={<DateRangeIcon />} label="Bookings" {...a11yProps(1)} />
        <Tab
          icon={<EmojiPeopleIcon />}
          label="Manage rooms"
          {...a11yProps(2)}
        />
        <Tab icon={<AddLocationIcon />} label="Edit Room" {...a11yProps(3)} />
        <Tab icon={<SettingsIcon />} label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <DashBoard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Bookings />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ManageRooms />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <EditRoom />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <UploadRoom />
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
