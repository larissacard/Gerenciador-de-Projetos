import React from 'react';

import { Cont } from './styles';

import SideBar from '../SideBar';

function Container({children}) {
  return (
    <Cont>
        <SideBar />
        {children}
    </Cont>
  );
}

export default Container;