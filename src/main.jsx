import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Homepage from "./pages/homepage/Homepage";
import Features from "./pages/features/Features";
import HowItWorks from "./pages/howItWorks/HowItWorks";
import Signin from "./pages/signIn/Signin";
import NotFound from "./pages/notFound/NotFound";
import MainLayout from "./layout/MainLayout";
import SignUp from "./pages/signUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/how-it-works",
        element: <HowItWorks />,
      },
      {
        path: "/sign-in",
        element: <Signin />,
      },
      {
        path:"/sign-up",
        element:<SignUp />
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
