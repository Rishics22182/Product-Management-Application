import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import rounter from "./routes/index.js";

const App = () => {
  return <RouterProvider router={rounter} />;
};
export default App;
