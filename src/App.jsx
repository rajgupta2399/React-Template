import "./App.css";
import Headers from "./components/Header/Headers";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ErrorPage from "./components/ErrorP/ErrorPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
