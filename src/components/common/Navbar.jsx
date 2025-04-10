import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { 
  AppBar, 
  Toolbar, 
  Typography,  
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 

  useTheme,

} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();


  // Efecto snow original
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.embed.im/snow.js";
    script.defer = true;
    const container = document.querySelector(".navbar-container");
    if (container) {
      container.appendChild(script);
    }
    return () => {
      if (container && container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  // Secciones del portafolio
  const sections = [
    { id: "home", label: "Inicio" },
    { id: "about", label: "Sobre mí" },
    { id: "projects", label: "Proyectos" },
    { id: "skills", label: "Habilidades" },
    { id: "contact", label: "Contacto" },
  ];

  // Estilos para los enlaces de navegación
  const navLinkStyles = {
    color: '#fff',
    fontWeight: 500,
    fontSize: '1rem',
    textTransform: 'none',
    letterSpacing: '0.5px',
    position: 'relative',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      color: theme.palette.primary.main,
      '&::after': {
        width: '100%'
      }
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-4px',
      left: 0,
      width: '0%',
      height: '2px',
      backgroundColor: theme.palette.primary.main,
      transition: 'width 0.3s ease'
    }
  };

  return (
    <Box className="navbar-container" sx={{ position: 'relative' }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          borderBottom: `1px solid ${theme.palette.divider}`,
          py: 1
        }}
      >
        <Toolbar sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          maxWidth: 'xl',
          mx: 'auto',
          width: '100%',
          px: { xs: 2, md: 6 },
          position: 'relative',
          zIndex: 2
        }}>
          {/* Logo/Nombre */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              style={{ textDecoration: 'none' }}
            >
              <Typography 
                variant="h6" 
                component="div"
                sx={{
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  color: '#fff',
                  '&:hover': {
                    color: theme.palette.primary.main,
                  }
                }}
              >
                DEIBY H.
              </Typography>
            </ScrollLink>
          </motion.div>

          {/* Menú para desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ScrollLink
                  to={section.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  style={{ textDecoration: 'none' }}
                >
                  <Typography sx={navLinkStyles}>
                    {section.label}
                  </Typography>
                </ScrollLink>
              </motion.div>
            ))}
          </Box>

          {/* Botón de menú para móvil */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ color: '#fff' }}
              >
                <MenuIcon />
              </IconButton>
            </motion.div>
          </Box>
        </Toolbar>

        {/* Menú móvil */}
        <Drawer 
          anchor="right" 
          open={open} 
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              width: { xs: '100%', sm: 300 },
              backgroundColor: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(12px)',
              zIndex: 3
            }
          }}
        >
          <Box
            role="presentation"
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'flex-end', 
              p: 2,
              borderBottom: `1px solid ${theme.palette.divider}`
            }}>
              <IconButton onClick={toggleDrawer(false)}>
                <CloseIcon sx={{ color: '#fff' }} />
              </IconButton>
            </Box>
            
            <List sx={{ flexGrow: 1 }}>
              {sections.map((section) => (
                <ListItem 
                  button 
                  key={section.id}
                  onClick={toggleDrawer(false)}
                  sx={{ 
                    py: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)'
                    }
                  }}
                >
                  <ScrollLink
                    to={section.id}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    style={{ 
                      width: '100%',
                      textAlign: 'center',
                      textDecoration: 'none'
                    }}
                  >
                    <Typography 
                      variant="h6"
                      sx={{ 
                        color: '#fff',
                        fontWeight: 500,
                        '&:hover': {
                          color: theme.palette.primary.main
                        }
                      }}
                    >
                      {section.label}
                    </Typography>
                  </ScrollLink>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </AppBar>
    </Box>
  );
}

export default Navbar;