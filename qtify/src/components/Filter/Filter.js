import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import styles from "./Filter.module.css";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

function Filter({ data, filteredIndex, setFilteredIndex }) {
  const handleChange = (event, newValue) => {
    setFilteredIndex(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={filteredIndex}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "var(--color-primary)"
            }
          }}
        >
          {data.map((ele) => (
            <Tab className={styles.tab} label={ele.label} {...a11yProps(0)} />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
}
export default Filter;