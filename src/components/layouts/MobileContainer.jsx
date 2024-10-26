import React from "react";

const MobileContainer = ({ children }) => {
  return <div className="max-w-[480px] mx-auto">{children}</div>;
};

export default MobileContainer;
