import React from "react";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import img1 from "../img/iskcon_logo.svg";
import DrawerComp from "../drawer/DrawerComp";
import { Link, useNavigate } from "react-router-dom";

const PAGES = [
  { name: "Topics", id: "topics" },
  { name: "Dates", id: "dates" },
  { name: "Prizes", id: "prizes" },
  { name: "Contact Us", id: "contact-us" },
];

const NavBar = () => {

  const handleButtonClick = (section) => {
    navigate(`#${section.id}`);
  };

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <AppBar
        sx={{
          background: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);",
        }}
      >
        <Toolbar>
          <img src={img1} alt="RamaNavami Icon" style={{ width: "50px" }} />
          {isMatch ? (
            <DrawerComp />
          ) : (
            <>
              {PAGES.map((page, index) => (
                <Link
                  key={index}
                  style={{ textTransform: "none", color: "#000", margin:"0 60px"  }}
                >
                  {page.name}
                </Link>
              ))}
              <div className="icon-buttons">
                <IconButton
                  href="https://wa.me/8237382014"
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon sx={{ marginLeft: "30px", marginRight: "80px" }} />
                </IconButton>
                <IconButton
                  href="mailto:sonarharshad02@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MailOutlineIcon sx={{ color: "#000" }} />
                </IconButton>
              </div>
              <Button
                sx={{ marginLeft: "auto" }}
                variant="contained"
                onClick={() => handleButtonClick("../registration/Registration.jsx")}
              >
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
