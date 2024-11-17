// create a Header component
import logo from '../assets/images/logo.png';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { ExpandMore } from '@mui/icons-material';

import CardMedia from '@mui/material/CardMedia';

import Collapse from '@mui/material/Collapse';

import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Header = () => {
  return (
    <div
      style={{
        // position: 'fixed',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          // justifyContent: 'space-between',
          alignItems: 'center',
          columnGap: '1rem',
          padding: '10px 20px',
          // backgroundColor: '#282c34',
        }}
      >
        <img src={logo} alt='Logo' style={{ height: '40px' }} />
        <HeaderOption label={'Services'}>
          <ServicesMenu />
        </HeaderOption>
        <HeaderOption label={'Industries'}>
          <IndustriesMenu />
        </HeaderOption>
        <HeaderOption label={'Partnerships'}>
          <ServicesMenu />
        </HeaderOption>
        <HeaderOption label={'Innovation @ Work'}>
          <ServicesMenu />
        </HeaderOption>
        <HeaderOption label={'Careers'}>
          <ServicesMenu />
        </HeaderOption>{' '}
        <HeaderOption label={'Contact Us'}>
          <ServicesMenu />
        </HeaderOption>
      </div>
    </div>
  );
};

const ServicesHeaderOption = () => {
  return <HeaderOption label={'Services'}></HeaderOption>;
};

const HeaderOption = ({ children, label }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const onMouseOver = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const onMouseLeave = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        variant='text'
        id='demo-customized-button'
        // aria-controls={open ? 'demo-customized-menu' : undefined}
        // aria-haspopup='true'
        // aria-expanded={open ? 'true' : undefined}
        // variant='contained'
        disableElevation
        // onClick={handleClick}
        onMouseOver={onMouseOver}
        endIcon={<KeyboardArrowDownIcon />}
        aria-haspopup='true'
        // style={{ zIndex: '999' }}
      >
        {label}
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={onMouseLeave}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          onMouseLeave: onMouseLeave,
        }}
      >
        {children}
      </Menu>
    </>
  );
};

const ImageComponent = (path) => {
  return (
    <img
      src={'https://www.innovasolutions.com/wp-content/uploads/2024/07/Core-Engineering-icon.png'}
      alt='Logo'
      style={{ height: '40px' }}
    />
  );
};
const ServicesMenu = () => {
  return (
    <div
      style={{
        padding: '1rem',
        display: 'flex',
        columnGap: '1rem',
      }}
    >
      <Card className={'header-card'}>
        <div
          style={{
            display: 'flex',
            columnGap: '1rem',
            alignItems: 'flex-start',
          }}
        >
          <img
            src={
              'https://www.innovasolutions.com/wp-content/uploads/2024/07/Core-Engineering-icon.png'
            }
            alt='Logo'
            style={{ height: '40px' }}
          />
          <Typography className={'primary-color'} style={{ fontWeight: '600' }}>
            Cloud Services
          </Typography>
        </div>

        <div
          style={{
            marginTop: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '0.3rem',
          }}
        >
          <Typography
            variant='body2'
            className={'link-text'}
            onClick={() => {
              console.log('hello');
            }}
          >
            Cloud Strategy
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Cloud Assessment
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Managed Cloud Services
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Cloud Migration
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Cloud Native Application Services
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Cloud Edge IOT
          </Typography>
        </div>
      </Card>
      <Card className={'header-card'}>
        <div
          style={{
            display: 'flex',
            columnGap: '1rem',
            alignItems: 'flex-start',
          }}
        >
          <img
            src={
              'https://www.innovasolutions.com/wp-content/uploads/2024/07/Core-Engineering-icon.png'
            }
            alt='Logo'
            style={{ height: '40px' }}
          />
          <Typography className={'primary-color'} style={{ fontWeight: '600' }}>
            Cloud Services
          </Typography>
        </div>

        <div
          style={{
            marginTop: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '0.3rem',
          }}
        >
          <Typography
            variant='body2'
            className={'link-text'}
            onClick={() => {
              console.log('hello');
            }}
          >
            Cloud Strategy
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Cloud Assessment
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Managed Cloud Services
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Cloud Migration
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Cloud Native Application Services
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Cloud Edge IOT
          </Typography>
        </div>
      </Card>
      <Card className={'header-card'}>
        <div
          style={{
            display: 'flex',
            columnGap: '1rem',
            alignItems: 'flex-start',
          }}
        >
          <img
            src={
              'https://www.innovasolutions.com/wp-content/uploads/2024/07/Core-Engineering-icon.png'
            }
            alt='Logo'
            style={{ height: '40px' }}
          />
          <Typography className={'primary-color'} style={{ fontWeight: '600' }}>
            Cloud Services
          </Typography>
        </div>

        <div
          style={{
            marginTop: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '0.3rem',
          }}
        >
          <Typography
            variant='body2'
            className={'link-text'}
            onClick={() => {
              console.log('hello');
            }}
          >
            Cloud Strategy
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Cloud Assessment
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Managed Cloud Services
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Cloud Migration
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Cloud Native Application Services
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Cloud Edge IOT
          </Typography>
        </div>
      </Card>
    </div>
  );
};

