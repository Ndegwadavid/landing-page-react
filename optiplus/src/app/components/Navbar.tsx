'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Drawer, 
  Box, 
  Button,
  Container,
  useScrollTrigger,
  Fade,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'Services', href: '#services' },
    { text: 'Products', href: '#products' },
    { text: 'About', href: '#about' },
    { text: 'Contact', href: '#contact' },
  ];

  const drawer = (
    <Box
      sx={{
        height: '100%',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        p: 3,
      }}
    >
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          mb: 3,
          color: 'text.primary',
          '&:hover': {
            transform: 'rotate(90deg)',
            transition: 'transform 0.3s ease-in-out',
          },
        }}
      >
        <CloseIcon />
      </IconButton>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {menuItems.map((item) => (
          <Button
            key={item.text}
            component={Link}
            href={item.href}
            onClick={handleDrawerToggle}
            sx={{
              justifyContent: 'flex-start',
              py: 2,
              px: 3,
              borderRadius: 2,
              transition: 'all 0.3s ease',
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'text.primary',
              fontWeight: 'medium',
              fontSize: '1.1rem',
              '&:hover': {
                background: 'rgba(59, 130, 246, 0.1)',
                transform: 'translateX(10px)',
              },
            }}
          >
            {item.text}
          </Button>
        ))}
      </Box>
    </Box>
  );

  return (
    <>
      <Fade in={!trigger}>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            background: isScrolled
              ? 'rgba(255, 255, 255, 0.9)'
              : 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: 'space-between', py: 1.5 }}>
              <Box
                component={Link}
                href="/"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Image
                  src="/images/logo.png"
                  alt="OptiPlus Logo"
                  width={120}
                  height={40}
                  priority
                />
              </Box>

              {/* Desktop Menu */}
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  gap: 2,
                }}
              >
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    component={Link}
                    href={item.href}
                    sx={{
                      px: 3,
                      py: 1,
                      color: 'text.primary',
                      position: 'relative',
                      fontWeight: 'medium',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        background: 'linear-gradient(45deg, #2563eb, #7c3aed)',
                        transform: 'scaleX(0)',
                        transition: 'transform 0.3s ease',
                        transformOrigin: 'right',
                      },
                      '&:hover::after': {
                        transform: 'scaleX(1)',
                        transformOrigin: 'left',
                      },
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>

              {/* Mobile Menu Icon */}
              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  display: { md: 'none' },
                  color: 'text.primary',
                  border: '2px solid rgba(59, 130, 246, 0.2)',
                  borderRadius: '8px',
                  p: 1,
                  '&:hover': {
                    background: 'rgba(59, 130, 246, 0.1)',
                  },
                }}
              >
                <MenuIcon sx={{ fontSize: 28 }} />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </Fade>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 300,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Toolbar spacing */}
      <Toolbar />
    </>
  );
};

export default Navbar;