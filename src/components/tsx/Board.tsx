import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import NewspaperIcon from '@mui/icons-material/Newspaper';

const Board: React.FC = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <NewspaperIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 500,
            color: 'white',
            textDecoration: 'none',
          }}
        >
          NewsSite
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Board