const IndustriesMenu = () => {
  return (
    <div
      style={{
        padding: '1rem',
        display: 'flex',
        columnGap: '1rem',
      }}
    >
      <Card className={'header-card'}>
        <div
          style={{
            display: 'flex',
            columnGap: '1rem',
            alignItems: 'flex-start',
          }}
        >
          <img
            src={
              'https://www.innovasolutions.com/wp-content/uploads/2024/07/Core-Engineering-icon.png'
            }
            alt='Logo'
            style={{ height: '40px' }}
          />
          <Typography className={'primary-color'} style={{ fontWeight: '600' }}>
            Industry Services
          </Typography>
        </div>

        <div
          style={{
            marginTop: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '0.3rem',
          }}
        >
          <Typography
            variant='body2'
            className={'link-text'}
            onClick={() => {
              console.log('hello');
            }}
          >
            Cloud Strategy2
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Cloud Assessment2
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Managed Cloud Services2
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Cloud Migration2
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Cloud Native Application Services2
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Cloud Edge IOT2
          </Typography>
        </div>
      </Card>
      <Card className={'header-card'}>
        <div
          style={{
            display: 'flex',
            columnGap: '1rem',
            alignItems: 'flex-start',
          }}
        >
          <img
            src={
              'https://www.innovasolutions.com/wp-content/uploads/2024/07/Core-Engineering-icon.png'
            }
            alt='Logo'
            style={{ height: '40px' }}
          />
          <Typography className={'primary-color'} style={{ fontWeight: '600' }}>
            Cloud Services
          </Typography>
        </div>

        <div
          style={{
            marginTop: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '0.3rem',
          }}
        >
          <Typography
            variant='body2'
            className={'link-text'}
            onClick={() => {
              console.log('hello');
            }}
          >
            Cloud Strategy
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Cloud Assessment
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Managed Cloud Services
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Cloud Migration
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Cloud Native Application Services
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Cloud Edge IOT
          </Typography>
        </div>
      </Card>
      <Card className={'header-card'}>
        <div
          style={{
            display: 'flex',
            columnGap: '1rem',
            alignItems: 'flex-start',
          }}
        >
          <img
            src={
              'https://www.innovasolutions.com/wp-content/uploads/2024/07/Core-Engineering-icon.png'
            }
            alt='Logo'
            style={{ height: '40px' }}
          />
          <Typography className={'primary-color'} style={{ fontWeight: '600' }}>
            Cloud Services
          </Typography>
        </div>

        <div
          style={{
            marginTop: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '0.3rem',
          }}
        >
          <Typography
            variant='body2'
            className={'link-text'}
            onClick={() => {
              console.log('hello');
            }}
          >
            Cloud Strategy
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Cloud Assessment
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Managed Cloud Services
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Cloud Migration
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Cloud Native Application Services
          </Typography>
          <Typography variant='body2' className={'link-text'}>
            Cloud Edge IOT
          </Typography>
        </div>
      </Card>
    </div>
  );
};

export default Header;
