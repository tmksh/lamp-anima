import React from "react";
import { RouterProvider, createBrowserRouter, useLocation } from "react-router-dom";
import { Lamp } from "./screens/Lamp";
import { Screen } from "./screens/Screen";
import { Screen4 } from "./screens/Screen4";
import { ScreenScreen } from "./screens/ScreenScreen";
import { ScreenWrapper } from "./screens/ScreenWrapper";
import { Top } from "./screens/Top";

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
};

const router = createBrowserRouter([
  {
    path: "/*",
    element: (
      <ScrollToTop>
        <Top />
      </ScrollToTop>
    ),
  },
  {
    path: "/topu12504u12442u12540u12471u12441",
    element: (
      <ScrollToTop>
        <Top />
      </ScrollToTop>
    ),
  },
  {
    path: "/u32946u25104u12459u12522u12461u12517u12521u12512",
    element: (
      <ScrollToTop>
        <Screen />
      </ScrollToTop>
    ),
  },
  {
    path: "/u12424u12367u12354u12427u36074u21839",
    element: (
      <ScrollToTop>
        <ScreenScreen />
      </ScrollToTop>
    ),
  },
  {
    path: "/u21463u35611u12398u27969u12428",
    element: (
      <ScrollToTop>
        <ScreenWrapper />
      </ScrollToTop>
    ),
  },
  {
    path: "/u35611u24107u32057u20171",
    element: (
      <ScrollToTop>
        <Screen4 />
      </ScrollToTop>
    ),
  },
  {
    path: "/lampu12398u32057u20171",
    element: (
      <ScrollToTop>
        <Lamp />
      </ScrollToTop>
    ),
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
