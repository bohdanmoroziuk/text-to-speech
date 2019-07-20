import React, { FunctionComponent } from 'react';

import Header from 'components/layout/Header';

const Template: FunctionComponent = ({ children }) => (
  <div className="container pt-5">
    <div className="row">
      <div className="col-md-10 col-xl-8 mx-auto">
        <Header
          appName={process.env.REACT_APP_NAME}
        />
        {children}
      </div>
    </div>
  </div>
);

export default Template;