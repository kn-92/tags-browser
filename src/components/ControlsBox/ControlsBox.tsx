import { Container, Typography, Box } from '@mui/material';

import NumberSelect from './NumberSelect/NumberSelect';
import SortSelect from './SortSelect/SortSelect';
import OrderSelect from './OrderSelect/OrderSelect';

const ControlsBox = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <Typography variant="h3">Tags Browser</Typography>
      </Box>
      <Box alignContent="right">
        <NumberSelect />
        <SortSelect />
        <OrderSelect />
      </Box>
    </Container>
  );
};

export default ControlsBox;
