import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter, useLocation } from "react-router-dom";
import { Lamp as PcLamp } from "./screens/Lamp";
import { Screen as PcScreen } from "./screens/Screen";
import { Screen4 as PcScreen4 } from "./screens/Screen4";
import { Screen5 as PcScreen5 } from "./screens/Screen5";
import { ScreenScreen as PcScreenScreen } from "./screens/ScreenScreen";
import { ScreenWrapper as PcScreenWrapper } from "./screens/ScreenWrapper";
import { Top as PcTop } from "./screens/Top";

import { Lamp as SpLamp } from "./sp/screens/Lamp";
import { Screen as SpScreen } from "./sp/screens/Screen";
import { Screen4 as SpScreen4 } from "./sp/screens/Screen4";
import { Screen5 as SpScreen5 } from "./sp/screens/Screen5";
import { ScreenScreen as SpScreenScreen } from "./sp/screens/ScreenScreen";
import { ScreenWrapper as SpScreenWrapper } from "./sp/screens/ScreenWrapper";
import { Top as SpTop } from "./sp/screens/Top";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

const ResponsiveComponent = ({ pcComponent: PcComponent, spComponent: SpComponent }) => {
  const { width } = useWindowSize();
  const isMobile = width <= 768;

  return isMobile ? <SpComponent /> : <PcComponent />;
};

const RouteWrapper = ({ pcComponent, spComponent }) => {
  return (
    <>
      <ScrollToTop />
      <ResponsiveComponent pcComponent={pcComponent} spComponent={spComponent} />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/*",
    element: <RouteWrapper pcComponent={PcTop} spComponent={SpTop} />,
  },
  {
    path: "/topu12504u12442u12540u12471u12441",
    element: <RouteWrapper pcComponent={PcTop} spComponent={SpTop} />,
  },
  {
    path: "/u21463u35611u12398u27969u12428",
    element: <RouteWrapper pcComponent={PcScreen} spComponent={SpScreen} />,
  },
  {
    path: "/lampu12398u39749u21147",
    element: <RouteWrapper pcComponent={PcLamp} spComponent={SpLamp} />,
  },
  {
    path: "/u32946u25104u12459u12522u12461u12517u12521u12512",
    element: <RouteWrapper pcComponent={PcScreenScreen} spComponent={SpScreenScreen} />,
  },
  {
    path: "/u12424u12367u12354u12427u36074u21839",
    element: <RouteWrapper pcComponent={PcScreenWrapper} spComponent={SpScreenWrapper} />,
  },
  {
    path: "/u35611u24107u32057u20171",
    element: <RouteWrapper pcComponent={PcScreen5} spComponent={SpScreen5} />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
