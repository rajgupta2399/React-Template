import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvideer } from "next-themes";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <NextThemesProvideer
        attribute="class"
        defaultTheme="dark"
        themes={["light", "dark", "modern"]}
      >
        <RouterProvider router={appRouter} />
      </NextThemesProvideer>
    </NextUIProvider>
  </React.StrictMode>
);
