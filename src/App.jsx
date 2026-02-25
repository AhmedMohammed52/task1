import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Info from "./pages/Info";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Layout from "./Layout";

const router = createBrowserRouter(
  [
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "blog", element: <Blog /> },
        { path: "info", element: <Info /> },
        { path: "about", element: <About /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  {
    basename: "/task1/",
  },
);

export default function App() {
  return (
    <>
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  );
}
