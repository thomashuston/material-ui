// @flow

import MailIcon from 'material-ui-icons/Mail';
import React from 'react';
import Badge from './Badge';

suite('Badge', () => {
  percySnapshot('primary', () => {
    return (
      <Badge badgeContent={4} color="primary" style={{ marginTop: '20px' }}>
        <MailIcon />
      </Badge>
    );
  });

  percySnapshot('accent', () => {
    return (
      <Badge badgeContent={4} color="accent" style={{ marginTop: '20px' }}>
        <MailIcon />
      </Badge>
    );
  });
});
