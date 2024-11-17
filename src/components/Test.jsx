import React, { useState } from 'react';
import { Button, Menu, MenuItem, Box } from '@mui/material';

const HoverMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null); // Track anchor for menu
  const [currentMenu, setCurrentMenu] = useState(null); // Track which menu to display

  const buttons = [
    { id: 'menu1', label: 'Menu 1', items: ['Item 1-1', 'Item 1-2', 'Item 1-3'] },
    { id: 'menu2', label: 'Menu 2', items: ['Item 2-1', 'Item 2-2', 'Item 2-3'] },
    { id: 'menu3', label: 'Menu 3', items: ['Item 3-1', 'Item 3-2', 'Item 3-3'] },
  ];

  const handleButtonHover = (event, menuId) => {
    setAnchorEl(event.currentTarget); // Set the anchor to the current button
    setCurrentMenu(menuId); // Update which menu to show
  };

  const handleMouseLeave = () => {
    setAnchorEl(null); // Close menu
    setCurrentMenu(null); // Reset current menu
  };

  return (
    <Box>
      {/* Render Buttons */}
      {buttons.map((button) => (
        <Button
          key={button.id}
          onMouseEnter={(event) => handleButtonHover(event, button.id)} // Open menu on hover
          aria-controls={currentMenu === button.id ? button.id : undefined}
          aria-haspopup='true'
        >
          {button.label}
        </Button>
      ))}

      {/* Render Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMouseLeave} // Close menu when clicking outside
        MenuListProps={{
          onMouseLeave: handleMouseLeave, // Close menu on mouse leave
        }}
      >
        {/* Render Menu Items for the current menu */}
        {currentMenu &&
          buttons
            .find((button) => button.id === currentMenu)
            .items.map((item, index) => (
              <MenuItem key={index} onClick={handleMouseLeave}>
                {item}
              </MenuItem>
            ))}
      </Menu>
    </Box>
  );
};

export default HoverMenu;
