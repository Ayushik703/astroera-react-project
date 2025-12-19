import { Home } from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
// import { RandomNum, TestuseState, Timer } from "./components/homepage/Test";
import { Chat } from "./pages/Chat";
import { AppLayout } from "./components/global/Layout/AppLayout";

export const App = () => {
  // Route setup
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/chat-with-astrologer",
          element: <Chat />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;

  // return (
  //   <>
  //     <TestuseState />
  //     <RandomNum />
  //     <Timer />
  //   </>
  // );
};
