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
import Goal from "./pages/goal/Goal";
import Tasks from "./pages/tasks/Tasks";
import Pricing from "./pages/pricing/Pricing";
import FAQ from "./pages/faq/FAQ";

import AOS from "aos";

import "aos/dist/aos.css";

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
        path:"/pricing",
        element:<Pricing />
      },
      {
        path:"/faq",
        element:<FAQ />
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
      {
        path:"goal",
        element:<Goal />,
      },
      {
        path:"tasks",
        element:<Tasks />
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
  easing: "ease-in-out",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthContext>
  </StrictMode>,
);
