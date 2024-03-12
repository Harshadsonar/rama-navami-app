import React, { useState } from "react";
import {
  AppBar,
  Button,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import img1 from "../img/iskcon_logo.svg";
import DrawerComp from "../drawer/DrawerComp";
import { Link, useLocation } from "react-router-dom";

const PAGES = ["Topics", "Dates", "Prizes", "Contact US"];

const NavBar = () => {
  const [value, setValue] = useState(0); // Set initial selected tab index
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation(); // Get current route location

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  // Optional for additional scroll behavior if needed
  const handlePageClick = (page) => {
    const scrollToSection = document.getElementById(page.toLowerCase()); // Use lowercase here
    if (scrollToSection) {
      scrollToSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <React.Fragment>
      <AppBar sx={{ background: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);" }}>
        <Toolbar>
          <img src={img1} alt="RamaNavami Icon" style={{ width: "50px" }} />
          {isMatch ? (
            <DrawerComp />
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                value={value}
                onChange={handleTabChange}
                indicatorColor="secondary"
              >
                {PAGES.map((page, index) => (
                  <Tab
                    key={index}
                    label={page}
                    component={Link}
                    to={`/${page.toLowerCase()}`}
                    scroll={true} // Key change for smooth scrolling
                    // onClick={() => handlePageClick(page)} // Optional if additional scroll behavior is needed
                  />
                ))}
              </Tabs>
              <div className="icon-buttons">
                <IconButton href="https://wa.me/8237382014" target="_blank" rel="noreferrer">
                  <WhatsAppIcon sx={{ marginLeft: "30px", marginRight: "30px" }} />
                </IconButton>
                <IconButton href="mailto:sonarharshad02@gmail.com" target="_blank" rel="noreferrer">
                  <MailOutlineIcon sx={{ color: "#000" }} />
                </IconButton>
              </div>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Register Now
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default NavBar;