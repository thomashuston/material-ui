// @flow

import FolderIcon from 'material-ui-icons/Folder';
import React from 'react';
import Avatar from './Avatar';

suite('Avatar', () => {
  percySnapshot('icon', () => {
    return (
      <Avatar>
        <FolderIcon />
      </Avatar>
    );
  });

  percySnapshot('image', () => {
    return (
      <Avatar src="https://percy.io/static/images/percy-light-3-ce966638e781a4ab873473f69313339c.svg" />
    );
  });

  percySnapshot('letter', () => {
    return <Avatar>H</Avatar>;
  });
});
