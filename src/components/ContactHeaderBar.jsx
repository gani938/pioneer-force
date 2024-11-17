import React from 'react';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const ContactHeaderBar = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/*<div>Contact: +1-234-567-890</div>*/}
      <div>
        <IconButton
          color='inherit'
          aria-label='Facebook'
          href='https://facebook.com'
          target='_blank'
          sx={{ color: '#1877F2' }} // Facebook Blue
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          color='inherit'
          aria-label='Instagram'
          href='https://instagram.com'
          target='_blank'
          sx={{ color: '#E1306C' }} // Instagram Pink
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          color='inherit'
          aria-label='Twitter'
          href='https://twitter.com'
          target='_blank'
          sx={{ color: '#1DA1F2' }} // Twitter Blue
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          color='inherit'
          aria-label='LinkedIn'
          href='https://linkedin.com'
          target='_blank'
          sx={{ color: '#0A66C2' }} // LinkedIn Blue
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          color='inherit'
          aria-label='YouTube'
          href='https://youtube.com'
          target='_blank'
          sx={{ color: '#FF0000' }} // YouTube Red
        >
          <YouTubeIcon />
        </IconButton>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div position='sticky'>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <h4>My Website</h4>
        </Box>

        <Box>
          <IconButton
            color='inherit'
            aria-label='Facebook'
            href='https://facebook.com'
            target='_blank'
            sx={{ color: '#1877F2' }} // Facebook Blue
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color='inherit'
            aria-label='Instagram'
            href='https://instagram.com'
            target='_blank'
            sx={{ color: '#E1306C' }} // Instagram Pink
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            color='inherit'
            aria-label='Twitter'
            href='https://twitter.com'
            target='_blank'
            sx={{ color: '#1DA1F2' }} // Twitter Blue
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color='inherit'
            aria-label='LinkedIn'
            href='https://linkedin.com'
            target='_blank'
            sx={{ color: '#0A66C2' }} // LinkedIn Blue
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color='inherit'
            aria-label='YouTube'
            href='https://youtube.com'
            target='_blank'
            sx={{ color: '#FF0000' }} // YouTube Red
          >
            <YouTubeIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </div>
  );
};

export default ContactHeaderBar;

// export default ContactHeaderBar;
