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
import { ToastContainer } from "react-toastify";
import AuthContext from "./context/AuthContext";
import Private from "./pages/private/Private";
import PrivateRoute from "./privateRoute/PrivateRoute";
import AdminLayout from "./layout/AdminLayout";
import Subject from "./pages/subject/Subject";

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
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/private",
        element: (
          <PrivateRoute>
            <Private />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <AdminLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "subject",
        element: <Subject />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthContext>
  </StrictMode>,
);
