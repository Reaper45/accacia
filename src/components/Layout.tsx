import React from "react";

import { Footer, MainImgWrapper, Nav } from ".";

const Layout: React.FC<{
  top: <T>(props: T) => React.ReactElement;
  children?: <T>(props: T) => React.ReactElement;
  image: string;
}> = ({ children, top, image, ...props }) => {
  return (
    <>
      <MainImgWrapper img={image}>
        <Nav />
        {top(props)}
      </MainImgWrapper>
      {children && children(props)}
      <Footer />
    </>
  );
};

export default Layout;
