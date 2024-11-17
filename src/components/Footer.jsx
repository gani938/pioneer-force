import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import ContactHeaderBar from './ContactHeaderBar';

//

const Footer = () => {
  return (
    <div style={{ height: '3rem' }}>
      <Box
        sx={{
          background:
            'linear-gradient(318deg, rgba(250,249,249,1) 0%, rgba(236,236,240,1) 47%, rgba(248,248,248,1) 100%)',
          display: 'flex',
          justifyContent: 'center',
          padding: '2rem',
          columnGap: '8rem',
          rowGap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            rowGap: '0.2rem',
          }}
        >
          <Typography variant='h6'>Quick Links</Typography>
          <Typography variant='body2' className={'link-text'}>
            Home
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            About Us
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Contact
          </Typography>
        </Box>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            rowGap: '0.2rem',
          }}
        >
          <Typography variant='h6'>Project Areas</Typography>
          <Typography variant='body2' className={'link-text'}>
            Banking & Financial Services
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Healthcare
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Telecom
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Retail
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Pharma
          </Typography>
        </Box>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            rowGap: '0.2rem',
          }}
        >
          <Typography variant='h6'>US Headquarters</Typography>
          <Typography variant='body2'>Address</Typography>
          <Typography variant='body2' className={'address'}>
            8605 Tamarron Dr
          </Typography>
          <Typography variant='body2' className={'address'}>
            Plainsboro, NJ 08536
          </Typography>
        </Box>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            rowGap: '0.2rem',
          }}
        >
          <Typography variant='h6'>Services</Typography>
          <Typography variant='body2' className={'link-text'}>
            Business Intelligence
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Data Protection
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Testing
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Cloud
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Automation
          </Typography>
        </Box>
        <Divider component='div' />
      </Box>
      <Box sx={{ display: 'flex', padding: '0.5rem 5rem', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', columnGap: '4px', alignItems: 'center' }}>
          <Typography variant='body2' className={'sub-footer'}>
            2024 Pioneerforce
          </Typography>
          <Divider
            orientation='vertical'
            flexItem
            sx={{ height: '16px', borderColor: 'gray', borderWidth: '1px', alignSelf: 'center' }}
          />

          <Typography variant='body2' className={'sub-footer'}>
            Privacy Policy
          </Typography>
          <Divider
            orientation='vertical'
            flexItem
            sx={{ height: '16px', borderColor: 'gray', borderWidth: '1px', alignSelf: 'center' }}
          />

          <Typography variant='body2' className={'sub-footer'}>
            Cookie policy
          </Typography>
          <Divider
            orientation='vertical'
            flexItem
            sx={{ height: '16px', borderColor: 'gray', borderWidth: '1px', alignSelf: 'center' }}
          />

          <Typography variant='body2' className={'sub-footer'}>
            Terms of use
          </Typography>
          <Divider
            orientation='vertical'
            flexItem
            sx={{ height: '16px', borderColor: 'gray', borderWidth: '1px', alignSelf: 'center' }}
          />

          <Typography variant='body2' className={'sub-footer'}>
            Public Notices
          </Typography>
          <Divider
            orientation='vertical'
            flexItem
            sx={{ height: '16px', borderColor: 'gray', borderWidth: '1px', alignSelf: 'center' }}
          />
        </div>
        <div>
          <ContactHeaderBar></ContactHeaderBar>
        </div>
      </Box>
    </div>
  );
};

export default Footer;
