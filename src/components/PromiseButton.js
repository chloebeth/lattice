import React, { useState } from 'react';
import { Button } from '@material-ui/core';

export default function({ onClick, children, ...props }) {
  const [ waiting, setWaiting ] = useState();

  const _onClick = async (...args) => {
    try {
      setWaiting(true);
      await onClick(...args);
    } finally {
      setWaiting(false);
    }
  }

  return <Button {...props} onClick={_onClick} disabled={waiting}>{children}</Button>;
};