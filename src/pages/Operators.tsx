import { useState } from 'react';
import { Box, Typography } from '@mui/material';

import SearchBar from '../components/SearchBar';
import OperatorTable from '../components/OperatorTable';

const OperatorsPage = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (query: string) => {
    setQuery(query);
  };

  return (
    <Box p={3}>
      <Typography variant="h4" component="h1" gutterBottom>
        Оператори
      </Typography>
      <SearchBar onSearch={handleSearch} />
      <OperatorTable query={query} />
    </Box>
  );
};

export default OperatorsPage;
