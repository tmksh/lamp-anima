import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Lamp } from "./screens/Lamp";
import { Screen } from "./screens/Screen";
import { Screen4 } from "./screens/Screen4";
import { Screen5 } from "./screens/Screen5";
import { ScreenScreen } from "./screens/ScreenScreen";
import { ScreenWrapper } from "./screens/ScreenWrapper";
import { Top } from "./screens/Top";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
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

const ResponsiveRoute = ({ pcComponent: PcComponent }) => {
  const { width } = useWindowSize();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [width]);

  return <PcComponent />;
};

const router = createBrowserRouter([
  {
    path: "/*",
    element: <ResponsiveRoute pcComponent={Top} />,
  },
  {
    path: "/topu12504u12442u12540u12471u12441",
    element: <ResponsiveRoute pcComponent={Top} />,
  },
  {
    path: "/u21463u35611u12398u27969u12428",
    element: <ResponsiveRoute pcComponent={Screen} />,
  },
  {
    path: "/lampu12398u39749u21147",
    element: <ResponsiveRoute pcComponent={Lamp} />,
  },
  {
    path: "/u32946u25104u12459u12522u12461u12517u12521u12512",
    element: <ResponsiveRoute pcComponent={ScreenScreen} />,
  },
  {
    path: "/u12424u12367u12354u12427u36074u21839",
    element: <ResponsiveRoute pcComponent={ScreenWrapper} />,
  },
  {
    path: "/u35611u24107u32057u20171",
    element: <ResponsiveRoute pcComponent={Screen5} />,
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
