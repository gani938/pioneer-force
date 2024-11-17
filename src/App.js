import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Clients from './components/Clients';
import { Button, Divider, Typography } from '@mui/material';

// function App() {
//   return (
//     <div className='App'>
//       Pioneer Force... Site to be updated soon...
//       <div style={{ padding: '16px' }}>
//         <Typography variant='h1' color='primary'>
//           Welcome to MUI v6!
//         </Typography>
//         <Button variant='contained' color='primary'>
//           Click Me
//         </Button>
//       </div>
//     </div>
//   );
// }

// create a new function called App it has first child div with another component called ContactHeaderBar

import ContactHeaderBar from './components/ContactHeaderBar';
import HoverMenu from './components/Test';
import AutoScroll from './components/HorizontalScrollAnimation';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      {/*<ContactHeaderBar />*/}
      <Header />

      <Divider component='div' />
      <div
        style={
          {
            // margin: '1rem'
          }
        }
      >
        <Clients />
      </div>
      <div style={{ height: '8.5rem' }}></div>
      <Footer></Footer>
    </div>
  );
}

// export default App;

export default App;
