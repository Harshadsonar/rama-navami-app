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
import { BrowserRouter } from "react-router-dom";
const PAGES = ["Topics", "Dates", "Prizes", "Contact US"];
const NavBar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <AppBar sx={{ background: "gold" }}>
        <Toolbar>
          <img src={img1} alt="RamaNavami Icon" style={{ width: "50px" }} />
          {isMatch ? (
            <>
              <BrowserRouter>
                <DrawerComp />
              </BrowserRouter>
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                value={value}
                onChange={(_e, value) => setValue(value)}
                indicatorColor="secondary"
              >
                {PAGES.map((page, index) => (
                  <Tab key={index} label={page} />
                ))}
              </Tabs>
             <div className="icon-buttons">
             <IconButton >
                <WhatsAppIcon sx={{marginLeft:"30px",marginRight:"30px" }}/>
              </IconButton>
              <IconButton>
                <MailOutlineIcon sx={{ color: "#000", }} />
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
