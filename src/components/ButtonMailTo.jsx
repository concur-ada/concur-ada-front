import React from 'react';
import '@ui5/webcomponents-icons/dist/sys-help-2';
import { Button } from '@ui5/webcomponents-react/lib/Button';

const ButtonMailto = ({ mailto, label }) => {
  const button = (
    <Button
      className=''
      icon='sys-help-2'
      onClick={function onClick(e) {
        window.location = mailto;
        e.preventDefault();
      }}
      slot=''
      style={{ marginLeft: '1450px' }}
      tooltip='Mailto'
    >
      {' '}
      Help? - <b>Send us an email</b>
    </Button>
  );

  return button;
};

export default ButtonMailto;