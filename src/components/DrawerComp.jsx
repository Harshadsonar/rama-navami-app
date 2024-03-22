import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";

export default function DrawerComp() {
  const [flag, setFlag] = useState(false);

  return (
    <div className="drawer-container">
      <div className="drawer-wrapper">
      <IconButton onClick={() => setFlag(true)}>
        <MenuRoundedIcon className="link" />
      </IconButton>
      <Drawer anchor={"right"} open={flag} onClose={() => setFlag(false)}>
        <div className="mobile-drawer">
        <IconButton onClick={() => setFlag(false)}>
        <MenuRoundedIcon className="link" />
      </IconButton>
          <a href="#home">
            <p className="link">Home</p>
          </a>
          <a href="#topics">
            <p className="link">Topics</p>
          </a>
          <a href="#dates">
            <p className="link">Dates</p>
          </a>
          <a href="#prizes">
            <p className="link">Prizes</p>
          </a>
          <a href="#registration">
            <p className="link">Register</p>
          </a>
          <a href="#footer">
            <p className="link">Contact Us</p>
          </a>
          {/* <div className="social-icon">
            <a
              href="mailto:amanmittal08@gmail.com"
              rel="noopener nonreferrer"
              target="_blank"
            >
              <img src={MailOutlineIcon} alt="Gmail" />
            </a>
            <a
              href="https://chat.whatsapp.com/IItZBG5rr0G4lHCvJmYtwe"
              rel="noopener nonreferrer"
              target="_blank"
            >
              <img src={WhatsAppIcon} alt="Whatsapp" />
            </a>
          </div> */}
        </div>
      </Drawer>
    </div>
    </div>
  );
}

// import React, { useState } from "react";
// import {
//   Button,
//   Drawer,
//   IconButton,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import { useNavigate } from "react-router-dom";
// const PAGES = ["Topics", "Dates", "Prizes", "Contact US"];

// const DrawerComp = () => {
//   const navigate = useNavigate();
//   const [openDrawer, setOpenDrawer] = useState(false);

//   const handlePageClick = (page) => {
//     setOpenDrawer(false);
//     navigate(`/${page.toLowerCase()}`);
//   };
//   return (
//     <React.Fragment>
//       <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
//         <List>
//           {PAGES.map((page, index) => (
//             <ListItemButton onClick={() => handlePageClick(page)} key={index}>
//               <ListItemIcon>
//                 <ListItemText>{page}</ListItemText>
//               </ListItemIcon>
//             </ListItemButton>
//           ))}
//           <List>
//             <ListItemButton>
//               <ListItemText>WhatsApp</ListItemText>
//               <ListItemIcon>
//                 <WhatsAppIcon />
//               </ListItemIcon>
//             </ListItemButton>
//             <ListItemButton>
//               <ListItemText>Mail</ListItemText>
//               <ListItemIcon>
//                 <MailOutlineIcon sx={{ color: "#000" }} />
//               </ListItemIcon>
//             </ListItemButton>
//             <ListItemButton>
//               <Button variant="contained" fullWidth>
//                 Register Now
//               </Button>
//             </ListItemButton>
//           </List>
//         </List>
//       </Drawer>
//       <IconButton
//         sx={{ color: "black", marginLeft: "auto" }}
//         onClick={() => setOpenDrawer(!openDrawer)}
//       >
//         <MenuIcon />
//       </IconButton>
//     </React.Fragment>
//   );
// };

// export default DrawerComp;
