import { createBrowserRouter } from "react-router-dom";

import { Home } from './home/index';

const router = createBrowserRouter([
  {

    path: "/",
    element:   <Home />
  }
]);

export { router };
