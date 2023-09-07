import React, { useContext } from "react";
import themeContext from "../context/Context";

export const Layout = ({ children }) => {
  const { theme } = useContext(themeContext);
  return (
    <div style={{ backgroundColor: theme.background, color: theme.font }}>
      {children}
    </div>
  );
};
