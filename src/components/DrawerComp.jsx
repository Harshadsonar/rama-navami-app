import React, { useState } from "react";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useNavigate } from "react-router-dom";
const PAGES = ["Topics", "Dates", "Prizes", "Contact US"];

const DrawerComp = () => {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handlePageClick = (page) => {
    setOpenDrawer(false);
    navigate(`/${page.toLowerCase()}`);
  };
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {PAGES.map((page, index) => (
            <ListItemButton onClick={() => handlePageClick(page)} key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
          <List>
            <ListItemButton>
              <ListItemText>WhatsApp</ListItemText>
              <ListItemIcon>
                <WhatsAppIcon />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemText>Mail</ListItemText>
              <ListItemIcon>
                <MailOutlineIcon sx={{ color: "#000" }} />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <Button variant="contained" fullWidth>
                Register Now
              </Button>
            </ListItemButton>
          </List>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "black", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
