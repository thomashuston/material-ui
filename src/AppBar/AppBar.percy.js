// @flow

import MenuIcon from 'material-ui-icons/Menu';
import React from 'react';
import AppBar from './AppBar';
import IconButton from '../IconButton';
import Toolbar from '../Toolbar';
import Typography from '../Typography';

suite('AppBar', { widths: [320, 768, 1024] }, () => {
  percySnapshot('simple', () => {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography type="title" color="inherit">
            Title
          </Typography>
        </Toolbar>
      </AppBar>
    );
  });

  percySnapshot('button', () => {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton color="contrast">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit">
            Title
          </Typography>
        </Toolbar>
      </AppBar>
    );
  });
});
