import React from "react";

const MobileContainer = ({ children }) => {
  return <div className="max-w-[480px] mx-auto p-5">{children}</div>;
};

export default MobileContainer;
