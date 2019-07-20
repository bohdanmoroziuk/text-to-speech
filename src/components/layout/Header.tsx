import React, { FunctionComponent } from 'react';

type Props = {
  appName: string | undefined;
};

const Header: FunctionComponent<Props> = ({ appName }) => (
  <header className="header">
    <h1 className="text-center text-info">
      {appName}
    </h1>
  </header>
);

export default Header;