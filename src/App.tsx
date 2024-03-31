import { Container } from '@mui/material';

import './main.css';

import ControlsBox from './components/ControlsBox/ControlsBox';
import ListBox from './components/ListBox/ListBox';
import PaginationBox from './components/Pagination/Pagination';

function App() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        paddingTop: '20px',
      }}
    >
      <ControlsBox />
      <ListBox />
      <PaginationBox />
    </Container>
  );
}

export default App;
