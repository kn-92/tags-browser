import { Container } from '@mui/material';

import TagsList from './TagsList/TagsList';

const ListBox = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
      }}
    >
      <TagsList />
    </Container>
  );
};

export default ListBox;
