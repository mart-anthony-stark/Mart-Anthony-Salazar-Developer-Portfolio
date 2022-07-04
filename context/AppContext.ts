// AppContext.js

import React from "react";

const AppContext = React.createContext({
  activeRoute: "",
  setActiveRoute: (path: string) => {},
});

export default AppContext;
