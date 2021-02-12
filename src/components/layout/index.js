import React from 'react';
import HeaderLayout from "./header";
import FooterLayout from "./footer";

const withLayout = Page => {
  return () => (
    <React.Fragment>
      <HeaderLayout />
        <Page />
      <FooterLayout />
    </React.Fragment>
  );
};

export default withLayout;