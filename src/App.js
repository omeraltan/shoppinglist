import React, { useState } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import './App.css';
import AddItem from './AddItem';
import Stack from '@mui/material/Stack';

function App() {
  const [items, setItems] = useState([]);
  const addItem = item => {
    setItems([item, ...items]);
  };

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Shopping List</Typography>
        </Toolbar>
      </AppBar>
      <Stack alignItems="center">
        <AddItem addItem={addItem} />
      </Stack>
    </Container>
  );
}

export default App;
