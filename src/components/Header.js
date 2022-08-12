import React from "react";
import { AppBar, Toolbar, Tabs, Tab, Typography } from "@mui/material";
import { LibraryBooksOutlined } from "@mui/icons-material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          <Typography>
            <LibraryBooksOutlined></LibraryBooksOutlined>
          </Typography>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="secondary"
            value={1}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add product" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/about" label="About Us" />
            <Tab />
            <Tab />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
