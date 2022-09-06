import React from 'react';

import { Cont } from './styles';

import Header from '../header';

function Container({children}) {
  return (
    <Cont>
        <Header/>
        {children}
    </Cont>
  );
}

export default Container;