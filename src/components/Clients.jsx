import HorizontalScrollAnimation from './HorizontalScrollAnimation';
import { Typography } from '@mui/material';

const clientNamesList = [
  'Verizon',
  'Amazon',
  'Fiserv',
  'Meta',
  'Google',
  'Apple',
  'Bonk Of America',
  'Wells Fargo',
  'AT&T',
  'Bayer',
  'Kaiser Permanente',
  'Walmart',
  'Johnson & Johnson',
  'United Health Group',
  'Microsoft',
  'Pfizer',
  'Cigna',
  'Comcast',
  'Anthem',
  'Oracle',
  'Centene',
  'CVS Health',
  'General Motors',
  'Facebook',
  'Alphabet',
  'Exxon Mobil',
  'Chevron',
  'Boeing',
  'Goldman Sachs',
  'Citigroup',
  'Morgan Stanley',
  'JPMorgan Chase',
  'American Express',
  'Visa',
  'Mastercard',
  'Walt Disney',
  'Nike',
  'McDonalds',
  'Starbucks',
  'Coca-Cola',
];
const Clients = () => {
  return (
    <div>
      <div style={{ margin: '1rem', display: 'flex' }}>
        <Typography variant='h5'> Our Clients</Typography>
      </div>
      <div style={{ position: 'relative' }} className={'scroll-container2'}>
        <HorizontalScrollAnimation clientNamesList={clientNamesList}></HorizontalScrollAnimation>
      </div>
    </div>
  );
};

export default Clients;
