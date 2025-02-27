import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, Hidden } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";


const Navbar =() => {
  const [open, setOpen] = useState(false); // Estado para controlar el menú móvil

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.embed.im/snow.js";
    script.defer = true;
    const snows = document.getElementsByClassName("containerNav")[0];
    if (snows) {
      snows.appendChild(script);
    }
    return () => {
      if (snows) {
        snows.removeChild(script);
      }
    };
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(open);
  };

  const menuItems = [
    { id: "BackGroundNav", label: "Home" },
    { id: "About", label: "About Me" },
    { id: "Proyects", label: "Projects" },
    { id: "Collaborationsbj", label: "Collaborations" },
    { id: "Skills", label: "Skills" },
    { id: "Contact", label: "Contact" },
  ];

  return (
    <Box className="relative containerNav">
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0)", 
          backdropFilter: "blur(10px)", 
          boxShadow: "none", 
        }}
      >
        <Toolbar className="flex justify-between">
          <Typography variant="h6" className="text-white font-bold">
            DEIBY HERNANDEZ
          </Typography>
          {/* Menú para pantallas grandes */}
          <Box className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-white hover:text-gray-300 cursor-pointer"
              >
                {item.label}
              </ScrollLink>
            ))}
          </Box>
          {/* Botón de menú para móviles */}
          <Hidden mdUp>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            className="md:hidden xl:hidden"
          >
            <MenuIcon />
          </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>

      {/* Menú móvil */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          sx={{
            width: 250,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo negro semitransparente
            backdropFilter: "blur(10px)", // Efecto borroso
            height: "100%",
          }}
        >
          <Box className="flex justify-end p-2">
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon className="text-white" />
            </IconButton>
          </Box>
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.id}>
                <ScrollLink
                  to={item.id}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="w-full text-center"
                >
                  <Typography className="text-white hover:text-gray-300">
                    {item.label}
                  </Typography>
                </ScrollLink>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navbar;